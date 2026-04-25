export const getNewsDetailsById = async (news_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const data = await res.json();
  return data.data[0];
};

export const getNewsByCategoryId = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
  );
  const data = await res.json();
  return data.data;
};

export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

// Breaking news array
export const getLatestNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data = await res.json();
    return data.data; 
};


