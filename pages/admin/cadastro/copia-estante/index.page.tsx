import { NextPage } from "next"
import Head from "next/head"
import { FormEvent, useEffect, useState } from 'react'
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import { clienteService, estanteService } from '../../../../services/index'
import { Cliente } from "../cliente/index.page"
import { EstanteProps } from "../estante/index.page"
import { 
  Container, 
  Content, 
  FormItself, 
  FormSubmitButton, 
  SelectContainer,
  SelectGroup,
  InfoBox,
  LoadingMessage,
  DatalistInput,
  ClearButton
} from "./copia-estante"

interface CopiarEstanteProps {
  estanteOrigemId: number;
  estanteDestinoId: number;
}

const CopiarEstante: NextPage = () => {
  const [isValid, setIsValid] = useState(false)
  const [clienteOrigemId, setClienteOrigemId] = useState('')
  const [clienteOrigemInput, setClienteOrigemInput] = useState('')
  const [clienteDestinoId, setClienteDestinoId] = useState('')
  const [clienteDestinoInput, setClienteDestinoInput] = useState('')
  const [estantesOrigem, setEstantesOrigem] = useState<EstanteProps[]>([])
  const [estantesDestino, setEstantesDestino] = useState<EstanteProps[]>([])
  const [estanteOrigemId, setEstanteOrigemId] = useState('')
  const [estanteDestinoId, setEstanteDestinoId] = useState('')
  const [isLoadingEstantesOrigem, setIsLoadingEstantesOrigem] = useState(false)
  const [isLoadingEstantesDestino, setIsLoadingEstantesDestino] = useState(false)

  const VINTE_E_QUATRO_HORAS = (60 * 1000) * 60 * 24

  // Buscar clientes
  const { data: clienteResponse, isLoading: isLoadingClientes } = useQuery(
    'getAllClientes', 
    clienteService.listarTodosOsClientesReactQuery, 
    { staleTime: VINTE_E_QUATRO_HORAS }
  )

  // Validar formulário
  useEffect(() => {
    const isValid = estanteOrigemId.length > 0 && 
                    estanteDestinoId.length > 0 && 
                    estanteOrigemId !== estanteDestinoId
    setIsValid(isValid)
  }, [estanteOrigemId, estanteDestinoId])

  // Buscar estantes do cliente de origem quando selecionado
  useEffect(() => {
    if (clienteOrigemId) {
      setIsLoadingEstantesOrigem(true)
      const fetchEstantesOrigem = async () => {
        const { data, errors } = await estanteService.listarEstantesDoCliente(Number(clienteOrigemId))
        if (!errors) {
          setEstantesOrigem(data.estantes)
          setIsLoadingEstantesOrigem(false)
        } else {
          setEstantesOrigem([])
          setIsLoadingEstantesOrigem(false)
        }
      }
      fetchEstantesOrigem()
    } else {
      setEstantesOrigem([])
      setEstanteOrigemId('')
    }
  }, [clienteOrigemId])

  // Buscar estantes do cliente de destino quando selecionado
  useEffect(() => {
    if (clienteDestinoId) {
      setIsLoadingEstantesDestino(true)
      const fetchEstantesDestino = async () => {
        const { data, errors } = await estanteService.listarEstantesDoCliente(Number(clienteDestinoId))
        if (!errors) {
          setEstantesDestino(data.estantes)
          setIsLoadingEstantesDestino(false)
        } else {
          setEstantesDestino([])
          setIsLoadingEstantesDestino(false)
        }
      }
      fetchEstantesDestino()
    } else {
      setEstantesDestino([])
      setEstanteDestinoId('')
    }
  }, [clienteDestinoId])

  let clientes: Array<Cliente> = []
  if (clienteResponse) {
    clientes = clienteResponse.clientes
  }

  // Função para extrair ID do cliente do formato "ID - Nome"
  const extractClienteId = (inputValue: string): string => {
    const match = inputValue.match(/^(\d+)\s*-\s*/)
    return match ? match[1] : ''
  }

  // Handler para selecionar cliente origem
  const handleClienteOrigemChange = (value: string) => {
    setClienteOrigemInput(value)
    const id = extractClienteId(value)
    setClienteOrigemId(id)
    if (!id) {
      setEstantesOrigem([])
      setEstanteOrigemId('')
    }
  }

  // Handler para selecionar cliente destino
  const handleClienteDestinoChange = (value: string) => {
    setClienteDestinoInput(value)
    const id = extractClienteId(value)
    setClienteDestinoId(id)
    if (!id) {
      setEstantesDestino([])
      setEstanteDestinoId('')
    }
  }

  // Limpar cliente origem
  const clearClienteOrigem = () => {
    setClienteOrigemInput('')
    setClienteOrigemId('')
    setEstantesOrigem([])
    setEstanteOrigemId('')
  }

  // Limpar cliente destino
  const clearClienteDestino = () => {
    setClienteDestinoInput('')
    setClienteDestinoId('')
    setEstantesDestino([])
    setEstanteDestinoId('')
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      if (!clienteOrigemId || !clienteDestinoId) {
        toast.error('Selecione clientes válidos para origem e destino')
        return
      }

      const dadosCopiar: CopiarEstanteProps = {
        estanteOrigemId: Number(estanteOrigemId),
        estanteDestinoId: Number(estanteDestinoId)
      }

      const { data: dataCopiar, estanteErrors } = await estanteService.copiarProdutosEntreEstantes(dadosCopiar)
      
      if (!estanteErrors) {
        toast.success('Produtos copiados com sucesso!')
        
        // Limpar formulário após sucesso
        clearClienteOrigem()
        clearClienteDestino()
      }
    } catch (error: any) {
      toast.error(error?.message || 'Erro ao copiar produtos entre estantes!')
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Copiar Produtos entre Estantes</title>
      </Head>
      <Container>
        <Content>
          <h1>Copiar Produtos entre Estantes</h1>
          <InfoBox>
            <p>Digite o nome ou ID do cliente para filtrar e selecione na lista.</p>
            <p>Os produtos da estante de origem serão copiados para a estante de destino.</p>
          </InfoBox>
          <FormItself onSubmit={handleSubmit}>
            <SelectGroup>
              <div>
                <h2>Origem</h2>
                
                <SelectContainer>
                  <label htmlFor="cliente-origem-input">Cliente de Origem</label>
                  <div style={{ position: 'relative' }}>
                    <DatalistInput
                      id="cliente-origem-input"
                      type="text"
                      list="clientes-origem"
                      placeholder="Digite para filtrar (nome ou ID)..."
                      value={clienteOrigemInput}
                      onChange={(event) => handleClienteOrigemChange(event.target.value)}
                      disabled={isLoadingClientes}
                    />
                    {clienteOrigemInput && (
                      <ClearButton type="button" onClick={clearClienteOrigem}>
                        ×
                      </ClearButton>
                    )}
                    <datalist id="clientes-origem">
                      {isLoadingClientes && <option>Carregando clientes...</option>}
                      {clientes.map((cliente: Cliente) => (
                        <option key={cliente.id} value={`${cliente.id} - ${cliente.nome}`}>
                          {cliente.nome}
                        </option>
                      ))}
                    </datalist>
                  </div>
                </SelectContainer>

                <SelectContainer>
                  <label htmlFor="estante-origem">Estante de Origem</label>
                  <select 
                    id="estante-origem" 
                    value={estanteOrigemId}
                    onChange={event => setEstanteOrigemId(event.target.value)}
                    disabled={!clienteOrigemId || isLoadingEstantesOrigem}
                  >
                    <option value="">Selecione uma estante</option>
                    {isLoadingEstantesOrigem && <option>Carregando estantes...</option>}
                    {estantesOrigem.map((estante: EstanteProps) => (
                      <option key={estante.id} value={estante.id}>
                        {estante.periodo} - {estante.observacao} ({estante.ativa ? 'Ativa' : 'Inativa'})
                      </option>
                    ))}
                  </select>
                  {clienteOrigemId && !isLoadingEstantesOrigem && estantesOrigem.length === 0 && (
                    <LoadingMessage>Nenhuma estante encontrada para este cliente</LoadingMessage>
                  )}
                </SelectContainer>

                {estanteOrigemId && (
                  <SelectContainer>
                    <label>Produtos na estante origem:</label>
                    <span>
                      {estantesOrigem.find(e => e.id === Number(estanteOrigemId))?.ativa 
                        ? 'Estante ativa com produtos disponíveis' 
                        : 'Estante inativa'}
                    </span>
                  </SelectContainer>
                )}
              </div>

              <div>
                <h2>Destino</h2>
                
                <SelectContainer>
                  <label htmlFor="cliente-destino-input">Cliente de Destino</label>
                  <div style={{ position: 'relative' }}>
                    <DatalistInput
                      id="cliente-destino-input"
                      type="text"
                      list="clientes-destino"
                      placeholder="Digite para filtrar (nome ou ID)..."
                      value={clienteDestinoInput}
                      onChange={(event) => handleClienteDestinoChange(event.target.value)}
                      disabled={isLoadingClientes}
                    />
                    {clienteDestinoInput && (
                      <ClearButton type="button" onClick={clearClienteDestino}>
                        ×
                      </ClearButton>
                    )}
                    <datalist id="clientes-destino">
                      {isLoadingClientes && <option>Carregando clientes...</option>}
                      {clientes.map((cliente: Cliente) => (
                        <option key={cliente.id} value={`${cliente.id} - ${cliente.nome}`}>
                          {cliente.nome}
                        </option>
                      ))}
                    </datalist>
                  </div>
                </SelectContainer>

                <SelectContainer>
                  <label htmlFor="estante-destino">Estante de Destino</label>
                  <select 
                    id="estante-destino" 
                    value={estanteDestinoId}
                    onChange={event => setEstanteDestinoId(event.target.value)}
                    disabled={!clienteDestinoId || isLoadingEstantesDestino}
                  >
                    <option value="">Selecione uma estante</option>
                    {isLoadingEstantesDestino && <option>Carregando estantes...</option>}
                    {estantesDestino.map((estante: EstanteProps) => (
                      <option key={estante.id} value={estante.id}>
                        {estante.periodo} - {estante.observacao} ({estante.ativa ? 'Ativa' : 'Inativa'})
                      </option>
                    ))}
                  </select>
                  {clienteDestinoId && !isLoadingEstantesDestino && estantesDestino.length === 0 && (
                    <LoadingMessage>Nenhuma estante encontrada para este cliente</LoadingMessage>
                  )}
                </SelectContainer>

                {estanteDestinoId && (
                  <SelectContainer>
                    <label>Produtos na estante destino:</label>
                    <span>
                      {estantesDestino.find(e => e.id === Number(estanteDestinoId))?.ativa 
                        ? 'Estante ativa (produtos existentes serão mantidos)' 
                        : 'Estante inativa'}
                    </span>
                  </SelectContainer>
                )}
              </div>
            </SelectGroup>

            <FormSubmitButton type="submit" disabled={!isValid}>
              Copiar Produtos
            </FormSubmitButton>
          </FormItself>
        </Content>
      </Container>
    </>
  )
}

export default CopiarEstante