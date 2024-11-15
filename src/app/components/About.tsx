'use client'; 
import React from 'react'; 
import { IoFastFoodSharp } from 'react-icons/io5'; 
import Image from 'next/image'; 
import './AboutUs.css'; // Import the CSS file

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-page-overlay"></div>
      
      <div className="about-page-content">
        <h1>
          <IoFastFoodSharp className="text-5xl mr-4 text-yellow-500" />
          About Us
        </h1>
        
        {/* Restaurant Image */}
        <Image
          src="https://shorturl.at/h4jCz" 
          alt="Restaurant Interior" 
          className="w-full h-64 object-cover rounded-lg shadow-xl mb-6"
          width={800} // Adjusted width for better optimization
          height={500} // Adjusted height for better optimization
        />

        <p className="text-lg text-white max-w-3xl mx-auto mb-6">
          Welcome to our restaurant! We serve delicious food made with love, using the finest ingredients. Our atmosphere is warm and inviting, perfect for any occasion. Join us for an unforgettable dining experience!
        </p>
        
        {/* Food Image */}
        <Image
          src="https://shorturl.at/Zb8FQ" 
          alt="Delicious Food" 
          className="w-full h-80 object-cover rounded-lg shadow-xl mb-6"
          width={900} // Adjusted width for better optimization
          height={600} // Adjusted height for better optimization
        />
        
        <div className="mt-8 max-w-2xl mx-auto">
          <h2>Our Mission</h2>
          <p className="mission-text">
            Our mission is to bring you the best dining experience possible. We focus on serving high-quality, flavorful meals with exceptional service. Come visit us and taste the difference!
          </p>
        </div>
      </div>
    </div>
  );
}
