import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { getLatestNews } from '@/lib/data';

const BreakingNews = async () => {
  const newsItems = await getLatestNews();

  return (
    <div className="max-w-7xl mx-auto p-5 bg-base-300 flex gap-3 items-center">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={70} className="cursor-pointer">
        {newsItems?.map((news) => (
          <Link
            key={news._id}
            href={`/news/${news._id}`}
            className="mr-12 font-medium text-gray-800 hover:text-red-600 transition-colors"
          >
            {/* Protiti news er majhkane ekti symbol ba space rakha bhalo */}
            <span className="mr-2 text-red-500">✦</span>
            {news.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
