import { createContext, ReactNode, useContext, useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  clienteId: number;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  user: User;
  receiveUser: (user: User) => Promise<void>;
  logoutUser: () => Promise<void>;
  getUserData: () => Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({ id: 0, name: '', email: '', admin: false, clienteId: 0});

  async function receiveUser(user: User) {
    setUser(user);
  }

  async function logoutUser() {
    setUser({ id: 0, name: '', email: '', admin: false, clienteId: 0 })
  }

  async function getUserData() {
    const userData: User = {
      id: Number(window.sessionStorage.getItem('userId')),
      name: String(window.sessionStorage.getItem('userName')),
      email: String(window.sessionStorage.getItem('userEmail')),
      admin: String(window.sessionStorage.getItem('userAdmin')) === '1' ? true : false,
      clienteId: Number(window.sessionStorage.getItem('userClienteId')) ? Number(window.sessionStorage.getItem('userClienteId')) : 0
    }
    setUser(userData)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <UserContext.Provider value={{ user, receiveUser, logoutUser, getUserData }}>
      { children }
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
