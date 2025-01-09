import React from 'react'

const Footer = () => {
  return (
   
        <footer className="w-full bg-[#434242]">

            <div className="w-full max-w-screen-xl mx-auto px-4 md:py-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <a href="#" className="mb-4 sm:mb-0">
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">SimpliTax™</a> All Rights Reserved.</span>
                    </a>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className="me-4 md:me-6">
                            <a href="#" className="hover:text-black">Home</a>
                        </li>
                        <li className="me-4 md:me-6">
                            <a href="#" className="hover:text-black">Services</a>
                        </li>
                        <li className="me-4 md:me-6">
                            <a href="#" className="hover:text-black">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>


  )
}

export default Footer