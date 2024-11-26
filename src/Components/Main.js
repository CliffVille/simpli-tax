import React from 'react'
import Image from '../assets/imgOne.png'

const Main = () => {
  return (
    <div className="bg-[#101010] w-full h-[500px]" id="Main">
      <div className="flex justify-center items-center h-full">
        <div className="left flex flex-col pr-4">
          <h1 className="text-white text-6xl text-bold">Need an</h1><h1 className="text-white text-6xl text-bold pb-2">Accountant</h1>
          <p className="text-white w-[450px]">SimpliTax Solutions would like to earn your business. We have over 30 years of experience in
          accounting and taxation to help your business thrive in this competitive market of ours as well
          as continuing tax changes.</p>
        </div>
        <div className="right">
          <img src={Image} alt="imageOne" className="w-[500px] h-[300px]" />
        </div>
      </div>
    </div>
  )
}

export default Main;
