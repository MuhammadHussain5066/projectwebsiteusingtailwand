'use client';
import React from 'react';
import './Homepage.css';  // Import the custom CSS file

export default function App() {
  return (
    <div>
      {/* Homepage Section with Gradient Background */}
      <div className="homepage-container">
        <div className="homepage-background"></div>

        <div className="homepage-content">
          <h1 className="homepage-title">
            <div className="homepage-text-box">Welcome to my Resturant website</div>
          </h1>
          <p className="homepage-description">
            Discover delicious meals, quick delivery, and unbeatable prices right at your doorstep.
          </p>
          
          <button className="homepage-text-button">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
