import React from 'react'
import PortfolioNavbar from '../components/PortfolioNavbar'
import { Outlet } from 'react-router'

const PortfolioLayout = () => {
  return (
    <div>
        <PortfolioNavbar/>
        <Outlet/>
    </div>
  )
}

export default PortfolioLayout