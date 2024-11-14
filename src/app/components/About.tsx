'use client'; 
import React from 'react'; 
import { IoFastFoodSharp } from 'react-icons/io5'; 

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
        <img 
          src="https://shorturl.at/h4jCz" 
          alt="Restaurant Interior" 
          className="w-full h-64 object-cover mb-6"
        />

        <p className="text-xl max-w-3xl mx-auto mb-4">
          Welcome to Huzfoods, where we serve delicious, freshly made fast food with love and care. 
          Our mission is to provide a quick and satisfying meal experience for our customers while ensuring the highest quality ingredients. 
          Whether you're here for a quick snack or a full meal, we’ve got you covered. We pride ourselves on creating tasty dishes that satisfy 
          cravings without compromising on quality. Our team is dedicated to delivering fast, friendly service in a comfortable, welcoming 
          environment. Thank you for choosing us as your go-to spot for fast food – we can't wait to serve you!
        </p>
        
        {/* Food Image */}
        <img 
          src="https://shorturl.at/Zb8FQ" 
          alt="Delicious Food" 
          className="w-full h-80 object-cover mb-6"
        />
        
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            At Huzfoods, we aim to make every meal a delightful experience. We focus on bringing you food 
            that is quick, affordable, and, most importantly, delicious. We believe in using fresh, high-quality ingredients, prepared 
            with care, to give our customers the best taste and value.
          </p>
        </div>
      </div>
    </div>
  );
}
