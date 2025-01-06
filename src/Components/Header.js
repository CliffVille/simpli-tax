import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#434242] text-white">
        <div className="px-4 max-w-7xl mx-auto flex justify-around items-center h-16">
          <div className="flex flex-col text-white justify-center font-bold text-2xl ml-8 lg:ml-0">
              <Link to="#home" smooth={true} duration={500}>SimpliTax</Link>
              <div className="text-xl">Solutions</div>
          </div>
           
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-4 uppercase">
              <a href="#main" className="py-2 px-4 hover:text-black">Home</a>
              <a href="#services" className="py-2 px-4 hover:text-black">Services</a>
              <a href="#about" className="py-2 px-4 hover:text-black">About</a>
            </div>

            {/* Hamburger button */}
            
            <div
                className="lg:hidden flex flex-col justify-between h-6 w-8 cursor-pointer mt-1" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`block h-1 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-1 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-1 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div> 
        </div>

            {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-transparent">
                        {['Home', 'Services', 'About'].map((tab) => (
                        <Link
                            key={tab}
                            to={tab.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="block py-2 px-4 text-center rounded-lg justify-center items-center hover:text-black uppercase"
                            onClick={() => setIsOpen(false)}
                        >
                        {tab}
                        </Link>
                      ))}
                    </div>  
                  )}   
                </div>
               );
            };


export default Header