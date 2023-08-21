import { createContext, useContext, useState, useEffect } from 'react';
import { router } from 'next/router';

// Create a context
const AdminContext = createContext();

// Create a provider component
export function AdminProvider({ children }) {
  const [admin, setAdmin] = useState('');
  const [login, setLogin] = useState(false);
  const [editMember, setEditMember] = useState({}); // this is the member);
  const [editOd, setEditOd] = useState({}); // this is the member);

  useEffect(() => {  
    if (login) { 
      router.push('/admin');
    }
  }, [login]);


  return (
    <AdminContext.Provider value={{ admin, setAdmin, login, setLogin, editMember, setEditMember, editOd, setEditOd }}>
      {children}
    </AdminContext.Provider>
  );
}

// Custom hook to access the context
export function useAdmin() {
  return useContext(AdminContext);
}



  // const login = (userData) => {
  //   setUser(userData);
  // };

  // const logout = () => {
  //   setUser(null);
  // };