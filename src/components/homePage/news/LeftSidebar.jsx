import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories ,activeId}) => {
    return (
          <aside className="col-span-1 md:col-span-3">
      <h2 className="text-xl font-bold text-gray-800 mb-5 border-l-4 border-red-500 pl-3">
        All Categories
      </h2>
      <ul className="flex flex-col gap-1">
        {categories?.news_category?.map((category) => (
          <li 
            key={category.category_id}
            className={`w-full ${activeId === category.category_id && 'bg-base-200 border-l-4 border-red-500 pl-3'}`}
          >
            <Link href={`/categories/${category.category_id}`}>
              <button className="w-full text-left py-3 px-6 text-gray-600 font-medium rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 active:scale-95">
                {category.category_name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
    );
};

export default LeftSidebar;