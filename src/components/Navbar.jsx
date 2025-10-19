import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import userIcon from "../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
const Navbar = () => {
const{user,logOut} = use(AuthContext)

const handleLogOut = () => {
logOut()
.then((res) => {
toast('Your Logged Out Successfull')
}).catch((err) => {
  toast.success('There was an error')
})
};

  return (
    <div className='flex justify-between items-center' >
      <ToastContainer />
    <div className=''>{user && user.email}</div>
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
        <img className='w-12 rounded-full' src={`${user? user.photoURL : userIcon}`} alt="" />
        {
          user? (<button onClick={handleLogOut}  className='btn btn-primary px-10'>Log out</button> ):(<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>) 
        }
       
    </div>
    </div>
  )
}

export default Navbar