"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/images/Home/Screenshot_2025-07-22_215836-removebg-preview.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={image1} alt="Flare Logo" className="w-10 md:w-12" />
          <p className="text-[#C1003F] text-lg md:text-2xl font-bold">flare</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-14 font-medium text-gray-700">
          <li className="hover:text-[#C1003F] transition">
            <Link href="https://flare.network/wallets">Participate</Link>
          </li>
          <li className="hover:text-[#C1003F] transition">
            <Link href="https://flare.network/products/fassets">Products</Link>
          </li>
          <li className="hover:text-[#C1003F] transition">
            <Link href="https://flare.network/resources/developer-hub">
              Developers
            </Link>
          </li>
          <li className="hover:text-[#C1003F] transition">
            <Link href="https://flarescan.com/">Network</Link>
          </li>
          <li>
            <Link
              href="./claim"
              className="bg-[#C1003F] text-white px-4 py-2 rounded-lg shadow hover:bg-[#a00035] transition"
            >
              Claim
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none text-3xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-4 text-gray-700 px-6 py-6 font-medium">
            <li className="hover:text-[#C1003F] transition">
              <Link href="https://flare.network/wallets">Participate</Link>
            </li>
            <li className="hover:text-[#C1003F] transition">
              <Link href="https://flare.network/products/fassets">
                Products
              </Link>
            </li>
            <li className="hover:text-[#C1003F] transition">
              <Link href="https://flare.network/resources/developer-hub">
                Developers
              </Link>
            </li>
            <li className="hover:text-[#C1003F] transition">
              <Link href="https://flarescan.com/">Network</Link>
            </li>
            <li>
              <Link
                href="./claim"
                className="block text-center bg-[#C1003F] text-white px-4 py-2 rounded-lg shadow hover:bg-[#a00035] transition"
              >
                Claim
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
