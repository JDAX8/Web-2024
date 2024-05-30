import React, { useState, useEffect } from 'react';
import { AuthContext } from './authContext';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import  appFirebase  from '../services/firebaseConfig'
import { getUserData } from '../services/firebase';


const auth = getAuth(appFirebase);

export function AuthContextProvider({ children }) {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [actualUser, setActualUser] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsLogged(true);

        getUserData(user.uid)
        .then(userData => {
          setActualUser(userData.owner)
        })
        .catch(error => {
          console.log('Error: ', error);
        });

      } else {
        setUserIsLogged(false);
        setActualUser('')
      }
    });

    return () => unsubscribe();
  }, []);


  const logIn = () => setUserIsLogged(true);

  const logOut = async () => {
    await signOut(auth);
    setUserIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ actualUser, userIsLogged, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
