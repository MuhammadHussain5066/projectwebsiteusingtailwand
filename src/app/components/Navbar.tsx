'use client';
import React from 'react';
import { FaHamburger, FaBolt, FaShoppingBag } from 'react-icons/fa'; // Use FaShoppingBag instead of FaCartShopping
import { CiSearch } from 'react-icons/ci';

export default function App() {
  return (
    <div className="p-5">
      <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-500">
        <div className="flex justify-between items-center">

          {/* Left Section: Hamburger Icon & Search Bar */}
          <div className="flex items-center gap-3">
            <FaHamburger className="w-6 h-6 text-green-500" />
            
            <div className="relative">
              <input
                className="rounded-3xl py-3 px-4 outline-none text-lg w-[350px] lg:w-[400px] md:w-[400px] sm:w-[300px] pr-10"
                type="text"
                placeholder="Your text here"
              />
              <CiSearch className="w-6 h-6 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Center Section: Time & Cart */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <FaBolt className="w-5 h-5 text-yellow-500" />
              <span className="text-amber-400">15 minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <FaShoppingBag className="w-6 h-6 text-blue-500" /> {/* Replaced FaCartShopping with FaShoppingBag */}
              <span className="text-blue-500">Your Cart</span>
            </div>
          </div>

          {/* Right Section: User Avatar */}
          <div>
            <img
              className="block rounded-full ring-2 ring-sky-400 w-12 h-12"
              src="https://shorturl.at/dkute"
              alt="User Avatar"
            />
          </div>

        </div>
      </div>

      {/* Full-Width Banner Image */}
      <div className="relative w-full h-[300px] mt-5">
        <img
          className="object-cover w-full h-full rounded-xl"
          src="https://your-image-url-here.jpg" // Replace with your desired image URL
          alt="Banner Image"
        />
      </div>
    </div>
  );
}
