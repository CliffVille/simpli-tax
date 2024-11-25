import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row justify-around bg-[#434242] w-full h-[80px]">
      <div className="flex flex-col text-white justify-center font-bold text-2xl">SimpliTax<div className="text-xl">Solutions</div></div>
      <nav className="flex pt-6 text-white text-xl uppercase">
        <a href="/#Main" className="pr-4">Home</a>
        <a href="/#Services" className="pr-4">Services</a>
        <a href="/#About" className="">About</a>
      </nav>
    </div>
  )
}

export default Header;
