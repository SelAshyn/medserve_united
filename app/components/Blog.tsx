'use client'
import React, { useState } from 'react';

const BlogCardsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      image: "/blog1.jpg",
      date: "5 March, 2025",
      author: "Admin",
      title: "Smart Technology in Healthcare",
      excerpt: "Hospitals are increasingly using AI and machine learning to diagnose diseases faster and more accurately. Robotic-assisted surgeries and automated monitoring systems improve precision and efficiency, reducing human errors.",
      link: "#"
    },
    {
      id: 2,
      image: "/blog2.jpg",
      date: "5 March, 2025",
      author: "Admin",
      title: "Personalized Patient Experience",
      excerpt: "Hospitals now focus on providing a more comfortable and patient-friendly environment. Features like digital health records, AI chatbots for queries, and streamlined appointment systems enhance the overall experience.",
      link: "#"
    },
    {
      id: 3,
      image: "/blog3.jpg",
      date: "5 March, 2025",
      author: "Admin",
      title: "The Role of Robotics & Automation",
      excerpt: "From robotic nurses delivering medications to automated disinfection systems, hospitals are leveraging technology to improve hygiene, efficiency, and patient care.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 mt-10" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-500 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Latest Blogs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay Updated To Our Blog & News
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Get the latest medical insights, healthcare trends, and expert tips. Stay informed with our blogs and news updates, covering innovations, patient care strategies, and industry developments to keep you ahead in the medical field.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image with Hover Effect */}
              <div className="relative overflow-hidden group cursor-pointer h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Green Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-green-400/70 via-teal-400/60 to-cyan-500/70 transition-all duration-500 ${
                    hoveredCard === post.id ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                {/* Link Icon on Hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredCard === post.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                    <svg
                      className="w-12 h-12 text-white drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Date and Author */}
                <div className="flex items-center gap-6 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>By {post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-green-500 transition-colors duration-300 cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-green-500 font-semibold hover:gap-3 transition-all duration-300 group"
                >
                  <span>Read More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default BlogCardsSection;
