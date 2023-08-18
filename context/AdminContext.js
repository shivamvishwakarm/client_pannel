import { createContext, useContext, useState, useEffect } from 'react';
import { router } from 'next/router';

// Create a context
const AdminContext = createContext();

// Create a provider component
export function AdminProvider({ children }) {
  const [admin, setAdmin] = useState('');
  const [login, setLogin] = useState(false);

  useEffect(() => {  
    if (login) { 
      router.push('/admin');
    }
  }, [login]);


  return (
    <AdminContext.Provider value={{ admin, setAdmin, setLogin }}>
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