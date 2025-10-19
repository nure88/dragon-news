
import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    
    const {createUser,setUser,updateUser} = use(AuthContext);
    
    const [nameError, setNameError] = useState("");
    
   const navigate = useNavigate();

const handleRegister = (event) => {
 event.preventDefault();
 
const userName = event.target.name.value;
if(userName.length < 6){
  setNameError('Name should be more then 5 character');
  return;
}else{
  setNameError("")
}
const userPhoto = event.target.photo.value;
const userEmail = event.target.email.value;
const userPassword = event.target.password.value;
createUser(userEmail,userPassword)
.then((result) => {
  updateUser({displayName:userName, photoURL: userPhoto}).then(() => {
    setUser({...result, displayName:userName, photoURL: userPhoto})
    navigate('/')
  }).catch((error) => {
    console.log(error);
    setUser(userName)
  })
  setUser(result.user);
console.log(result.user);
})
.catch((err) => {
console.log(err);

    
})
};


  return (
   <div className='flex min-h-screen justify-center items-center'>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto text-center">
      <h1 className="text-3xl font-semibold text-center py-2 hover:text-lime-300 duration-1000 trans">Register yout account</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
                {/*User Name */}
                <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Enter Your Full Name" />

          {nameError && <p className='text-red-500'>{nameError}</p> }
          {/* Photo Url */}
               <label className="label">PHOTO URL</label>
          <input name='photo' type="text" className="input" placeholder="PHOTO URL" />
                
                {/*User email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Enter Your Email" />
          {/*User password field*/}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Enter Your Password" />
          <button type='submit' className="btn btn-neutral mt-4 cursor-pointer">Register</button>
        </fieldset>

        </form>
        <p className='font-semibold text-center'>Already Have An Account? <Link to='/auth/login' className='text-secondary underline cursor-pointer'>Login</Link></p>
      </div>
    </div>
 </div>
  )
}

export default Register