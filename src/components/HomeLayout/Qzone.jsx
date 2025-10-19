import React from 'react'
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import img from "../../assets/bg.png";
const Qzone = () => {
  return (
    <div className='bg-base-200 p-3'>
        <h2 className='font-bold mb-5'>Qzone</h2>
        <div className="flex flex-col items-center">
            <img src={swimmingImg} alt="" />
            <img src={classImg} alt="" />
            <img src={playImg} alt="" />
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Qzone