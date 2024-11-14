import React from 'react';
import { FaHamburger } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBolt } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";




export default function App() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-500">            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-2">

                <FaHamburger className="w-6 h-6 text-green-500" />

                <div style={{ position: 'relative' }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xl w-[350px] pr-10 lg:block md:block"
                    type="text"
                    placeholder="Your text here"
                  />

                  <CiSearch className="w-6 h-6 text-green-500" />

                </div>
                </div>

                <div className="flex justify-center items-center gap-2">
      <FaBolt className="w-5 h-5 text-yellow-500 lg:block md:block" />
      <span className="text-amber-400">15 minutes</span>

                </div>

                <div className="flex justify-center items-center gap-2">
      <FaCartShopping className="w-6 h-6 text-blue-500" />
      <span className="text-blue-500">Your Cart</span>
    </div>
    
    <div>
      <img 
        className="block rounded-full ring-2 ring-sky-400 w-12 h-12" 
        src="https://shorturl.at/pSuHV" 
        alt="user avatar" 
      />
    </div>


</div>
          </div>
        </div>
      </div>
    </div>

  )
}
