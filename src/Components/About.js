import React from 'react'
import profile from '../assets/profile.png'

const About = () => {
  return (
    <div className="bg-[#101010] w-full min-h-screen h-[500px] flex justify-center items-center" id="about">
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
      </div>
    </div>
  )
}

export default About;
