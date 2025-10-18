'use client'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1900 });
  }, []);
  return (
    <div className="flex shadow-2xl w-min m-14 mt-5 justify-self-center items-center gap-10 p-7 rounded-2xl" data-aos="fade-up">
      <div>
        <img className="rounded-2xl" src="https://medserveunited.in/img/home/about.webp" width={500} height={500} alt="" />
      </div>
      <div className="w-250">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-justify">
          Medserve United Private Limited is a new-age healthcare company dedicated to revolutionizing the delivery of medical services to corporate houses and medical institutions.<br />We are driven by a singular vision: to democratize healthcare and life-saving skills, making them accessible to all. At Medserve United, we firmly believe that healthcare is not a privilege, but a fundamental right.<br />We are more than just a service provider; we are an ideology, with a philosophy that prioritizes serving the healthcare sector by offering straightforward solutions to complex challenges.
        </p>
        <br />
        <a href="#"
  className="inline-flex  justify-between px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-300 group"
>
  <span className="text-900">Read More</span>
  <span className="ml-3 w-6 h-6 flex items-center justify-center rounded-full bg-white/30 group-hover:bg-white/40">
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </span>
</a>
      </div>
    </div>
  );
}
