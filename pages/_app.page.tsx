import { GlobalStyle } from '../styles/global'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/index.page'
import { UserProvider } from '../hooks/useUser';
import toast, { Toaster } from 'react-hot-toast';
import { PedidoProvider } from '../hooks/usePedido'
import Modal from 'react-modal'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Head from 'next/head';

Modal.setAppElement('#__next')

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    const userId = window.sessionStorage.getItem('userId')
    const userAdmin = window.sessionStorage.getItem('userAdmin')
    const clienteId = window.sessionStorage.getItem('userClientId')

    if (!userId) {
      setIsUserLoggedIn(false)
    } else {
      setIsUserLoggedIn(true)
    }

    if (!router.pathname.includes('cliente') && clienteId) {
      toast.error('Você não possui acesso para esta página! Te redirecionamos para a página de Login')
      router.push('/')
      window.localStorage.clear()
      window.sessionStorage.clear()
    }

  }, [router, router.pathname])

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <UserProvider>
        <PedidoProvider>
          {router.pathname.includes('retrospectiva') ? (<></>) : (<Navbar isUserLoggedIn={isUserLoggedIn} />)}
          <Toaster
            position="top-right"
            reverseOrder={false}/>
          <Component {...pageProps} />
          <GlobalStyle />
        </PedidoProvider>
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
