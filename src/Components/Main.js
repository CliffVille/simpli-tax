import React from 'react'
import Image from '../assets/imgOne.png'

const Main = () => {
  return (
    <div className="bg-[#101010] w-full h-[500px]" id="main">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full">
        <div className="left mx-auto md:mx-0 text-center lg:text-left flex flex-col pr-0 md:pr-4">
          <h1 className="text-white text-6xl text-bold">Need an</h1><h1 className="text-white text-6xl text-bold pb-2">Accountant</h1>
          <p className="text-white w-[400px]">SimpliTax Solutions would like to earn your business. We have over 30 years of experience in
          accounting and taxation to help your business thrive in this competitive market of ours as well
          as continuing tax changes.</p>
        </div>bvc
        <div className="right">
          <img src={Image} alt="imageOne" className="w-[300px] lg:w-[390px] mx-auto lg:mx-0 h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Main;