import Layout from '@/components/Layout'
import Ticket from '@/components/Ticket';
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import Od_login from './od-login';



export const Irctc = () => {
  const {login, setLogin } = useAuth();

if (!login) {
  return <Od_login />
}

  return (
    <Layout>
      <Ticket header="Train Ticket"/>
    </Layout>
  )
}

export default Irctc;
