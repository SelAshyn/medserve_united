'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import React from 'react';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaUserNurse } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { BsTrophyFill } from "react-icons/bs";
import { CountUp } from 'countup.js';

export default function Hero() {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const counter2Ref = useRef<HTMLHeadingElement>(null);
  const counter3Ref = useRef<HTMLHeadingElement>(null);
  const counter4Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1900 });

    const animateCounters = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (counterRef.current) {
            const countUp1 = new CountUp(counterRef.current, 500, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp1.error) countUp1.start();
          }
          if (counter2Ref.current) {
            const countUp2 = new CountUp(counter2Ref.current, 200, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp2.error) countUp2.start();
          }
          if (counter3Ref.current) {
            const countUp3 = new CountUp(counter3Ref.current, 10, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp3.error) countUp3.start();
          }
          if (counter4Ref.current) {
            const countUp4 = new CountUp(counter4Ref.current, 100, {
              duration: 2, useEasing: true, useGrouping: true, separator: ',', suffix: '+'
            });
            if (!countUp4.error) countUp4.start();
          }
        }
      });
    };

    const observer = new IntersectionObserver(animateCounters, { threshold: 0.5 });

    [counterRef, counter2Ref, counter3Ref, counter4Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-[-5%] px-4 sm:px-4 mb-10 lg:px-30">
      <div className="flex flex-col-reverse lg:flex-row gap-2">
        <div
          className="w-full mt-40 p-8 rounded-xl shadow-2xl flex flex-wrap justify-center sm:justify-between items-center gap-y-2 transition-transform duration-500"
          data-aos="fade-up"
        >
          <div className="w-1/2 sm:w-1/4 text-center flex flex-col items-center transition-transform duration-300" data-aos="fade-up">
            <FaUserDoctor className="text-7xl  mb-2" />
            <h1 ref={counter2Ref} className=" font-extrabold text-5xl"></h1>
            <h3 className=" text-xl">Doctors Recruited</h3>
          </div>

          <div className="w-1/2 sm:w-1/4 text-center flex flex-col items-center transition-transform duration-300" data-aos="fade-up">
            <FaUserNurse className='text-7xl mb-2' />
            <h1 ref={counterRef} className=" font-extrabold text-5xl"></h1>
            <h3 className=" text-xl">Nurses Recruited</h3>
          </div>

          <div className="w-1/2 sm:w-1/4 text-center flex flex-col items-center transition-transform duration-300" data-aos="fade-up">
            <GiHealthNormal className='text-7xl mb-2'  />
            <h1 ref={counter3Ref} className="font-extrabold text-5xl"></h1>
            <h3 className=" text-xl">US-Ready Healthcare</h3>
          </div>

          <div className="w-1/2 sm:w-1/4 text-center flex flex-col items-center transition-transform duration-300" data-aos="fade-up">
            <BsTrophyFill className='text-7xl mb-2' />
            <h1 ref={counter4Ref} className=" font-extrabold text-5xl"></h1>
            <h3 className="text-xl">Winning Awards</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
