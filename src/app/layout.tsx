import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minh Trong",
  description: "Frontend Developer | Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <div className="mt-20">{children}</div>
        <ToastContainer
          pauseOnFocusLoss={false}
          autoClose={5000}
          pauseOnHover={false}
          position={"top-right"}
          style={{ zIndex: 12000 }}
        />
        <Footer />
      </body>
    </html>
  );
}
