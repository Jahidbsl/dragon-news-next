import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import NewsCard from "@/components/homePage/news/NewsCard";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "Dragon News | News By Category",
  description: "Best news portal in the world",
};

const NewsByCategory = async ({ params }) => {
  const { id } = await params;
  console.log(id, "id from news by category page");

  const news = await getNewsByCategoryId(id);
  console.log(news, "news from home page");
  const categories = await getCategories();
  console.log(categories, "categories from news by category page");
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
        <aside className="col-span-1 md:col-span-3 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 mb-5">Login With</h2>
          <div className="flex flex-col gap-3">
            {/* Mock Buttons for Design */}
            <button className="w-full py-2.5 px-4 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Login with Google
            </button>
            <button className="w-full py-2.5 px-4 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Login with Github
            </button>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Find Us On</h2>
            <div className="border border-gray-200 rounded-lg divide-y">
              <div className="p-4 flex items-center gap-3 text-gray-600 hover:text-blue-600 cursor-pointer">
                Facebook
              </div>
              <div className="p-4 flex items-center gap-3 text-gray-600 hover:text-sky-400 cursor-pointer">
                Twitter
              </div>
              <div className="p-4 flex items-center gap-3 text-gray-600 hover:text-pink-600 cursor-pointer">
                Instagram
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsByCategory;
