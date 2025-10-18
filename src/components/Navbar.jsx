import React from 'react'
import { NavLink } from 'react-router'
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center' >
    <div className=''></div>
    <div className='nav'>
       <ul className='flex items-center gap-x-6 text-accent'>
         <li>
            <NavLink to="/">Home</NavLink>
        </li>
          <li>
            <NavLink to="/about">About</NavLink>
        </li>
          <li>
            <NavLink to="/career">Career</NavLink>
        </li>
       </ul>
    </div>
    <div className='login-btn flex items-center gap-x-6'>
        <img src={user} alt="" />
       <button className='btn btn-primary px-10'>Login</button> 
    </div>
    </div>
  )
}

export default Navbar