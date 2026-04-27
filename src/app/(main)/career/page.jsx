import React from 'react';

export const metadata = {
  title: "Dragon News | Career",
  description: "Join the fiercest newsroom in the world. Ignite your journalism career with Dragon News.",
};

const CareerPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Ignite Your <span className="text-red-500">Career</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are looking for bold storytellers, tech innovators, and truth-seekers to help us redefine the future of media.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Creative Freedom", desc: "We value unique voices and unconventional storytelling.", icon: "🎨" },
            { title: "Global Impact", desc: "Your work will reach millions of readers across every continent.", icon: "🚀" },
            { title: "Top-Tier Tech", desc: "Work with the latest tools in digital journalism and AI.", icon: "💻" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-gray-600">Current opportunities to join our dragon-hearted team.</p>
            </div>
            <span className="text-sm font-semibold text-red-600 uppercase tracking-widest mt-4 md:mt-0">
              3 Roles Available
            </span>
          </div>

          <div className="space-y-4">
            {[
              { role: "Senior Investigative Reporter", type: "Full-time", location: "Remote / NY", dept: "Editorial" },
              { role: "Frontend Developer (Next.js)", type: "Contract", location: "London / Hybrid", dept: "Tech" },
              { role: "Social Media Strategist", type: "Full-time", location: "Tokyo / On-site", dept: "Marketing" },
            ].map((job, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-center hover:border-red-500 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="mb-4 md:mb-0">
                  <span className="text-xs font-bold text-red-600 uppercase mb-1 block">{job.dept}</span>
                  <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">{job.role}</h3>
                  <p className="text-gray-500 text-sm mt-1">{job.location} • {job.type}</p>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium group-hover:bg-red-600 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values/Culture Section */}
      <section className="py-20 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Don't see a fit?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We are always looking for exceptional talent. If you have a passion for news and a dragon's spirit, send your portfolio to 
            <span className="font-bold text-red-600"> careers@dragonnews.com</span>.
          </p>
          <div className="inline-flex items-center space-x-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <span>Integrity</span>
            <span>•</span>
            <span>Speed</span>
            <span>•</span>
            <span>Innovation</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareerPage;