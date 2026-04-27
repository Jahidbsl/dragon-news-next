import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSidebar from "@/components/homePage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "Dragon News | News By Category",
  description: "Best news portal in the world",
};

const NewsByCategory = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsByCategoryId(id);
  const categories = await getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* 1 column on mobile, 12 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* 1. LEFT SIDEBAR: First on mobile, First on desktop */}
        <aside className="md:col-span-3 order-1">
          <LeftSidebar categories={categories} activeId={id} />
        </aside>

        {/* 2. RIGHT SIDEBAR: Second on mobile, Third on desktop */}
        <aside className="md:col-span-3 order-2 md:order-3">
          <RightSidebar />
        </aside>

        {/* 3. MAIN NEWS: Third on mobile, Second on desktop */}
        <main className="md:col-span-6 order-3 md:order-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Dragon News Home
          </h2>
          
          <div className="flex flex-col gap-8">
            {news && news.length > 0 ? (
              news.map((newsItem) => (
                <NewsCard key={newsItem._id} newsItem={newsItem} />
              ))
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-xl">
                <p className="text-gray-500 font-medium italic">No news found in this category.</p>
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
};

export default NewsByCategory;