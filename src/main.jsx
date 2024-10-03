import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx';
import Register from './components/Register.jsx';
import ContextAPI from './components/ContextAPI.jsx';
import LogIn_Context from './components/LogIn_Context.jsx';
import Register_Context from './components/Register_Context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/login",
        element: <LogIn></LogIn>, 
      },
      {
        path: "/register",
        element: <Register></Register>, 
      },
      {
        path: "/login-context",
        element: <LogIn_Context></LogIn_Context> , 
      },
      {
        path: "/register-context",
        element: <Register_Context></Register_Context>, 
      },
      
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ContextAPI>
 <RouterProvider router={router} />
 </ContextAPI>
  </StrictMode>,
)
