import { NextPage } from "next";
import { ChangePasswordForm, Container, Content, FormButton } from "./senha";

import Head from "next/head";
import { useUser } from "../../../hooks/useUser";
import { useState } from "react";
import { usuarioService } from "../../../services";
import toast from "react-hot-toast";
import router from "next/router";


const AlterarSenha: NextPage = () => {
  const { user, logoutUser } = useUser()
  const [email, setEmail] = useState(user.email)
  const [novaSenha, setNovaSenha] = useState('');
  const [clienteId] = useState(user.clienteId);

  const handleLogout = () => {
    router.push('/')
    window.localStorage.clear()
    window.sessionStorage.clear()
    logoutUser()
  }

  const handleUpdate = async () => {
    try {
      const { errors } = await usuarioService.atualizarUsuarioRegular({
        nome: user.name,
        email: user.email,
        senha: novaSenha,
        clienteId: String(clienteId),
        id: user.id
      })

      if (!errors) {
        toast.success('Usuário atualizado com sucesso!')
        toast.success('Refaça o login com os novos dados.')
        handleLogout()
      }
    } catch (error) {
      toast.error('Erro ao atualizar o Usuário.')
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Jubo Notas - Alterar Senha</title>
      </Head>    
      <Container>
        <Content>
          <h1>Alterar a senha</h1>
          <p>Digite a senha abaixo e clique para alterar!</p>
          <ChangePasswordForm>
            <input type="email" placeholder="E-mail" value={user.email} onChange={event => {setEmail(event.target.value)}} />
            <input type="password" placeholder="Nova Senha" value={novaSenha} onChange={event => {setNovaSenha(event.target.value)}} />
            <FormButton type="button" id="button" onClick={() => handleUpdate()}>Atualizar</FormButton>
          </ChangePasswordForm>
        </Content>

      </Container>
    </>
  )
}

export default AlterarSenha
