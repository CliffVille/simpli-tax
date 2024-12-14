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
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md mr-4 flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">T1 Personal Tax</h3>
          </div>
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md mr-4 flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">T2 Corporate Tax</h3>
          </div>
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md mr-4 flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">Book Keeping</h3>
          </div>
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md mr-4 flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">Trust Returns</h3>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md mr-4 flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">Film Tax Credits</h3>
          </div>
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md mr-4 flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">Appeals to CRA</h3>
          </div>
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md mr-4 flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">Informal Appeals</h3>
          </div>
          <div className="w-[250px] h-[70px] bg-emerald-500 rounded-md flex justify-center items-center">
            <h3 className="text-white text-2xl font-kumbh font-bold">PST & GST Returns</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
