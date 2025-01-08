import React from 'react'
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import profile from '../assets/profile.png'

const About = () => {
  return (
    <div className="bg-[#101010] w-full min-h-screen flex justify-center items-center space-y-24" id="about">
      <div className="flex flex-col items-center w-3/4 mt-4">
        <h1 className="text-7xl text-white font-kumbh font-extrabold mt-4 mb-4">Our Team</h1>
        <div className="w-1/2 flex justify-center">
          <img src={profile} className="w-1/2 rounded-full" alt="profile pic"></img>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-4 mb-4">
          <p className="text-3xl font-kumbh font-extrabold text-white">Dennis George Go</p>
          <p className="text-md font-kumbh font-bold text-white">BSC, MBA, CPA (PH)</p>
        </div>
        <div className="max-w-7xl flex justify-center items-center h-auto mb-4">
          <p className="w-[75%] text-[16px] font-kumbh text-white">Over 28 years accounting and taxation experience. An undergraduate degree in business and a Master&apos;s in Business Administration, worked at Ernst &amp; Young LLP Vancouver for 5 years and moved to Buckley Dodds LLP in 2002 as a Staff Accountant and became Tax Principal. Specializes in field of taxation, PST, GST, Personal, Corporate and Trust Income Tax Return. Also specializes in specialized taxation in the field of Film Tax Credit for productions and Scientific Research and Experimental Developmental Tax Credit</p>
        </div>
        <div className="my-6 mx-auto lg:my-8 max-w-7xl w-[75%] flex justify-between items-center">
          <div className="flex">
            <p className="text-white text-4xl">Want to connect?</p>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col items-center">
              <a href="tel:+17789862589" className="text-white text-2xl flex items-center">
                <MdPhone className="mr-2 mt-1" />
              </a>
              <a href="mailto:dgo@simplitax.ca" className="text-white text-2xl flex items-center">
                <MdEmail className="mr-2 mt-1" />
              </a>
            </div>
            <div className="flex flex-col">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl flex items-center mt-1">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl flex-items-center mt-1">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
