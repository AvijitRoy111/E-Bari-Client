import React, { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, ArrowLeft, Heart, Plus, Minus, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Apartment = () => {
  const navigate = useNavigate();

  const apartmentList = [
    {
      id: 1,
      title: "Skyline Luxury Apartment",
      location: "Gulshan 2, Dhaka",
      price: "$320,000",
      beds: 3,
      baths: 3,
      size: "1850",
      floor: "12th Floor",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Urban Comfort Suite",
      location: "Banani, Dhaka",
      price: "$275,000",
      beds: 3,
      baths: 2,
      size: "1600",
      floor: "5th Floor",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Panoramic View Penthouse",
      location: "Baridhara, Dhaka",
      price: "$550,000",
      beds: 4,
      baths: 4,
      size: "2800",
      floor: "Top Floor",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "Minimalist Studio Unit",
      location: "Dhanmondi, Dhaka",
      price: "$150,000",
      beds: 2,
      baths: 1,
      size: "1100",
      floor: "3rd Floor",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 5,
      title: "Contemporary Living Space",
      location: "Uttara, Dhaka",
      price: "$210,000",
      beds: 3,
      baths: 3,
      size: "1700",
      floor: "8th Floor",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const [zoomLevels, setZoomLevels] = useState({});

  const handleZoomIn = (id) => {
    setZoomLevels(prev => ({ ...prev, [id]: (prev[id] || 1) + 0.2 }));
  };

  const handleZoomOut = (id) => {
    setZoomLevels(prev => ({ ...prev, [id]: Math.max((prev[id] || 1) - 0.2, 1) }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-6 font-sans">
       <div className="max-w-7xl mx-auto">      
          {/* Navigation & Header */}
          <div className="flex flex-col mb-10">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 mb-4 transition-colors w-fit font-medium"
            >
              <ArrowLeft size={20} className="mr-2" /> Back to Home
            </button>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 rk:text-white flex items-center gap-3">
              <Building2 className="text-indigo-600" size={36} /> Modern Apartments
            </h1>
            <p className="text-gray-500 mt-2 text-lg">Premium urban artments designed for your lifestyle.</p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartmentList.map((apt) => (
             <div 
               key={apt.id} 
               className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-800"
             >
               {/* Image Section */}
               <div className="relative h-64 overflow-hidden">
                  <img 
                  src={apt.image} 
                  alt={apt.title} 
                   style={{ transform: `scale(${zoomLevels[apt.id] || 1})` }}
                   className="w-full h-full object-cover transition-transform duration-300"
                 />
                 <div className="absolute top-5 left-5 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    APARTMENT
                  </div>

                  {/* Zoom Controls */}
                 <div className="absolute bottom-4 right-4 flex gap-2">
                    <button 
                     onClick={() => handleZoomIn(apt.id)}
                     className="p-2 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-full text-gray-900 dark:text-white hover:bg-white transition-all shadow-lg"
                   >
                      <Plus size={16} />
                    </button>
                    <button 
                     onClick={() => handleZoomOut(apt.id)}
                     className="p-2 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-full text-gray-900 dark:text-white hover:bg-white transition-all shadow-lg"
                   >
                      <Minus size={16} />
                    </button>
                  </div>
               </div>

                {/* Details Content */}
                <div className="p-8">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                    <MapPin size={16} className="mr-1 text-red-500" />
                    <span>{apt.location} • <span className="text-indigo-500 font-semibold">{apt.floor}</span></span>
                  </div>
                
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 transition-colors">
                    {apt.title}
                  </h2>

                  {/* Features */}
                  <div className="flex justify-between items-center border-t border-b border-gray-100 dark:border-gray-800 py-4 mb-6">
                    <div className="flex flex-col items-center">
                      <Bed size={20} className="text-indigo-500 mb-1" />
                      <span className="text-xs font-bold dark:text-gray-300">{apt.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center border-l border-r px-6 dark:border-gray-800">
                      <Bath size={20} className="text-indigo-500 mb-1" />
                      <span className="text-xs font-bold dark:text-gray-300">{apt.baths} Baths</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Maximize size={20} className="text-indigo-500 mb-1" />
                      <span className="text-xs font-bold dark:text-gray-300">{apt.size} Sqft</span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 text-[10px] block uppercase font-bold tracking-widest">Starting Price</span>
                      <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{apt.price}</span>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 px-6 rounded-2xl transition-all shadow-lg shadow-indigo-100 dark:shadow-none transform active:scale-95">
                      Details
                    </button>
                  </div>
             </div>
              </div>
          ))}
          </div>
        </div>
      </div>
  );
};

export default Apartment;