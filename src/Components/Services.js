import React from 'react'

const Services = () => {
  return (
    <div className="bg-[#434242] w-full h-[500px] flex flex-col justify-center items-center" id="services">
      <div className="max-w-7xl h-[250px] flex flex-col text-center justify-center items-center">
        <h1 className="text-5xl text-white font-kumbh font-extrabold pb-4">Our Services</h1>
        <p className="text-white w-2/4">Our goal is to help you minimize your taxes and put you in a competitive position to succeed in your business. Your growth is our growth! Email or call us today.</p>
      </div>
      <div className="max-w-7xl h-[250px] flex flex-col justify-center items-center">
        <div className="flex flex-row mb-2">
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">T1 Personal Tax Returns</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">T2 Corporate Tax Returns</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">Book Keeping</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">Trust Returns</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
        </div>
    
        <div className="flex flex-row">
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">Film Tax Credits</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">Appeals to CRA</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">Informal Appeals to Tax Court</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
          <div className="relative w-[200px] h-[70px] rounded-md mr-4">
            <div className="w-full h-full bg-black bg-imageThree bg-cover rounded-md text-white text-center pt-6">PST & GST Returns</div>
            <div className="absolute inset-0 bg-black opacity-10 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;