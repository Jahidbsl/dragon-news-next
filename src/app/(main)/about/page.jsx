import React from 'react';

import demoImg from '@/assets/demo-card-thumbnail.png'
import Image from 'next/image';
export const metadata = {
  title: "Dragon News | About Us",
  description: "Learn more about the world's most powerful and fastest news portal.",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            We Are <span className="text-red-500">Dragon News</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering fierce, fast, and factual news across the globe. We breathe fire into stories that matter.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-red-600 pl-4">Our Mission</h2>
            <p className="text-gray-600 mb-4 text-lg">
              In an era of misinformation, Dragon News stands as a guardian of truth. Founded in 2024, our goal is to provide real-time updates without the fluff.
            </p>
            <p className="text-gray-600 text-lg">
              We believe that information is power. Our global network of journalists works around the clock to ensure you never miss a beat in politics, tech, or culture.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center border border-gray-200">
            <Image src={demoImg} alt='demo'className='h-ful w-full'></Image>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Why Trust Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Blazing Speed", desc: "First to report, every single time.", icon: "🔥" },
              { title: "Ironclad Integrity", desc: "Unbiased reporting backed by data.", icon: "🛡️" },
              { title: "Global Reach", desc: "From local streets to world capitals.", icon: "🌍" },
            ].map((value, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 container mx-auto px-6 text-center">
        <div className="bg-red-600 rounded-3xl p-12 text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="mb-8 text-red-100">Subscribe to our newsletter for daily fire-delivered news.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Subscribe Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;