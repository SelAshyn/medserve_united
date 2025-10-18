'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Services() {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);
  return (
    <>
      <div className="justify-self-center w-auto mr-50 ml-50">
        <div className='text-4xl  font-bold text-center mt-30 w-auto p-10' data-aos="fade-up">
            <h1>Our Services</h1>
        </div>
        <div className="flex w-auto gap-10 justify-self-center" data-aos="fade-up">
          <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
          <h1 className="text-center text-xl font-semibold">Corporate Wellness</h1>
            <Image className="justify-self-center mt-3 mb-3" src="/service1.webp" alt="Corporate Wellness" width={300} height={250} />
            <h2>Our Corporate Wellness programs enhance employee health, productivity, and well-being through tailored wellness initiatives and expert healthcare solutions.</h2>
              <Link href="#" className="inline-flex mt-4 justify-between px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-300 group">
                <span className="text-900">Read More</span>
                  </Link>
        </div>
        <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
          <h1 className="text-center text-xl font-semibold">CPR Training</h1>
            <Image className="justify-self-center mt-3 mb-3" src="/service2.webp" alt="Corporate Wellness" width={300} height={250} />
            <h2>We offer CPR Training to equip individuals and organizations with life-saving skills, ensuring effective emergency response.</h2>
            <Link href="#" className="inline-flex mt-4 justify-between px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-300 group">
                <span className="text-900">Read More</span>
                  </Link>
        </div>
        <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
          <h1 className="text-center text-xl font-semibold">Health @ Home</h1>
            <Image className="justify-self-center mt-3 mb-3" src="/service3.webp" alt="Corporate Wellness" width={300} height={250} />
            <h2>Our Health @ Home service brings quality medical care to your doorstep, ensuring comfort and convenience with expert healthcare professionals.</h2>
            <Link href="#" className="inline-flex mt-4 justify-between px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-300 group">
                <span className="text-900">Read More</span>
                  </Link>
          </div>
        </div>


          <div className="flex w-auto gap-10 mt-10 align-middle justify-self-center" data-aos="fade-up">
            <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
          <h1 className="text-center text-xl font-semibold">Health @ Home</h1>
            <Image className="justify-self-center mt-3 mb-3" src="/service3.webp" alt="Corporate Wellness" width={300} height={250} />
            <h2>Our Health @ Home service brings quality medical care to your doorstep, ensuring comfort and convenience with expert healthcare professionals.</h2>
            <Link href="#" className="inline-flex mt-4 justify-between px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-300 group">
                <span className="text-900">Read More</span>
                  </Link>
          </div>
          <div className='shadow-2xl p-8 pt-3 w-90 rounded-2xl mb-10 hover:scale-105 transition-transform duration-300'>
          <h1 className="text-center text-xl font-semibold">Health @ Home</h1>
            <Image className="justify-self-center mt-3 mb-3" src="/service3.webp" alt="Corporate Wellness" width={300} height={250} />
            <h2>Our Health @ Home service brings quality medical care to your doorstep, ensuring comfort and convenience with expert healthcare professionals.</h2>
            <Link href="#" className="inline-flex mt-4 justify-between px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-300 group">
                <span className="text-900">Read More</span>
                  </Link>
          </div>
        </div>
      </div>
    </>
  );
}
