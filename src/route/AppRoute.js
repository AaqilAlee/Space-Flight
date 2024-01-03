import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import ErrorBoundary from '../pages/ErrorBoundary'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<ErrorBoundary/>}/>
      </Routes>
    </>
  )
}

export default AppRoute