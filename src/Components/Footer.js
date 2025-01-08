import React from 'react'

const Footer = () => {
  return (
   
        <footer className="w-full bg-[#434242]">

            <div className="w-[57%] max-w-screen-xl mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 ml-2">
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">SimpliTax™</a> All Rights Reserved.</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-2">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>


  )
}

export default Footer