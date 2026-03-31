import React, { useState } from 'react';
import { Heart } from 'lucide-react'; // 'npm install lucide-react' kora thakte hobe
import card1 from "../../assets/images/card/card-1.jpg";
import card2 from "../../assets/images/card/card2.jpg";
import card3 from "../../assets/images/card/card3.jpg";

const PropertySection = () => {
  const properties = [
    {
      id: 1,
      image: card1,
      title: "Modern Glass Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      type: "Villa",
      status: "For Sale"
    },
    {
      id: 2,
      image: card2,
      title: "Minimalist Family Home",
      location: "Austin, TX",
      price: "$2,400/mo",
      type: "Family House",
      status: "For Rent"
    },
    {
      id: 3,
      image: card3,
      title: "Luxury Penthouse",
      location: "New York, NY",
      price: "$3,800,000",
      type: "Apartment",
      status: "For Sale"
    }
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto transition-colors duration-300 dark:bg-gray-900">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="md:w-1/2">
          <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block border border-gray-200 dark:border-gray-700">
            ● Featured Properties
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Discover your <br /> dreaming home
          </h2>
        </div>
        <div className="md:w-1/3">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            Explore an exclusive selection of premium properties, meticulously curated for luxury living and prime real estate investment.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["All Properties", "Family House", "Villa", "Apartment"].map((tab, index) => (
          <button 
            key={index}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
              index === 0 
              ? "bg-black text-white dark:bg-white dark:text-black" 
              : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            {/* Image Container - Height reduced to h-64 or h-72 */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 h-72">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 dark:bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-gray-900 dark:text-white">
                  {item.type}
                </span>
                <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-white shadow-lg ${
                  item.status === 'For Rent' ? 'bg-orange-500' : 'bg-green-600'
                }`}>
                  {item.status}
                </span>
              </div>

              {/* Favorite Icon */}
              <button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 backdrop-blur-md rounded-full transition-all group/fav">
                <Heart className="w-5 h-5 text-white group-hover/fav:fill-red-500 group-hover/fav:text-red-500 transition-colors" />
              </button>
            </div>

            {/* Content */}
            <div className="mt-4 px-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-1">
                    <span className="mr-1 opacity-70">📍</span> {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertySection;