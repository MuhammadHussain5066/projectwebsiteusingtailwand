'use client';
import React from 'react';

export default function ProductPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 text-white p-4 rounded-lg min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-semibold mb-6">Our Delicious Menu</h1>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Product 1 */}
          <div className="w-80 bg-white text-black rounded-lg shadow-lg p-4">
            <img 
              src="https://shorturl.at/EaNqy" 
              alt="Burger"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Cheesy Burger</h2>
            <p className="text-lg text-gray-700 mb-4">A juicy beef patty with melted cheese, fresh lettuce, and special sauce.</p>
            <p className="text-xl font-bold text-yellow-500">$8.99</p>
            <button className="mt-4 bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              Add to Cart
            </button>
          </div>
          
          {/* Product 2 */}
          <div className="w-80 bg-white text-black rounded-lg shadow-lg p-4">
            <img 
              src="https://shorturl.at/La0DZ" 
              alt="Fries"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Crispy Fries</h2>
            <p className="text-lg text-gray-700 mb-4">Golden, crispy fries served with your choice of dipping sauce.</p>
            <p className="text-xl font-bold text-yellow-500">$3.99</p>
            <button className="mt-4 bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Product 3 */}
          <div className="w-80 bg-white text-black rounded-lg shadow-lg p-4">
            <img 
              src="https://shorturl.at/rhkbd" 
              alt="Drink"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold">Soda Drink</h2>
            <p className="text-lg text-gray-700 mb-4">Refreshing soda with a variety of flavors to choose from.</p>
            <p className="text-xl font-bold text-yellow-500">$1.99</p>
            <button className="mt-4 bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Footer with Mini Contact Us */}
      <footer className="bg-black text-white p-4 mt-12">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-lg mb-4">Have any questions or need help? Reach out to us!</p>
            <a 
              href="mailto:info@huzfoods.com" 
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
