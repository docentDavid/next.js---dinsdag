import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Next.js - Dinsdag",
  description: "Next.js 15.2.4 - Dinsdag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gray-100 text-gray-900 max-w-7xl mx-auto mt-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
