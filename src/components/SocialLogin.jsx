import React from 'react'
import { FcGoogle} from "react-icons/fc"
import { FaGithub } from 'react-icons/fa';
const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-bold mb-3'>Login With</h2>
        <div className="gap-3 flex flex-col">
           <button className='flex w-full items-center gap-1 btn text-blue-400 btn-outline'>
            <FcGoogle size={30}/>
            Login With Google</button> 
              <button className='flex items-center btn-outline gap-1 btn text-blue-400 w-full'>
            <FaGithub  size={30}/>
            Login With Github</button> 
        </div>
    </div>
  )
}

export default SocialLogin