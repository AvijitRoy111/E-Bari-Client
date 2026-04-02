import React, { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import card1 from "../../assets/images/card/card-1.jpg"; // Apnar image path thik thakle thakbe

const AllProperties = () => {
  const [activeTab, setActiveTab] = useState("All");

  const properties = [
    { id: 1, img: card1, price: "$4,500", title: "Skyline Haven Villa", loc: "Miami, FL", bed: 4, bath: 3, sqft: 2500, type: "Sale" },
    { id: 2, img: card1, price: "$2,200", title: "Modern Urban Loft", loc: "New York, NY", bed: 2, bath: 1, sqft: 1200, type: "Rent" },
    { id: 3, img: card1, price: "$3,800", title: "Serene Garden House", loc: "Austin, TX", bed: 3, bath: 2, sqft: 1800, type: "Sale" },
    { id: 4, img: card1, price: "$5,000", title: "Ocean Edge Mansion", loc: "Malibu, CA", bed: 6, bath: 5, sqft: 4500, type: "Sale" },
    { id: 5, img: card1, price: "$1,800", title: "Cozy Studio Flat", loc: "Chicago, IL", bed: 1, bath: 1, sqft: 800, type: "Rent" },
    { id: 6, img: card1, price: "$3,200", title: "Contemporary Condo", loc: "Seattle, WA", bed: 3, bath: 2, sqft: 1500, type: "Rent" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Header & Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "All Properties", href: "/all-properties" }]} />
        
        <div className="mt-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Our <span className="text-blue-600">Exclusive</span> Collection
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Found {properties.length} premium properties for you.</p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative group w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by location or name..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all shadow-sm dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pb-20 flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR FILTER - Desktop */}
        <aside className="hidden lg:block w-80 space-y-8 h-fit sticky top-24">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal size={18} className="text-blue-600" />
              <h3 className="font-bold text-xl dark:text-white">Filters</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Property Type</label>
                <div className="flex flex-wrap gap-2">
                  {["All", "Villa", "Apartment", "House"].map((t) => (
                    <button 
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === t ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Price Range</label>
                <input type="range" className="w-full accent-blue-600" min="1000" max="10000" />
                <div className="flex justify-between mt-2 text-xs font-bold text-gray-500 uppercase">
                  <span>$1k</span>
                  <span>$10k+</span>
                </div>
              </div>

              <button className="w-full bg-gray-900 dark:bg-blue-600 text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity">
                Apply Filters
              </button>
            </div>
          </div>
        </aside>

        {/* PROPERTY GRID */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {properties.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Badges */}
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-md shadow-lg ${item.type === 'Sale' ? 'bg-green-600/80' : 'bg-orange-500/80'}`}>
                      FOR {item.type.toUpperCase()}
                    </span>
                  </div>
                  <button className="absolute top-5 right-5 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all group/heart">
                    <Heart size={20} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                  </button>
                  <div className="absolute bottom-5 left-5">
                    <p className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl font-black text-blue-600 dark:text-blue-400 shadow-xl text-lg">
                      {item.price}<span className="text-sm font-medium text-gray-500">{item.type === 'Rent' ? '/mo' : ''}</span>
                    </p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mt-2">
                    <MapPin size={16} />
                    <span className="text-sm">{item.loc}</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <BedDouble size={20} className="text-blue-500" />
                      <span className="text-sm font-semibold">{item.bed} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={20} className="text-blue-500" />
                      <span className="text-sm font-semibold">{item.bath} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square size={18} className="text-blue-500" />
                      <span className="text-sm font-semibold">{item.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Optional) */}
          <div className="mt-16 flex justify-center gap-4">
              <button className="w-12 h-12 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center dark:text-white hover:bg-blue-600 hover:text-white transition-all">1</button>
              <button className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">2</button>
              <button className="w-12 h-12 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center dark:text-white hover:bg-blue-600 hover:text-white transition-all">3</button>
          </div>
        </div>

       </div>
    </div>
  );
}; 

export default AllProperties;