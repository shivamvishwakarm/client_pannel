import React from 'react'
import { router } from 'next/router';
import { useState } from 'react';
import { LoginForm } from '@/components/login';
import { useAuth } from '../../components/AuthContext';


export const Od_login = () => {
 
  const { setUser, setLogin} = useAuth(); // setting user info and login status in authContext (context api)


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {

        const data = await response.json();

        setUser(data.user); // set user info
        setLogin(true); // set login status

        router.push('/od/dashboard'); // redirect to dashboard

      } else {
        const data = await response.json();
        console.log('Login error:', data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <LoginForm header="OD Login" handleSubmit={handleSubmit} setUserName={setUserName} setPassword={setPassword} />
  );
};

export default Od_login;

