import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
   <>
   <Header/>
    <Outlet/>
    <Toaster/>
   <Footer/>
   </>
  )
}

export default Layout