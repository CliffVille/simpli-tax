import React, { useState } from 'react';

const services = [
  {
    icon: '🧾',
    title: 'T1 Personal Tax Returns',
    desc: 'Stress-free personal filing with careful review, strategic deductions, and a smooth year-end experience.',
  },
  {
    icon: '🏢',
    title: 'T2 Corporate Tax Returns',
    desc: 'Confident corporate filings designed to keep you compliant while supporting long-term business growth.',
  },
  {
    icon: '📚',
    title: 'Book Keeping',
    desc: 'Neat, reliable books that turn financial chaos into clear monthly insights and better decisions.',
  },
  {
    icon: '🛡️',
    title: 'Trust Returns',
    desc: 'Precise trust return support with thoughtful guidance to protect your structure and reduce risk.',
  },
  {
    icon: '🎬',
    title: 'Film Tax Credits',
    desc: 'Production-focused tax credit support to help maximize eligible claims and improve project cash flow.',
  },
  {
    icon: '📨',
    title: 'Appeals to CRA',
    desc: 'Professional representation and clear communication to resolve disputes with confidence and clarity.',
  },
  {
    icon: '⚖️',
    title: 'Informal Appeals to Tax Court',
    desc: 'Strong documentation and practical strategy to present your case clearly and improve outcomes.',
  },
  {
    icon: '🧮',
    title: 'PST & GST Returns',
    desc: 'Timely sales tax filing support that keeps remittances accurate, organized, and audit-ready.',
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="w-full bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="text-center lg:text-left lg:col-span-4 lg:sticky lg:top-24 self-start">
          <p className="inline-block rounded-full bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold tracking-wider uppercase px-3 py-1">
            Our Services
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl text-[#0A2540] font-extrabold">
            Expert Tax & Accounting Support
          </h1>
          <p className="mt-4 text-slate-600">
            Our goal is to help you minimize your taxes and put you in a competitive position to
            succeed in your business. Your growth is our growth! Email or call us today.
          </p>
          <a
            href="#about"
            className="inline-flex mt-6 rounded-xl bg-[#0A2540] text-white px-5 py-3 font-semibold hover:bg-[#12345c] transition"
          >
            Book a Consultation
          </a>
        </div>

        <div className="mt-12 lg:mt-0 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={service.title}
                className="group relative overflow-visible rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 hover:border-yellow-300/60 cursor-pointer"
                tabIndex={0}
                onClick={() => toggleCard(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(index);
                  }
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />
                <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mt-3 text-base md:text-lg font-bold text-[#0A2540] leading-snug transition-colors duration-300 group-hover:text-yellow-500">
                  {service.title}
                </h3>

                <div
                  className={`absolute left-4 right-4 -bottom-3 z-20 rounded-xl border border-yellow-200 bg-white/95 p-3 text-sm text-slate-700 shadow-lg shadow-yellow-100/60 backdrop-blur transition-all duration-300 ${
                    isOpen
                      ? 'translate-y-0 opacity-100 pointer-events-auto'
                      : 'translate-y-4 opacity-0 pointer-events-none'
                  } md:group-hover:translate-y-0 md:group-hover:opacity-100`}
                >
                  {service.desc}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;