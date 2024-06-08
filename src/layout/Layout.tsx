import { Box } from '@mui/material'
import React from 'react'
import Header from './header/header'
import Home from '../components/home-page/home'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Box><Outlet/><Footer/></Box>
  )
}

export default Layout