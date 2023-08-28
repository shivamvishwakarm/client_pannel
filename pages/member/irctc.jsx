import Layout from '@/components/Layout'
import Ticket from '@/components/Ticket';
import React from 'react'
import Member_login from './member-login';
import { useAuth } from '@/context/AuthContext';

export const Irctc = () => {
  const {login, setLogin } = useAuth();

if (!login) {
  return <Member_login />
}

  return (
    <Layout>
      <Ticket header="Train Ticket"/>
    </Layout>
  )
}

export default Irctc;
