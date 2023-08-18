import React from 'react'
import { router } from 'next/router';
import { useState } from 'react';
import { LoginForm } from '@/components/login';
import { useAdmin } from '@/context/AdminContext';


export const AdminLogin = () => {
 
  // const { setUser, setLogin} = useAuth(); // setting user info and login status in authContext (context api)
  const {setAdmin} = useAdmin(); // setting user info and login status in authContext (context api) } 

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const adminName = 'personal';
  const adminPassword = 'password';



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('userName:', userName);
    console.log('password:', password);
    if (userName !== adminName || password !== adminPassword) {
      alert('Invalid username or password');
      setUserName('');
      setPassword('');
    } else {
      setAdmin("admin");
      router.push('/admin'); // redirect to dashboard
      // You can add your logic for setting user info and login status here
    }

  };


  return (
    <LoginForm header="Admin Login" handleSubmit={handleSubmit} setUserName={setUserName} setPassword={setPassword} />
  );
};

export default AdminLogin;

