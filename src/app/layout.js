import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";


const poppins =Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in the world",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
