import '@/styles/globals.css';
// import { SessionProvider } from "next-auth/react";
import { AuthProvider } from '../components/AuthContext'

export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <AuthProvider> {/* Wrap with your AuthProvider */}
      <Component {...pageProps} />
    </AuthProvider>
  )
}
