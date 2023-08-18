import '@/styles/globals.css';
// import { SessionProvider } from "next-auth/react";
import { AuthProvider } from '../context/AuthContext'
import { AdminProvider } from '../context/AdminContext'

export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <AdminProvider>
    <AuthProvider> {/* Wrap with your AuthProvider */}
      <Component {...pageProps} />
    </AuthProvider>
    </AdminProvider>
  )
}
