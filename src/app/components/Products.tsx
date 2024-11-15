'use client'; 
import React from 'react'; 
import Image from 'next/image'; 
import './ProductPage.css'; // Import the CSS file

export default function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-page-overlay"></div>
      
      <div className="product-page-content">
        <h1>Our Delicious Menu</h1>
        
        <div className="product-cards">
          {/* Product 1 */}
          <div className="product-card">
            <Image
              src="https://shorturl.at/EaNqy"
              alt="Cheesy Burger"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              width={320} // Optimized width for image
              height={192} // Optimized height for image
            />
            <h2>Cheesy Burger</h2>
            <p>A juicy beef patty with melted cheese, fresh lettuce, and special sauce.</p>
            <p className="price">$8.99</p>
            <button>Add to Cart</button>
          </div>
          
          {/* Product 2 */}
          <div className="product-card">
            <Image
              src="https://shorturl.at/La0DZ"
              alt="Crispy Fries"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              width={320} // Optimized width for image
              height={192} // Optimized height for image
            />
            <h2>Crispy Fries</h2>
            <p>Golden, crispy fries served with your choice of dipping sauce.</p>
            <p className="price">$3.99</p>
            <button>Add to Cart</button>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <Image
              src="https://shorturl.at/rhkbd"
              alt="Soda Drink"
              className="w-full h-48 object-cover mb-4 rounded-lg"
              width={320} // Optimized width for image
              height={192} // Optimized height for image
            />
            <h2>Soda Drink</h2>
            <p>Refreshing soda with a variety of flavors to choose from.</p>
            <p className="price">$1.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Footer with Mini Contact Us */}
      <footer className="footer">
        <div className="flex justify-center items-center text-center">
          <div>
            <h2>Contact Us</h2>
            <p>Have any questions or need help? Reach out to us!</p>
            <a
              href="mailto:contact@huzfoods.com" // Email link
              className="hover:bg-yellow-600 transition duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
