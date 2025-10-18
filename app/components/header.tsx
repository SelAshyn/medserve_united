'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Headers() {
    useEffect(() => {
      AOS.init({ duration: 1900 });
    }, []);
  return (

      <div className="bg-lime-500 p-2.5 flex gap-40 justify-around m-3 rounded-md text-white" data-aos="fade-down" data-aos-once="true">
        <div className="flex gap-10">
          {/* Fixed: Use items-center to vertically align icon and text */}
          <h3 className="flex items-center gap-2">
            <MdEmail />
            info@medserveunited.in
          </h3>
          <h3 className="flex items-center gap-2">
            <FaPhoneAlt />
            98641523365
          </h3>
        </div>
        <div className="flex gap-10 items-center">
          <RiInstagramFill className="text-2xl cursor-pointer hover:text-black"/>
          <FaFacebook className="text-2xl cursor-pointer hover:text-black"/>
          <FaLinkedin className="text-2xl cursor-pointer hover:text-black"/>
        </div>
      </div>
  );
}
