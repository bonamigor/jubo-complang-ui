import { AxiosInstance } from 'axios';

const UsuarioService = (httpClient: AxiosInstance) => ({
  cadastrarUsuarioRegular: async ({ nome, email, senha, clienteId }: 
    { nome: string, email: string, senha: string, clienteId: string }) => {
    const response = await httpClient.post('/api/users/regular', {
      nome, email, senha, clienteId
    })

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },
  cadastrarUsuarioAdmin: async ({ nome, email, senha, admin }: 
    { nome: string, email: string, senha: string, admin: boolean }) => {
    const response = await httpClient.post('/api/users/admin', {
      nome, email, senha, admin
    })

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },
  atualizarUsuarioAdmin: async ({ nome, email, senha, admin, id }: 
    { nome: string, email: string, senha: string, admin: string, id: number }) => {
    const response = await httpClient.put(
      '/api/users/admin',
      { nome, email, senha, admin, id }
    )

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },
  atualizarUsuarioRegular: async ({ nome, email, senha, clienteId, id }: 
    { nome: string, email: string, senha: string, clienteId: string, id: number }) => {
    const response = await httpClient.put(
      '/api/users/regular',
      { nome, email, senha, clienteId, id }
    )

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },
  listarTodosOsUsuarios: async () => {
    const response = await httpClient.get('/api/users')

    return response.data
  },
  listarUmUsuario: async (id: number) => {
    const response = await httpClient.get(`/api/users/${id}`)

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },
  deletarUsuario: async (id: number) => {
    const response = await httpClient.delete(
      `/api/users/${id}`
    )

    let userErrors = null

    if (!response.data) {
      userErrors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      userErrors
    }
  }
})

export default UsuarioService
