import { NextPage } from "next";
import { FormEvent, useEffect, useState } from 'react';
import Image from "next/image";
import EditImg from '../../../../assets/edit.png'
import DeleteImg from '../../../../assets/delete.png'
import { Container, Content, FormButton, FormItself, FormSubmitButton, InputFilter, TableContainer } from './cliente';
import { useRouter } from "next/router";
import { clienteService } from "../../../../services";
import toast from 'react-hot-toast';
import DeleteModal from "../../../../components/Modal/Delete/index.page";
import Head from "next/head";
import { useQuery, useQueryClient } from "react-query";
import Pagination from "../../../../components/Pagination/index.page";

export interface Cliente {
  id: number;
  nome: string;
  cnpj: string;
  endereco: string;
  email: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  ativo: string;
}

type ClienteInput = Omit<Cliente, 'id'>

const CadastroCliente: NextPage = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [isUpdate, setIsUpdate] = useState(false)
  const [filter, setFilter] = useState('')
  const [filteredClients, setFilteredClients] = useState<Cliente[]>([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostsPerPage] = useState(5)
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;

  const VINTE_E_QUATRO_HORAS = (60 *  1000) * 60 * 24

  const { data: clienteResponse, isLoading } = useQuery('getAllClientes', clienteService.listarTodosOsClientesReactQuery, { staleTime: VINTE_E_QUATRO_HORAS })

  let clientes: Array<Cliente> = [];
  let clientesPaginados: Array<Cliente> = [];

  if (clienteResponse) {
    clientes = clienteResponse.clientes
    clientesPaginados = clienteResponse.clientes.slice(firstIndex, lastIndex);  
  }

  const handleFilterClienteList = (event: any) => {
    setFilter(event.toUpperCase())
    setFilteredClients(clienteResponse.clientes.filter((client: Cliente) => {
      return client.nome.toUpperCase().includes(filter)
    }))
  }
  
  const [id, setId] = useState(0)
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [telefone, setTelefone] = useState('')
  const [ativo, setAtivo] = useState('')
  const [isValid, setIsValid] = useState(false)

  const validate = () => nome.length > 0 && cnpj.length > 0 && email.length > 0 && endereco.length > 0 && cep.length > 0 && cidade.length > 0 && estado.length > 0 && telefone.length > 0

  useEffect(() => {
    const isValid = validate();
    setIsValid(isValid);
  }, [nome, cnpj, email, endereco, cep, cidade, estado, telefone])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    
    const newCliente: ClienteInput = {
      nome, cnpj, email, endereco, cep, cidade, estado, telefone, ativo: '1'
    }

    try {
      const { errors } = await clienteService.cadastrarCliente(newCliente)

      if (!errors) {
        queryClient.invalidateQueries('getAllClientes')
        toast.success('Cliente cadastrado com sucesso.')
        cleanFields()
      } else {
        toast.error('Erro ao adicionar o Cliente.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const prepareUpdate = (cliente: Cliente) => {
    setId(cliente.id)
    setNome(cliente.nome)
    setCnpj(cliente.cnpj)
    setEmail(cliente.email)
    setEndereco(cliente.endereco)
    setCep(cliente.cep)
    setCidade(cliente.cidade)
    setEstado(cliente.estado)
    setTelefone(cliente.telefone)
    setAtivo(cliente.ativo)
    setIsUpdate(true)
  }

  const handleUpdate = async () => {
    const newCliente: Cliente = {
      id, nome, cnpj, email, endereco, cep, cidade, estado, telefone, ativo
    }

    const { errors } = await clienteService.atualizarCliente(newCliente)

    if (!errors) {
      toast.success('Cliente atualizado!')
      cleanFields()
      setIsUpdate(false)
      router.reload()
    } else {
      toast.error(errors.statusText)
    }
    
  }

  const cleanFields = () => {
    setNome('')
    setCnpj('')
    setEmail('')
    setEndereco('')
    setCep('')
    setCidade('')
    setEstado('')
    setTelefone('')
    setIsUpdate(false)
  }

  const deleteCliente = (cliente: Cliente) => {
    setId(cliente.id)
    setIsDeleteModalOpen(true)
  }

  const onRequestClose = () => {
    setIsDeleteModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>Cadastro de Cliente</title>
      </Head>
      <Container>
        <Content>
          <h1>Cadastro de Cliente</h1>
          <FormItself onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Nome" 
              value={nome} onChange={event => {setNome(event.target.value)}} />
            <input type="text" id="cnpj" placeholder="CNPJ" 
              value={cnpj} onChange={event => {setCnpj(event.target.value)}} />
            <input type="email" id="email" placeholder="E-mail" 
              value={email} onChange={event => {setEmail(event.target.value)}} />
            <input type="text" id="address" placeholder="Endereço" 
              value={endereco} onChange={event => {setEndereco(event.target.value)}} />
            <input type="text" id="cep" placeholder="CEP" 
              value={cep} onChange={event => {setCep(event.target.value)}} />
            <input type="text" id="city" placeholder="Cidade" 
              value={cidade} onChange={event => {setCidade(event.target.value)}} />
            <input type="text" id="state" placeholder="Estado" 
              value={estado} onChange={event => {setEstado(event.target.value)}} />
            <input type="text" id="phone" placeholder="Telefone" 
              value={telefone} onChange={(event) => {setTelefone(event.target.value)}} />

            <FormSubmitButton type="submit" id="button" isUpdate={isUpdate} disabled={!isValid}>Cadastrar</FormSubmitButton>
            <FormButton type="button" id="button" isUpdate={isUpdate} onClick={() => handleUpdate()}>Atualizar</FormButton>
          </FormItself>
        </Content>
        <InputFilter>
          <input type="text" placeholder="Filtre pelo nome do Cliente" onChange={event => handleFilterClienteList(event.target.value)} />
        </InputFilter>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cidade/Estado</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {filter.length > 1 ? (
                filteredClients.map(client => {
                  return (
                    <tr key={client.id.toString()}>
                      <td>{client.nome}</td>
                      <td>{client.cidade}/{client.estado}</td>
                      <td>{client.email}</td>
                      <td>{client.telefone}</td>
                      <td>
                        <a><Image onClick={() => prepareUpdate(client)} src={EditImg} alt="Visualizar" width={30} height={30} /></a>
                        <a><Image onClick={() => {deleteCliente(client)}} src={DeleteImg} alt="Confirmar" width={30} height={30} /></a>
                      </td>
                    </tr>
                  )
                })
              ) : (
                clientesPaginados.map((cliente: Cliente) => {
                  return (
                    <tr key={String(cliente.id)}>
                      <td>{cliente.nome}</td>
                      <td>{cliente.cidade}/{cliente.estado}</td>
                      <td>{cliente.email}</td>
                      <td>{cliente.telefone}</td>
                      <td>
                        <a><Image onClick={() => prepareUpdate(cliente)} src={EditImg} alt="Visualizar" width={30} height={30} /></a>
                        <a><Image onClick={() => {deleteCliente(cliente)}} src={DeleteImg} alt="Confirmar" width={30} height={30} /></a>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </TableContainer>
        {clientesPaginados.length > 0 && <Pagination totalPosts={clientes.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />}
        <DeleteModal isOpen={isDeleteModalOpen} onRequestClose={onRequestClose} entity='Cliente' id={id} />
      </Container>
    </>
  )
}

export default CadastroCliente
