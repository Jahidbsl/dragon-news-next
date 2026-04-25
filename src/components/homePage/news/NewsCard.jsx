import Image from "next/image";
import { Bookmark, Share2, Star, Eye } from "lucide-react";
import Link from "next/link";

const NewsCard = ({ newsItem }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header: Author Info */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50/50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={newsItem.author?.img}
              alt={newsItem.author?.name || "Author Image"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-800 leading-none">
              {newsItem.author?.name || "Unknown Author"}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {newsItem.author?.published_date?.split(" ") || "No Date"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <button className="hover:text-blue-500 transition-colors">
            <Bookmark size={20} />
          </button>
          <button className="hover:text-blue-500 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 leading-tight mb-4 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
          {newsItem.title}
        </h2>

        {/* Featured Image */}
        <div className="relative w-full h-64 mb-5 rounded-lg overflow-hidden group">
          <Image
            src={newsItem.image_url}
            alt="Thumbnail"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {newsItem.others_info?.is_trending && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
              Trending
            </span>
          )}
        </div>

        {/* News Details Overlay */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {newsItem.details}
        </p>

        <Link
          href={`/news/${newsItem._id}`}
          className="text-orange-500 font-bold text-sm hover:underline"
        >
          Read More
        </Link>

        <hr className="my-5 border-gray-100" />

        {/* Footer: Rating & Views */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-orange-400 gap-1">
              <Star size={18} fill="currentColor" />
              <span className="text-gray-700 font-bold text-sm">
                {newsItem.rating?.number}
              </span>
            </div>
            <span className="text-xs font-medium text-gray-400">
              ({newsItem.rating?.badge})
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <Eye size={18} />
            <span className="text-sm font-semibold">{newsItem.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
