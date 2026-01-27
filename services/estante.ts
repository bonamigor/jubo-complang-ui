import { AxiosInstance } from 'axios'

const EstanteService = (httpClient: AxiosInstance) => ({
  listarUmaEstante: async (id: number) => {
    const response = await httpClient.get(`/api/estantes/${id}`)

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

  listarTodosAsEstantes: async () => {
    const response = await httpClient.get('/api/estantes')

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

  listarTodosAsEstantesReactQuery: async () => {
    const response = await httpClient.get('/api/estantes')

    return response.data
  },

  listarEstantesDoCliente: async (id: number) => {
    const response = await httpClient.get(`/api/cliente/${id}/estantes`)

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

  cadastrarEstante: async ({ periodo, clienteId, observacao }: 
    { periodo: string, clienteId: number, observacao: string }) => {
    const response = await httpClient.post(
      '/api/estantes',
      { periodo, clienteId, observacao, ativa: 1 }
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

  atualizarEstante: async ({ periodo, clienteId, observacao, id }: 
    { periodo: string, clienteId: number, observacao: string, id: number }) => {
    const response = await httpClient.put(
      '/api/estantes',
      { periodo, clienteId, observacao, id }
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

  atualizarStatusDoProdutoNaEstante: async ({ ativo, estanteId, produtoId }: 
    { ativo: number, estanteId: number, produtoId: number }) => {
    const response = await httpClient.patch(
      '/api/estante-produto/atualizar-status-produto',
      { ativo, estanteId, produtoId }
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

  deletarEstante: async (id: number) => {
    const response = await httpClient.delete(
      `/api/estantes/${id}`
    )

    let estanteErrors = null

    if (!response.data) {
      estanteErrors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      estanteErrors
    }
  },

  alterarEstadoDaEstante: async (id: number, status: number) => {
    const response = await httpClient.patch(`/api/estantes/${id}/${status}`)

    let estanteErrors = null

    if (!response.data) {
      estanteErrors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      estanteErrors
    }
  }
})

export default EstanteService
