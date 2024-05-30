import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import React from 'react';


export function PrivateRoute ({ children }) {
  const { actualUser, userIsLogged } = useAuth()
  const { pathname } = useLocation()

  if (!userIsLogged && !actualUser) {
    return (
      <Navigate
        to='/'
        state={{ prevPage: '/post' }}
      />
    )
  }

  return children
}