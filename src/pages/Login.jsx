import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
 const[error, setError] = useState("");
const {signIn} = use(AuthContext);

const location = useLocation();
const navigate = useNavigate();


const handleLogin = (e) => {
 e.preventDefault();

const email = e.target.email.value;
const password = e.target.password.value;

signIn(email,password)
.then((res) => {
  // toast(res.user)
  // console.log(res.user);
  navigate(`${location.state? location.state:"/" }`)
}).catch((error) => {
  

  setError(error.message);

})

};

  return (
 <div className='flex min-h-screen justify-center items-center'>
    <ToastContainer />
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto text-center">
      <h1 className="text-3xl font-semibold text-center py-2 hover:text-lime-300 duration-1000 trans">Login yout account</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          { error && <p className='text-red-500'>{error}</p>}
          <div><a className="link link-hover text-right">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 cursor-pointer">Login</button>
        </fieldset>
        </form>
        <p className='font-semibold text-center'>Dont't Have An Account? <Link to='/auth/register' className='text-secondary underline cursor-pointer'>Register</Link></p>
      </div>
    </div>
 </div>

  )
}

export default Login