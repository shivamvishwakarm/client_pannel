import React from 'react'
import { router } from 'next/router';
import { useState } from 'react';
import { LoginForm } from '@/components/login';
import { useAuth } from '@/context/AuthContext';


// DEMO LOGIC is here;

export const Member_login = () => {
 
  const { setRole,login, setUser, setLogin} = useAuth(); // setting user info and login status in authContext (context api)

let visible = true;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

// if (!login) {
//   return <Member_login />
// }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/m_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {

        const data = await response.json();
        
        if(!data.user.visible){
          alert('you are blocked by admin');
        }

        else{
          setUser(data.user); // set user info

      await  setRole('member'); // set user role
        setLogin(true); // set login status
        }
        

        // router.push('/member/dashboard'); // redirect to dashboard

      } else {
        const data = await response.json();
        alert('Please check your username and password');
        console.log('Login error:', data.message);
       
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <LoginForm header="Member Login" handleSubmit={handleSubmit} setUserName={setUserName} setPassword={setPassword} />
  );
};

export default Member_login;

