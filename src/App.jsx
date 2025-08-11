import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Rootlayout from './layout/Rootlayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import PortfolioLayout from './layout/PortfolioLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index:true,
          element: <HomePage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/projects',
          element: <PortfolioLayout/>,
          children: [
            {
              index: true,
              element: <Navigate to ="/projects/all" replace />
            },
            {
              path: ':categoryId',
              element: <ProjectsPage />
            }
          ]
        },
        {
          path: '/contact',
          element: <ContactPage />
        }
      ]
    }
  ])






  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
