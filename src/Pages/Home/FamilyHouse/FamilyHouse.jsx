import React, { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, ArrowLeft, Heart, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FamilyHouse = () => {
  const navigate = useNavigate();

  const houseList = [
    {
      id: 1,
      title: "Modern Dream Family House",
      location: "Dhanmondi, Dhaka",
      price: "$450,000",
      beds: 4,
      baths: 3,
      size: "2400",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Luxury Skyline Villa",
      location: "Gulshan, Dhaka",
      price: "$620,000",
      beds: 5,
      baths: 4,
      size: "3200",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Green View Apartment",
      location: "Uttara, Dhaka",
      price: "$280,000",
      beds: 3,
      baths: 2,
      size: "1800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "Classic Heritage Home",
      location: "Banani, Dhaka",
      price: "$510,000",
      beds: 4,
      baths: 3,
      size: "2600",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1000"
    },
     {
       id: 5,
       title: "Minimalist Urban House",
       location: "Bashundhara, Dhaka",
       price: "$390,000",
       beds: 3,
       baths: 3,
       size: "2100",
       image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000"
     }
   ];

  // Zoom state to track zoom level for each house by ID
  const [zoomLevels, setZoomLevels] = useState({});

  const handleZoomIn = (id) => {
    setZoomLevels(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 0.2
    }));
  };

  const handleZoomOut = (id) => {
    setZoomLevels(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 0.2, 1) // Minimum zoom level is 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
         {/* Header section */}
         <div className="flex flex-col mb-10">
           <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </button>
           <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
             Available Family Houses
           </h1>
           <p className="text-gray-500 mt-2">Find the perfect and most comfortable home for your family.</p>
         </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houseList.map((house) => (
             <div 
               key={house.id} 
               className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
             >
                {/* Image Section with Zoom Controls */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={house.image} 
                   alt={house.title} 
                   style={{ transform: `scale(${zoomLevels[house.id] || 1})` }}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md z-10">
                   FAMILY HOUSE
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all z-10">
                    <Heart size={18} />
                  </button>

                  {/* Zoom Controls Overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                    <button 
                     onClick={() => handleZoomIn(house.id)}
                    className="p-2 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                     title="Zoom In"
                   >
                     <Plus size={16} />
                   </button>
                   <button 
                    onClick={() => handleZoomOut(house.id)}
                    className="p-2 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                    title="Zoom Out"
                  >
                     <Minus size={16} />
                   </button>
                 </div>
               </div>

               {/* Details Content */}
               <div className="p-6">
                 <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                   <MapPin size={16} className="mr-1 text-red-500" />
                   <span>{house.location}</span>
                 </div>
                
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {house.title}
                  </h2>

                 {/* Features */}
                  <div className="flex justify-between items-center border-t border-b border-gray-100 dark:border-gray-800 py-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed size={16} className="text-blue-500" />
                      <span className="text-sm font-semibold dark:text-gray-300">{house.beds} Bed</span>
                    </div>
                    <div className="flex items-center gap-1 border-l border-r px-4 dark:border-gray-800">
                      <Bath size={16} className="text-blue-500" />
                      <span className="text-sm font-semibold dark:text-gray-300">{house.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize size={16} className="text-blue-500" />
                      <span className="text-sm font-semibold dark:text-gray-300">{house.size} Sqft</span>
                    </div>
                  </div>

//                  {/* Price and Button */}
//                  <div className="flex items-center justify-between">
//                    <div>
//                      <span className="text-gray-400 text-[10px] block uppercase font-bold">Price</span>
//                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{house.price}</span>
//                    </div>
//                    <button className="bg-gray-900 dark:bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-5 rounded-xl transition-all shadow-md">
//                      View Details
//                    </button>
//                  </div>
//                </div>
//              </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FamilyHouse;