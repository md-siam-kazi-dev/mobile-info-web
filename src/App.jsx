import { useState } from 'react'
import './index.css'
import NavBar from './components/common/nav'
import HomePage from './components/Homepage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './root'
import SinglePhonePage from './components/common/SinglePhonePage'
import { api } from './components/utils/api'

const router = createBrowserRouter([
    {
      path:'/',
      element:<Root />,
      children:[
        {index:true,element:<HomePage />},
        {
          path:'phones/:phoneId',
          loader : ({params})=>fetch(api+`/api/phones/${params.phoneId}`),
          element:<SinglePhonePage />
        }

      ]
    }
])

function App() {
    return (
      <RouterProvider router= {router}></RouterProvider>
    )
}

export default App
