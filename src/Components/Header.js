import React, { useState } from 'react'

const Header = () => {

  const [isNavOpen, setNavOpen] = useState(false);

  return (

    <div className="flex items-center justify-between lg:justify-around bg-[#434242] border-b border-gray-400 py-8">

      <div className="flex flex-col text-white justify-center font-bold text-2xl ml-8">SimpliTax<div className="text-xl">Solutions</div></div>

        <nav className="flex text-white text-xl uppercase">

          <section className="MOBILE-MENU flex lg:hidden">
            <div className={`HAMBURGER-ICON space-y-2 top-0 right-0 mt-2 mr-8 ${isNavOpen ? 'hidden' : 'block'}`} onClick={() => setNavOpen((prev) => !prev)}>

              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            </div>

              <div className={`CROSS-ICON absolute top-12 right-8 ${isNavOpen ? 'block' : 'hidden'}`} onClick={() => setNavOpen(false)}>

                <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-around min-h-[250px] absolute top-0">

                  <li className="border-b border-gray-400 my-4 uppercase">
                    <a href="/home">Home</a>
                  </li>

                  <li className="border-b border-gray-400 my-4 uppercase">
                    <a href="/Services">Services</a>
                  </li>

                  <li className="border-b border-gray-400 my-4 uppercase">
                    <a href="/About">About</a>
                  </li>
                </ul>
              </div>
          </section>
          
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li><a href="/Main" className="pr-4">Home</a></li>
            <li><a href="/Services" className="pr-4">Services</a></li>
            <li><a href="/About" className="">About</a></li>
          </ul>
        </nav>
        <style>
          {`

          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 120px;
            left: 0;
            background: #434242;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

        `}
      </style>
    </div>
  )
}

export default Header;
