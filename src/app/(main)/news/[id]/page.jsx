import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Eye, Star } from "lucide-react";
import React from "react";
import { getNewsDetailsById } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const data = await getNewsDetailsById(id);
    const news = data;

    return {
        title: `Dragon News | ${news.title}`,
        description: news.details.slice(0, 160),
    };
}

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  const data = await getNewsDetailsById(id);
  const news = data;

  if (!news) return <div className="text-center py-20">News not found!</div>;

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Button */}
      <Link
        href={`/categories/${news.category_id}`}
        className="inline-flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors mb-6 group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="font-medium">All news in this category</span>
      </Link>

      <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Featured Image */}
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src={news.image_url}
            alt={news.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-10">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            {news.title}
          </h1>

          {/* Author & Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-gray-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src={news.author?.img}
                  alt={news.author?.name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{news.author?.name}</h4>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} />
                  <span>{news.author?.published_date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-orange-500">
                <Star size={18} fill="currentColor" />
                <span className="font-bold text-gray-700">
                  {news.rating?.number}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <Eye size={18} />
                <span className="font-semibold">{news.total_view}</span>
              </div>
            </div>
          </div>

          {/* News Details Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            {news.details}
          </div>

          {/* Action Button */}
          <div className="mt-10">
            <Link
              href={`/categories/${news.category_id}`}
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-all active:scale-95 "
            >
             <div className="flex items-center gap-2">
                 <span><ArrowLeft /></span>  <span>All news in this category</span>
             </div>
             
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default NewsDetails;
