import React from "react";
import Link from "next/link";
import { FaUserMd, FaHospital, FaBuilding } from 'react-icons/fa';

const MedicalJobsPage: React.FC = () => {
  const items = [
    {
      id: 'doctor',
      label: "I'm a Doctor",
      icon: <FaUserMd />,
      options: [
        { label: 'Seeking an Opportunity?', link: '/doctor/register' },
        { label: 'Share a vacancy', link: '/doctor/info' },
      ],
    },
    {
      id: 'hospital',
      label: "I'm an Hospital / Medical College",
      icon: <FaHospital />,
      options: [
        { label: 'Post a Hospital Vacancy', link: '/hospital/signup' },
        { label: 'Post a Faculty Position', link: '/hospital/info' },
      ],
    },
    {
      id: 'corporate',
      label: "I'm an Corporate / NGO",
      icon: <FaBuilding />,
      options: [
        { label: 'In Progress...', link: '/corporate/join' },
        { label: 'In Progress...', link: '/corporate/details' },
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-20">
      {/* Hero Section */}
      <div className="flex justify-center gap-8 bg-gradient-to-r from-teal-400 to-green-400 p-10 rounded-xl m-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group bg-white/90 shadow-2xl rounded-xl px-10 py-9 text-black text-center w-74 items-center justify-self-center hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="text-6xl text-center px-20 mb-2 justify-center">{item.icon}</div>

            {/* Label */}
            <div className="font-semibold text-xl ">{item.label}</div>

            {/* Hidden options - shown on hover */}
            <div className="absolute inset-0 bg-lime-100 bg-opacity-90 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              {item.options.map((option, index) => (
                <Link href={option.link} key={index} passHref>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer w-auto">
                    {option.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mt-6 flex justify-center px-4">
        <div className="flex w-full max-w-2xl shadow-2xl items-center rounded-md overflow-hidden hover: border-2 border-lime-300">
          <input
            type="text"
            placeholder="🔍 Search by Title, Hospital, Area, or Position"
            className="w-full px-4 py-2 outline-none"
          />
          <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2">
            Search
          </button>
        </div>
      </div>

      {/* Latest Medical Jobs */}
      <section className="mt-10 px-4 text-center">
        <h2 className="text-xl font-semibold flex justify-center items-center gap-2">
          <span role="img" aria-label="clipboard">📋</span> Latest Medical Jobs
        </h2>
        <p className="text-sm text-gray-500">Explore the newest healthcare opportunities</p>

        {/* Job Card */}
        <div className="mt-6 flex justify-center">
          <div className="bg-white w-full max-w-sm rounded-md shadow-md p-4 text-left">
            <img
              src="/vacancy.png"
              alt="Job Image"
              className="rounded-md mb-3 h-40 w-full object-cover"
            />
            <h3 className="font-bold text-sm mb-1">
              DOCTORS REQUIRED FOR A REPUTED MEDICAL COLLEGE IN DELHI-NCR
            </h3>
            <p className="text-xs text-gray-700 mb-2">SENIOR RESIDENT</p>
            <ul className="text-xs text-red-600 mb-2 list-disc pl-5">
              <li>Job Opening: Senior Residents Wanted!</li>
            </ul>
            <p className="text-xs mb-1">
              📍 Location: Moradabad, Uttar Pradesh (UP)
            </p>
            <p className="text-xs mb-2">
              🏥 Institution: Reputed Medical College
              <a href="#" className="text-blue-500 ml-1">... Read More</a>
            </p>
            <div className="text-xs text-gray-500 mb-3">
              <p>Area: MORADABAD, U.P. (INDIA)</p>
              <p>Posted: 2025-09-15 10:45:00</p>
            </div>
            <button className="bg-green-400 text-white text-lg px-4 py-1 rounded hover:bg-green-500">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalJobsPage;
