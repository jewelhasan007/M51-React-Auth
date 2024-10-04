import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { nameContext } from './ContextAPI';

const Navbar = () => {
  const {user, logOut} = useContext(nameContext)
console.log(user)
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink to={"/"}><li><a>Home</a></li></NavLink>
      
        <NavLink to={"/about"}><li><a>About</a></li></NavLink>
        <NavLink to={"/contact"}><li><a>Contact</a></li></NavLink>
       
        <NavLink to={"/register-context"}><li><a>Register-Context</a></li></NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to={"/"}><li><a>Home</a></li></NavLink>
    
      <NavLink to={"/about"}><li><a>About</a></li></NavLink>
        <NavLink to={"/contact"}><li><a>Contact</a></li></NavLink>
        
        <NavLink to={"/register-context"}><li><a>Register</a></li></NavLink>
    </ul>
  </div>


  <div className="navbar-end">
 <div className='mx-4'>
 {
  user && user ? <> {user.email}
  <button className="btn btn-sm mx-3" onClick={logOut}>Log Out</button></>
  :
  <Link to="/login-context"><button className="btn btn-primary" >sign In</button></Link>
  }
 
 </div>
 
  </div>
</div>
        </div>
    );
};

export default Navbar;