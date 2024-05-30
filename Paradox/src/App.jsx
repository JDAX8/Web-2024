import React, { useState } from 'react';
import { Footer, Header } from './components';
import { AppRouter } from './router/AppRouter';
import { useLocation } from 'react-router-dom';
import  appFirebase  from '../src/services/firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth =getAuth(appFirebase)

export default function App() {
  const location = useLocation();
/*   const [usuairo, setUsuairo] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if (usuarioFirebase) {
      setUsuairo(usuarioFirebase)
    }
    else
    setUsuairo(null)
  })
   */
  // Verifica si la ubicación actual es "/contact"
  const isContactPage = location.pathname === '/contact' || location.pathname === '/post' || location.pathname === '/whoweare' || location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      {!isContactPage && <Header />}
      
      <AppRouter />

      {!isContactPage && <Footer />}
    </>
  );
}
