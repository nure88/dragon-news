import React from 'react'
import{ FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const FindUs = () => {
  return (
    <div>
        <h2 className='font-bold mb-5'> Find us on</h2>
        <div className="join join-vertical w-full">
            <button className='btn bg-base-100 join-item justify-start'><FaFacebook size={30}/> Fackbook</button>
            <button className='btn join-item bg-base-100 justify-start'><FaTwitter size={30}/> Twiter</button>
            <button className='btn join-item bg-base-100 justify-start'> <FaInstagram  size={30}/> Instagram</button>

        </div>
    </div>
  )
}

export default FindUs