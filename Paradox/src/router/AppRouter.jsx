import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Contact, PostPage, Landing, AboutUs, Projects, ProjectsOverview, Profile, SignUp, Login } from '../pages'
import { WhoWeAre } from '../pages/WhoWeAre/WhoWeAre';
import { PrivateRoute } from '../pages/PrivateRoute'


export function AppRouter () {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<AboutUs />} />

      <Route
        path='/post'
        element={<PrivateRoute><PostPage /></PrivateRoute>}
      />

      <Route path='/projectoverview/:projectId' element={<ProjectsOverview />} />

      <Route path="/profile/:developerId" element={<Profile />} />

      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/whoweare' element={<WhoWeAre />} /> 
      <Route path='/*' element={<p className='text-5xl p-5'>404</p>} />
    </Routes>
  )
}