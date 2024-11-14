'use client'; 
import React from 'react'; 
import { IoFastFoodSharp } from 'react-icons/io5'; 
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 text-white p-4 rounded-lg min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-semibold mb-4 flex items-center justify-center">
          <IoFastFoodSharp className="text-4xl mr-4" />
          About Us
        </h1>
        
        {/* Restaurant Image */}
        <Image
          src="https://shorturl.at/h4jCz" 
          alt="Restaurant Interior" 
          className="w-full h-64 object-cover mb-6"
          width={600} // Added width for image optimization
          height={400} // Added height for image optimization
        />

        <p className="text-xl max-w-3xl mx-auto mb-4">
          Hi we will serve you
        </p>
        
        {/* Food Image */}
        <Image
          src="https://shorturl.at/Zb8FQ" 
          alt="Delicious Food" 
          className="w-full h-80 object-cover mb-6"
          width={800} // Added width for image optimization
          height={533} // Added height for image optimization
        />
        
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            come at our place
          </p>
        </div>
      </div>
    </div>
  );
}
