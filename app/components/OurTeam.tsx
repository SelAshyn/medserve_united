'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Team() {
    useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);
  return (
    <>
      <div className="justify-self-center w-auto mr-50 ml-50">
        <div className='text-4xl  font-bold text-center mt-30 w-auto p-10' data-aos="fade-up">
            <h1>Our Team</h1>
        </div>
        <div className="flex w-auto gap-10 justify-self-center" data-aos="fade-up">
          <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
            <img className="justify-self-center mt-3 mb-3" src="/ajay.png" alt="Dr. Ajay Kumar" width={300} height={250} />
            <h1 className="text-center text-xl font-semibold mb-0">Dr. Ajay Kumar</h1>
            <h2 className="text-center">Director</h2>
          </div>
          <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
            <img className="justify-self-center mt-3 mb-3" src="/ramesh.png" alt="Jane Smith" width={300} height={250} />
            <h1 className="text-center text-xl font-semibold mb-0">Dr. Ramesh Subedi</h1>
            <h2 className="text-center">Director</h2>
          </div>
          <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
            <img className="justify-self-center mt-3 mb-3" src="/prabhat.png" alt="Jane Smith" width={300} height={250} />
            <h1 className="text-center text-xl font-semibold mb-0">Er. Prabhat Rajput</h1>
            <h2 className="text-center">Web Development Officer</h2>
          </div>
        </div>
      </div>
    </>
  );
}
