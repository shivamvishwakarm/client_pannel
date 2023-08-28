import Layout from '@/components/Layout'
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import Od_login from './od-login';

export const  Support = () => {
  const {login, setLogin } = useAuth();

if (!login) {
  return <Od_login />

}
  return (
    <Layout>
        <h1 >Under Construction ⚠️</h1>

    </Layout>
  )
}

export default Support;