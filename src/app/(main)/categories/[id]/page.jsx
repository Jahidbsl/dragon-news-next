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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar: Categories */}
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>

        {/* Middle Content: News Summary */}
        <main className="col-span-1 md:col-span-6">
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Dragon News Home
          </h2>
          <div className="bg-white flex flex-col gap-6">
            {/* News cards will go here */}

            {news && news.length > 0 ? (
              news.map((newsItem) => (
                <NewsCard key={newsItem._id} newsItem={newsItem}></NewsCard>
              ))
            ) : (
              <p className="text-gray-400 italic">News summaries loading...</p>
            )}
          </div>
        </main>

        {/* Right Sidebar: Social Media */}
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsByCategory;
