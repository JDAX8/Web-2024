import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Favorites } from '../pages'

export function AppRouter () {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/*' element={<p className='text-5xl p-5'>404</p>} />
    </Routes>
  )
}