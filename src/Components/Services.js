import React from 'react'

const Services = () => {
  return (
    <div className="bg-[#434242] w-full h-[500px] flex flex-col justify-center items-center" id="Services">
      <div className="h-[250px] flex flex-col text-center justify-center items-center">
        <h1 className="text-5xl text-white font-kumbh font-extrabold pb-4">Our Services</h1>
        <p className="text-white w-2/4">Our goal is to help you minimize your taxes and put you in a competitive position to succeed in your business. Your growth is our growth! Email or call us today.</p>
      </div>
      <div className="h-[250px]">
        <div className="flex flex-row mb-2">
          <div className="w-[250px] h-[70px] bg-black rounded-md mr-4"></div>
          <div className="w-[250px] h-[70px] bg-black rounded-md mr-4"></div>
          <div className="w-[250px] h-[70px] bg-black rounded-md mr-4"></div>
          <div className="w-[250px] h-[70px] bg-black rounded-md mr-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-[250px] h-[70px] bg-black rounded-md mr-4"></div>
          <div className="w-[250px] h-[70px] bg-black rounded-md mr-4"></div>
          <div className="w-[250px] h-[70px] bg-black rounded-md mr-4"></div>
          <div className="w-[250px] h-[70px] bg-black rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default Services;
