'use client'

import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  return (
    <div className="sticky top-2 z-100">

      <div className="w-auto bg-white/0 backdrop-blur-md h-auto p-1 inset-x-0 -mb-10 mr-3 ml-3 -mt-2 flex items-center justify-between rounded-2xl shadow-2xl" data-aos="fade-down" data-aos-once="true">
        <div className="flex-shrink-0">
          <img
            src="https://medserveunited.in/img/logo/footerlogo.png"
            alt="Medserve United logo"
            width={80}
            height={80}
            className="h-auto m-3 ml-10"
          />
        </div>
        <nav>
          <ul className="flex gap-8 items-center text-lime-800 text-base font-medium">
            <li className="text-lime-500 cursor-pointer">Home</li>
            <li className="hover:text-lime-500 cursor-pointer transition-colors">Corporate Wellness</li>
            <li>
              <Link href="/Hero" className="hover:text-lime-500 transition-colors">
                CPR Traininginset
              </Link>
            </li>
            <li className="hover:text-lime-500 cursor-pointer transition-colors">Medical Jobs</li>
            <li className="hover:text-lime-500 cursor-pointer transition-colors">Medical Education</li>
            <li className="hover:text-lime-500 cursor-pointer transition-colors">Health @ Home</li>
            <li className="hover:text-lime-500 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-lime-500 cursor-pointer transition-colors mr-6">Blog</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
