import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import profile from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0A1224] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Left column */}
        <div className="text-center lg:text-left lg:col-span-4 lg:sticky lg:top-24 self-start">
          <p className="inline-block rounded-full bg-yellow-400/15 text-yellow-300 text-xs md:text-sm font-semibold tracking-wider uppercase px-3 py-1">
            Our Team
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Trusted experience. Personal service.
          </h1>
          <p className="mt-4 text-slate-300">
            Over 28 years of accounting and taxation expertise focused on helping clients stay
            compliant, confident, and growth-ready.
          </p>

          <div className="mt-8">
            <p className="text-white text-xl md:text-2xl font-semibold mb-4">Want to connect?</p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+17789862589"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#0A1224] transition"
                aria-label="Phone"
              >
                <MdPhone />
              </a>
              <a
                href="mailto:dgo@simplitax.ca"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#0A1224] transition"
                aria-label="Email"
              >
                <MdEmail />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#0A1224] transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-[#0A1224] transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="mt-12 lg:mt-0 lg:col-span-8">
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <img
                src={profile}
                alt="Dennis George Go profile"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white/20"
              />

              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">Dennis George Go</h2>
                <p className="mt-1 text-yellow-300 font-semibold">BSC, MBA, CPA (PH)</p>
              </div>
            </div>

            <p className="mt-8 text-slate-200 leading-relaxed text-sm md:text-base">
              Over 28 years accounting and taxation experience. An undergraduate degree in business
              and a Master&apos;s in Business Administration, worked at Ernst &amp; Young LLP
              Vancouver for 5 years and moved to Buckley Dodds LLP in 2002 as a Staff Accountant and
              became Tax Principal. Specializes in field of taxation, PST, GST, Personal, Corporate
              and Trust Income Tax Return. Also specializes in specialized taxation in the field of
              Film Tax Credit for productions and Scientific Research and Experimental Developmental
              Tax Credit.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
