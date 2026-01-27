import { AxiosInstance } from 'axios';

const ProdutoEstanteService = (httpClient: AxiosInstance) => ({
  cadastrarProdutoNaEstante: async ({ idEstante, idProduto, precoVenda, quantidade }:
    { idEstante: Number, idProduto: Number, precoVenda: string, quantidade: string }) => {
      const response = await httpClient.post(
        `/api/estantes/${idEstante}/produtos/${idProduto}/preco-quantidade`,
        { precoVenda, quantidade }
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

    atualizarProdutoNaEstante: async ({ idEstante, idProduto, precoVenda, quantidade }:
      { idEstante: Number, idProduto: Number, precoVenda: string, quantidade: string }) => {
        const response = await httpClient.put(
          `/api/estantes/${idEstante}/produtos/${idProduto}/preco-quantidade`,
          { precoVenda, quantidade }
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

    listarProdutosNaEstante: async (idEstante: number) => {
      const response = await httpClient.get(`api/estantes/${idEstante}/produtos/preco-quantidade-estante`)

      return response.data
    },

    listarProdutosNaEstantePedido: async (idEstante: number) => {
      const response = await httpClient.get(`api/estantes/${idEstante}/produtos/preco-quantidade-pedido`)

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

    listarProdutosNaEstanteReactQuery: async (idEstante: number) => {
      const response = await httpClient.get(`api/estantes/${idEstante}/produtos/preco-quantidade-estante`)

      return response.data
    },

    deletarProdutoDaEstante: async ({ idEstante, idProduto }: { idEstante: Number, idProduto: number }) => {
      const response = await httpClient.delete(`api/estantes/${idEstante}/produtos/${idProduto}`)

      let produtoEstanteErrors = null

      if (!response.data) {
        produtoEstanteErrors = {
          status: response.request.status,
          statusText: response.request.statusText
        }
      }

      return {
        data: response.data,
        produtoEstanteErrors
      }
    }
})

export default ProdutoEstanteService
