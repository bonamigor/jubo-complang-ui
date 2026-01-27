import { AxiosInstance } from 'axios';

const UnidadeMedidaService = (httpClient: AxiosInstance) => ({
  listarTodasUnidadesMedida: async () => {
    const response = await httpClient.get('/api/unidades-medida')

    return response.data
  },
})

export default UnidadeMedidaService
