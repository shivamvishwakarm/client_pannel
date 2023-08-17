import React from 'react'
import { router } from 'next/router';
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { LoginForm } from '@/components/od/login';
import { useAuth } from './authContext';


export const Od_login = () => {
  // const [user,setUser] = useState({});
  const { setUser, setLogin} = useAuth();


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('userName:', userName);
    // console.log('password:', password);

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

        console.log('Login successful!'); // login successful
        router.push('/od/dashboard'); // redirect to dashboard
      } else {
        const data = await response.json();
        console.log('Login error:', data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // console.log('user in od-login:', user);

  return (
    <LoginForm header="OD Login" handleSubmit={handleSubmit} setUserName={setUserName} setPassword={setPassword} />
  );
};

export default Od_login;

