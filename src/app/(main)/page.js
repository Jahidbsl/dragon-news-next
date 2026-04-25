import { redirect } from "next/navigation";


export const metadata = {
  title: "Dragon News | Home",
  description: "best news portal in the world",
};

const default_category_id = "01";

export default async function Home() {

  return (
   redirect(`/categories/${default_category_id}`)
  );
}
