import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { nameContext } from './ContextAPI';

const Navbar = () => {
  const {user} = useContext(nameContext)
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
        <li>
          <a>Profile</a>
          <ul className="p-2">
          <NavLink to={"/login"}><li><a>Log in</a></li></NavLink>
          <NavLink to={"/register"}><li><a>Register</a></li></NavLink>
          </ul>
        </li>
        <NavLink to={"/about"}><li><a>About</a></li></NavLink>
        <NavLink to={"/contact"}><li><a>Contact</a></li></NavLink>
        <NavLink to={"/login-context"}><li><a>LogIn-Context</a></li></NavLink>
        <NavLink to={"/register-context"}><li><a>Register-Context</a></li></NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to={"/"}><li><a>Home</a></li></NavLink>
      <li>
        <details>
          <summary>Profile</summary>
          <ul className="p-2">
          <NavLink to={"/login"}><li><a>Log in</a></li></NavLink>
          <NavLink to={"/register"}><li><a>Register</a></li></NavLink>
          </ul>
        </details>
      </li>
      <NavLink to={"/about"}><li><a>About</a></li></NavLink>
        <NavLink to={"/contact"}><li><a>Contact</a></li></NavLink>
        <NavLink to={"/login-context"}><li><a>LogIn-Context</a></li></NavLink>
        <NavLink to={"/register-context"}><li><a>Register-Context</a></li></NavLink>
    </ul>
  </div>
<div>
  {user.email}
</div>

  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;