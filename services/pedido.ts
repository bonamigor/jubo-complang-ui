import { AxiosInstance } from 'axios'

export interface PedidosProps {
  id: number;
  dataCriacao: number;
  dataEntrega: number;
  valorTotal: number;
  status: string;
  observacao: string;
  obsCancelamento: string;
  nome: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  empresa?: number;
  isFinalizado: number;
}

export interface PedidosObject {
  pedidos: Array<PedidosProps>;
}

const PedidoService = (httpClient: AxiosInstance) => ({
  criarPedido: async (clienteId: number) => {
    const response = await httpClient.post(
      '/api/pedidos',
      { clienteId })

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

  listarPedidos: async ():Promise<PedidosObject> => {
    const response = await httpClient.get('/api/pedidos')

    return response.data
  },

  listarPedidosEntreDatas: async ({ dataInicial, dataFinal }: 
    { dataInicial: number, dataFinal: number}) => {
    const response = await httpClient.get(`/api/pedidos/relatorio/datas/${dataInicial}/to/${dataFinal}`, {  })

    return response.data
  },

  listarPedidosByCliente: async (clienteId: number) => {
    const response = await httpClient.get(`/api/pedidos/cliente/${clienteId}`)

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

  listarPedidosDeAmanha: async ():Promise<PedidosObject> => {
    const response = await httpClient.get('/api/pedidos/amanha')

    return response.data
  },

  listarPedidoById: async (pedidoId: number) => {
    const response = await httpClient.get(`/api/pedidos/${pedidoId}`)

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

  listarPedidoByIdRq: async (pedidoId: number) => {
    const response = await httpClient.get(`/api/pedidos/${pedidoId}`)

    return response.data
  },

  listarUltimoPedidoByCliente: async (clienteId: number) => {
    const response = await httpClient.get(`/api/pedidos/ultimo/${clienteId}`)

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

  listarProdutosByPedidoId: async (pedidoId: number ) => {
    const response = await httpClient.get(`/api/pedidos/${pedidoId}/produtos`)

    return response.data
  },
  
  gerarRelatorioPedidos: async ({ clienteId, dataInicial, dataFinal }: { clienteId: number, dataInicial: number, dataFinal: number }) => {
    const response = await httpClient.post('/api/pedidos/relatorio-data', { clienteId, dataInicial, dataFinal })

    return response.data
  },

  gerarRelatorioPedidosOld: async ({ clienteId, dataInicial, dataFinal }: { clienteId: number, dataInicial: number, dataFinal: number }) => {
    const response = await httpClient.post('/api/pedidos/relatorio-data', { clienteId, dataInicial, dataFinal })

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

  listarProdutosByPedidoIdOld: async (pedidoId: number ) => {
    const response = await httpClient.get(`/api/pedidos/${pedidoId}/produtos`)

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

  relatorioAnaliticoDePedidos: async ({ clienteId, dataInicial, dataFinal }: { clienteId: number, dataInicial: number, dataFinal: number }) => {
    const response = await httpClient.post('/api/pedidos/relatorio-data/analitico', { clienteId, dataInicial, dataFinal })

    return response.data
  },

  valorTotalPedidoByPedidoId: async (pedidoId: number) => {
    const response = await httpClient.get(`/api/pedidos/${pedidoId}/valorTotal`)

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

  valorTotalPedidoByPedidoIdRq: async (pedidoId: number) => {
    const response = await httpClient.get(`/api/pedidos/${pedidoId}/valorTotal`)

    return response.data
  },

  deletarPedidoById: async (pedidoId: number) => {
    const response = await httpClient.delete(`/api/pedidos/${pedidoId}`)

    let pedidoErrors = null

    if (!response.data) {
      pedidoErrors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      pedidoErrors
    }
  },

  atualizarValorTotal: async (pedidoId: number, valorTotal?: number) => {
    const response = await httpClient.put(`/api/pedidos/${pedidoId}/atualizar/valorTotal`, { valorTotal })

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

  recuperarValorTotal: async (pedidoId: number) => {
    const response = await httpClient.get(`/api/pedidos/${pedidoId}/recuperarValorTotal`)

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


  confirmarPedidoById: async ({ pedidoId, dataEntrega }: { pedidoId: number, dataEntrega: number }) => {
    const response = await httpClient.put(`/api/pedidos/${pedidoId}/confirmar`, { dataEntrega })

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

  cancelarPedidoById: async (pedidoId: number) => {
    const response = await httpClient.put(`/api/pedidos/${pedidoId}/cancelar`)

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

  cancelarPedidoByIdComObservacao: async ({ pedidoId, observacao }: { pedidoId: number, observacao: string }) => {
    const response = await httpClient.put(`/api/pedidos/${pedidoId}/cancelar-com-observacao`, { observacao })

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

  atualizarDataEntregaPedido: async (pedidoId: number, dataEntrega: number) => {
    const response = await httpClient.patch(`/api/pedidos/${pedidoId}/alterar/entrega/${dataEntrega}`)

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

  setarPedidoComoEntregue: async (pedidoId: number) => {
    const response = await httpClient.patch(`/api/pedidos/${pedidoId}/entrega`)

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

  setarEmpresaAoPedido: async (pedidoId: number, idEmpresa: number) => {
    const response = await httpClient.patch(`/api/pedidos/${pedidoId}/empresa/${idEmpresa}`)

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

  finalizarPedido: async (pedidoId: number) => {
    const response = await httpClient.patch(`/api/pedidos/${pedidoId}/finalizar`)

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

  adicionarObservacao: async ({ observacao, pedidoId }: { observacao: string, pedidoId: number }) => {
    const response = await httpClient.put(`/api/pedidos/${pedidoId}/observacao`, { observacao })

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

  recuperarValorVendaProduto: async ({ estanteId, produtoId }: { estanteId: string, produtoId: string }) => {
    const response = await httpClient.get(`/api/estante/${estanteId}/produto/${produtoId}/precoVenda`)

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
  }
  
})

export default PedidoService
