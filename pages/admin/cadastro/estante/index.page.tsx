import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, SetStateAction, useEffect, useState } from 'react'
import toast from "react-hot-toast"
import NumberFormat from "react-number-format"
import { useQuery } from "react-query"
import AddImg from '../../../../assets/add.png'
import ConfirmImg from '../../../../assets/confirm.png'
import DeleteImg from '../../../../assets/delete.png'
import EditImg from '../../../../assets/edit.png'
import DeleteModal from "../../../../components/Modal/Delete/index.page"
import UpdateStatus from "../../../../components/Modal/UpdateStatus/index.page"
import Pagination from "../../../../components/Pagination/index.page"
import { clienteService, estanteService } from '../../../../services/index'
import { Cliente } from "../cliente/index.page"
import { Container, Content, FormButton, FormItself, FormSubmitButton, InputFilter, TableContainer } from "./estante"

interface EstanteProps {
  id: number;
  clienteId: string;
  cliente: string;
  periodo: string;
  observacao: string;
  ativa: boolean;
}

const CadastroEstante: NextPage = () => {
  const router = useRouter()
  const [isUpdate, setIsUpdate] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isUpdateStatusModalOpen, setIsUpdateStatusModalOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const [filteredEstantes, setFilteredEstantes] = useState<EstanteProps[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostsPerPage] = useState(5)
  const [isValid, setIsValid] = useState(false)

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;

  const [id, setId] = useState(0)
  const [cliente, setCliente] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [observacao, setObservacao] = useState('')
  const [status, setStatus] = useState(0)

  const validate = () => cliente.length > 0 && periodo.length > 0 && observacao.length > 0 

  useEffect(() => {
    const isValid = validate();
    setIsValid(isValid);
  }, [cliente, periodo, observacao])

  const VINTE_E_QUATRO_HORAS = (60 *  1000) * 60 * 24

  const { data: estanteResponse, isLoading: isLoadingEstantes } = useQuery('getAllEstantes', estanteService.listarTodosAsEstantesReactQuery, { staleTime: VINTE_E_QUATRO_HORAS }) 
  const { data: clienteResponse, isLoading: isLoadingClientes } = useQuery('getAllClientes', clienteService.listarTodosOsClientesReactQuery, { staleTime: VINTE_E_QUATRO_HORAS })

  let estantes: Array<EstanteProps> = [];
  let clientes: Array<any> = [];
  let estantesPaginadas: Array<EstanteProps> = [];

  if (estanteResponse && clienteResponse) {
    estantes = estanteResponse.estantes
    clientes = clienteResponse.clientes
    estantesPaginadas = estanteResponse.estantes.slice(firstIndex, lastIndex);
  }

  const handleFilterEstanteList = (event: any) => {
    setFilter(event.toUpperCase())
    setFilteredEstantes(estantes.filter(estante => {
      return estante.cliente.toUpperCase().includes(filter)
    }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const { errors } = await estanteService.cadastrarEstante({
        clienteId: Number(cliente.split(' ')[0]),
        periodo: periodo,
        observacao
      })
      if (!errors) {
        toast.success('Estante cadastrada com sucesso!')
        router.reload()
      }
    } catch (error) {
      toast.error('Erro ao criar Estante!')
      console.error(error)
    }
  }

  const prepareUpdate = async (estante: EstanteProps) => {
    setId(estante.id)
    setCliente(`${estante.clienteId} - ${estante.cliente}`)
    setPeriodo(estante.periodo)
    setObservacao(estante.observacao)
    setIsUpdate(true)
  }

  const handleUpdate = async () => {
    try {
      const { errors } = await estanteService.atualizarEstante({
        clienteId: Number(cliente.split(' ')[0]),
        periodo: periodo,
        observacao,
        id: id
      })
      if (!errors) {
        toast.success('Estante atualizado com sucesso!')
        router.reload()
      }
    } catch (error) {
      toast.error('Erro ao cadastrar estante.')
      console.error(error)
    }
  }

  const handleDeleteEstante = (estante: EstanteProps) => {
    setId(estante.id)
    setIsDeleteModalOpen(true)
  }

  const handleUpdateEstanteStatus = (estante: EstanteProps) => {
    setId(estante.id)
    setStatus(estante.ativa ? 0 : 1)
    setIsUpdateStatusModalOpen(true)
  }

  const onRequestClose = () => {
    setIsUpdateStatusModalOpen(false)
    setIsDeleteModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>Cadastro de Estante</title>
      </Head>
      <Container>
        <Content>
          <h1>Cadastro de Estante</h1>
          <FormItself onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Pesquise o Cliente" 
                list="clientes" id="cliente-choice" name="cliente-choice" autoComplete="off"
                value={cliente} onChange={event => {setCliente(event.target.value)}} />
              <datalist id="clientes">
                {isLoadingClientes && <h1>Carregando clientes...</h1>}
                {clientes.map((cliente: Cliente) => {
                  return (<option key={cliente.id} value={`${cliente.id} - ${cliente.nome}`} />)
                })}
              </datalist>
              <NumberFormat format="####/##" type="text" id="price" value={periodo} 
                onChange={(event: { target: { value: SetStateAction<string>; }; }) => {setPeriodo(event.target.value)}} 
                placeholder="Período" 
              />
              <input type="text" placeholder="Observação" value={observacao} onChange={event => {setObservacao(event.target.value)}} />
            </div>
            <FormSubmitButton type="submit" isUpdate={isUpdate} disabled={!isValid}>Cadastrar</FormSubmitButton>
            <FormButton type="button" isUpdate={isUpdate} onClick={() => handleUpdate()}>Atualizar</FormButton>
          </FormItself>
        </Content>
        <InputFilter>
          <input type="text" placeholder="Filtre pelo cliente" onChange={event => handleFilterEstanteList(event.target.value)} />
        </InputFilter>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID - Cliente</th>
                <th>Período</th>
                <th>Observação</th>
                <th>Ativa</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {filter.length > 1 ? (
                filteredEstantes.map(estante => {
                  return (
                    <tr key={estante.id}>
                      <td>{`${estante.clienteId} - ${estante.cliente}`}</td>
                      <td>{estante.periodo}</td>
                      <td>{estante.observacao}</td>
                      <td>{estante.ativa ? 'SIM' : 'NAO'}</td>
                      <td>
                        <a><Image onClick={() => prepareUpdate(estante)} src={EditImg} alt="Visualizar" width={30} height={30} /></a>
                        <a><Image onClick={() => handleDeleteEstante(estante)} src={DeleteImg} alt="Deletar" width={30} height={30} /></a>
                        <a><Image onClick={() => handleUpdateEstanteStatus(estante)} src={ConfirmImg} alt="Deletar" width={30} height={30} /></a>
                        <a><Image onClick={() => router.push(`estante/${estante.id}/produtos`)} src={AddImg} alt="Adicionar" width={30} height={30} /></a>
                      </td>
                    </tr>
                  )
                })
              ) : (
                estantesPaginadas.map(estante => {
                  return (
                    <tr key={estante.id}>
                      <td>{`${estante.clienteId} - ${estante.cliente}`}</td>
                      <td>{estante.periodo}</td>
                      <td>{estante.observacao}</td>
                      <td>{estante.ativa ? 'SIM' : 'NAO'}</td>
                      <td>
                        <a><Image onClick={() => prepareUpdate(estante)} src={EditImg} alt="Visualizar" width={30} height={30} /></a>
                        <a><Image onClick={() => handleDeleteEstante(estante)} src={DeleteImg} alt="Deletar" width={30} height={30} /></a>
                        <a><Image onClick={() => handleUpdateEstanteStatus(estante)} src={ConfirmImg} alt="Deletar" width={30} height={30} /></a>
                        <a><Image onClick={() => router.push(`estante/${estante.id}/produtos`)} src={AddImg} alt="Adicionar" width={30} height={30} /></a>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </TableContainer>
        {estantesPaginadas.length > 0 && <Pagination totalPosts={estantes.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />}
        <DeleteModal isOpen={isDeleteModalOpen} onRequestClose={onRequestClose} entity='Estante' id={id} />
        <UpdateStatus isOpen={isUpdateStatusModalOpen} onRequestClose={onRequestClose} estanteId={Number(id)} statusEstante={status} />
      </Container>
    </>
  )
}

export default CadastroEstante
