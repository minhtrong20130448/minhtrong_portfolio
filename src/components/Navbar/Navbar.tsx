"use client";
import React, { useEffect, useState } from "react";
import { NavbarRoutes } from "../routes/NavbarRoutes";
import Link from "next/link";
import ClickOutside from "../ClickOutside";
import { Pacifico } from "next/font/google";

const pressStart = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Đóng submenu khi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false); // Tự động đóng menu khi màn hình lớn hơn 768px
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ClickOutside onClick={() => setOpenMenu(null)}>
      <nav className="bg-white fixed w-full top-0 start-0 z-[1000]">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-black rounded-lg border border-gray-800 focus:ring-2 focus:ring-gray-600 mr-2"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
            {/* Logo */}
            <Link
              href="/"
              className={`flex items-center space-x-3 m-[0px] ${
                isMobileMenuOpen ? "hidden" : "block"
              }`}
              onClick={() => setActiveMenu("Trang chủ")}
            >
              <span
                className={`self-center text-2xl font-semibold text-black font-bold ${pressStart.className}`}
              >
                MinhTrong
              </span>
            </Link>
          </div>
          {/* Navigation Menu */}
          <div
            className={`${
              isMobileMenuOpen
                ? "block absolute top-[72px] border-t border-b border-gray-500 left-0 right-0 overflow-y-scroll h-[60vh]"
                : "hidden"
            } md:block md:w-auto bg-white md:bg-transparent `}
          >
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 md:space-x-8">
              {NavbarRoutes.map((route, index) => (
                <li key={index} className="relative">
                  {route.href && (
                    <Link
                      href={route.href}
                      onClick={() => {
                        setActiveMenu(route.name);
                        setIsMobileMenuOpen(false);
                        setOpenMenu(null);
                      }}
                      className={`block py-2 px-3 rounded-md text-black transition text-[20px] font-semibold ${
                        activeMenu === route.name
                          ? "text-blue-700 font-bold"
                          : "hover:text-blue-700"
                      }`}
                    >
                      {route.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Search + Toggle Menu Button */}
          <div className="flex items-center">
            {/* Search Icon */}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-blue-700 px-4 py-2 text-white rounded-3xl mr-2">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </ClickOutside>
  );
};

export default Navbar;
