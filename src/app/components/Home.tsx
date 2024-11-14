'use client';
import React from 'react';

export default function App() { 
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 text-white p-4 rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-center text-2xl font-semibold">
          Welcome to my Fastfood website Homepage
        </h1>
      </div>
    </div>
  );
}
