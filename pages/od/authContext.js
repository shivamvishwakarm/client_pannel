import { createContext, useContext, useState } from 'react';
import { router } from 'next/router';
import { useEffect } from 'react';


// Create a context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {  
    if (login) { 
      router.push('/od/dashboard');
    }
  }, [login]);


  return (
    <AuthContext.Provider value={{ user, setUser, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the context
export function useAuth() {
  return useContext(AuthContext);
}



  // const login = (userData) => {
  //   setUser(userData);
  // };

  // const logout = () => {
  //   setUser(null);
  // };