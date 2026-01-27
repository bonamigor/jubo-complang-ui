import { AxiosInstance } from 'axios';


const AuthService = (httpClient: AxiosInstance) => ({
  login: async({ email, senha }: { email: string, senha: string }) => {
    const response = await httpClient.post('/api/autenticacao', {
      email, senha
    })

    return response.data
  }
})

export default AuthService
