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
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Profile from './components/Profile.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

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
        path: "/products",
        element: <products></products>, 
      },
      {
        path: "/about",
        element: <About> </About>, 
      },
      {
        path: "/contact",
        element: <Contact></Contact>, 
      },
      {
        path: "/login-context",
        element: <LogIn_Context></LogIn_Context> , 
      },
      {
        path: "/register-context",
        element: <Register_Context></Register_Context>, 
      },
      {
        path: "/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>, 
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
