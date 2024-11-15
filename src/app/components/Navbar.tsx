'use client';
import React from 'react';
import './Navbar.css';  // Importing the CSS file

export default function App() {
  return (
    <div className="p-5">
      {/* Navbar Section */}
      <div className="navbar">
        <div className="flex justify-between items-center">

          {/* Left Section: Hamburger & Search Bar */}
          <div className="flex items-center gap-6">
            <button className="hamburger-btn text-white font-bold text-xl">
              ☰  {/* Hamburger Icon (using text) */}
            </button>
            
            <div className="relative nav-item">
              <input
                className="search-input"
                type="text"
                placeholder="Search for products"
              />
              <button className="search-icon text-teal-500 absolute right-3 top-1/2 transform -translate-y-1/2">
                🔍 {/* Search Icon (using text) */}
              </button>
            </div>
          </div>

          {/* Center Section: Time & Cart */}
          <div className="center-section flex items-center gap-8">
            <div className="time flex items-center gap-2">
              <span className="text-yellow-400 font-semibold">⚡</span> {/* Lightning Icon (using text) */}
              <span className="text">Get order in 15 minutes</span>
            </div>

            <div className="cart flex items-center gap-2">
              <span className="text-blue-500">🛒</span> {/* Cart Icon (using text) */}
              <span className="text-blue-500 font-semibold">Your Cart</span>
            </div>
          </div>

         
        </div>
      </div>

      {/* Full-Width Banner Image */}
      
    </div>
  );
}
