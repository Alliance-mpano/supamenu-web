import React from 'react'
import ReactDOM from 'react-dom/client'
import LandPage from './components/LandPage.jsx'
import App from './App.jsx'
import './index.css'
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp.jsx'
import {

  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Table from './components/table/Table.jsx'
import Menu from './components/menu/Menu.jsx'
import Orders from './components/orders/Orders.jsx'
import Overview from './components/overview/Overview.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandPage />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/app",
    element: <App/>,
    children: [
      {index: true, element: <Overview/>},
      {
        path: "/app/tables",
        element: <Table/>
      },
      {
        path: "/app/menu",
        element: <Menu/>
      },
      {
        path: "/app/orders",
        element: <Orders/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
