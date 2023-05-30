import React from 'react'
import Footer from '../layout/Site/Footer/Footer'
import Header from '../layout/Site/Header/Header'
import {Outlet} from "react-router-dom"
const SiteRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
