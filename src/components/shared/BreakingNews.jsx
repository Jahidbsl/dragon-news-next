import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { getLatestNews } from '@/lib/data';

const BreakingNews = async () => {
  const newsItems = await getLatestNews();

  return (
    <div className="max-w-7xl mx-auto my-4 md:my-6">
      {/* Container with responsive padding and height */}
      <div className="bg-gray-100 p-2 md:p-4 flex items-center gap-2 md:gap-4 rounded-lg shadow-sm">
        
        {/* Button: Smaller text on mobile, prevents shrinking */}
        <button className="bg-red-600 text-white px-3 py-1.5 md:px-6 md:py-2 text-xs md:text-base font-bold uppercase tracking-tight whitespace-nowrap shrink-0">
          Latest News
        </button>

        {/* Marquee Wrapper */}
        <Marquee 
          pauseOnHover={true} 
          speed={70} 
          className="cursor-pointer overflow-hidden"
        >
          {newsItems?.map((news) => (
            <Link
              key={news._id}
              href={`/news/${news._id}`}
              className="mr-8 md:mr-16 text-sm md:text-lg font-semibold text-gray-700 hover:text-red-600 transition-colors flex items-center"
            >
              {/* Visual Divider */}
              <span className="mr-3 text-red-500 text-xl font-bold">/</span>
              {news.title}
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;