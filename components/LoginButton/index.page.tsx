import { NextPage } from 'next';
import { LoginButton } from './loginButton';
import { useUser } from '../../hooks/useUser';
import { useRouter } from 'next/router';

interface LogginButtonProps {
  text: string
}

const LogginButton: NextPage<LogginButtonProps> = (props) => {
  const { logoutUser } = useUser()
  const router = useRouter()
  const { text } = props;

  const handleLogout = () => {
    router.push('/')
    window.localStorage.clear()
    window.sessionStorage.clear()
    logoutUser()
  }

  return (
    <LoginButton type='button' onClick={handleLogout}>{text}</LoginButton>
  )
}

export default LogginButton
