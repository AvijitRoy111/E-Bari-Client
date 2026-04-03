import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
// ইমেজ ইমপোর্ট ঠিক আছে ধরে নিচ্ছি...

const PropertySection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All Properties");

  const properties = [
    { id: 1, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", title: "Modern Glass Villa", location: "Beverly Hills, CA", price: "$2,500,000", type: "Villa", status: "For Sale" },
    { id: 2, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914", title: "Minimalist Family Home", location: "Austin, TX", price: "$2,400/mo", type: "Family House", status: "For Rent" },
    { id: 3, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", title: "Luxury Penthouse", location: "New York, NY", price: "$3,800,000", type: "Apartment", status: "For Sale" }
  ];

  const filteredProperties = activeTab === "All Properties" 
    ? properties 
    : properties.filter(p => p.type === activeTab);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto transition-colors duration-300 dark:bg-gray-900">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="md:w-1/2">
          <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block border border-gray-200 dark:border-gray-700">
            ● Featured Properties
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Discover your <br /> dreaming home
          </h2>
        </div>
        <div className="md:w-1/3">
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            Explore an exclusive selection of premium properties, meticulously curated for luxury living.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["All Properties", "Family House", "Villa", "Apartment"].map((tab) => (
          <button 
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              if(tab === "Family House") navigate('/family-house'); 
            }}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
              activeTab === tab 
              ? "bg-black text-white dark:bg-white dark:text-black shadow-lg" 
              : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer"
            onClick={() => navigate('/family-house')} 
          >
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 h-72">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 dark:bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase">{item.type}</span>
                <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-white ${item.status === 'For Rent' ? 'bg-orange-500' : 'bg-green-600'}`}>{item.status}</span>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full group/fav hover:bg-white/40 transition-all">
                <Heart className="w-5 h-5 text-white group-hover/fav:fill-red-500" />
              </button>
            </div>

            <div className="mt-4 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm flex items-center mt-1"><MapPin size={14} className="mr-1" /> {item.location}</p>
              </div>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertySection;