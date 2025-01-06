import React from 'react'
import profile from '../assets/profile.png'

const About = () => {
  return (
    <div className="bg-[#101010] w-full h-[500px] flex justify-center items-center" id="about">
      <div className="flex flex-row items-center w-3/4">
        <div className="w-1/2 flex justify-center">
          <img src={profile} className="w-1/2 rounded-full" alt="profile pic"></img>
        </div>
        <div className="flex flex-col w-1/2 pr-32">
          <h1 className="text-6xl text-white font-bold mb-4">Our Team</h1>
          <p className="text-md text-white">Dennis George Go, BSC, MBA, CPA (PH), have over 28 years accounting and taxation experience. An undergraduate degree in business and a Master&apos;s in Business Administration, worked at Ernst &amp; Young LLP Vancouver for 5 years and moved to Buckley Dodds LLP in 2002 as a Staff Accountant and became Tax Principal. Specializes in field of taxation, PST, GST, Personal, Corporate and Trust Income Tax Return. Also specializes in specialized taxation in the field of Film Tax Credit for productions and Scientific Research and Experimental Developmental Tax Credit.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About;
