import React, { Fragment } from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Mobilemenu from '../mobilemenu/Mobilemenu'

export default function Layout() {
  return (
    <Fragment>
      {/* <Mobilemenu /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
