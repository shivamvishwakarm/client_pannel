import Layout from '@/components/Layout'
import Ticket from '@/components/Ticket';
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import Member_login from './member-login';



export const AirTicket = () => {
  const {login, setLogin } = useAuth();

  if (!login) {
    return <Member_login />
  }
  return (
    <Layout>
      <Ticket header="Air Ticket"/>
    </Layout>
  )
}

export default AirTicket;
