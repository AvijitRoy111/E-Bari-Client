import React, { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, ArrowLeft, Heart, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Villa = () => {
  const navigate = useNavigate();

  const villaList = [
    {
      id: 1,
      title: "Royal Azure Villa",
      location: "Malibu, California",
      price: "$1,250,000",
      beds: 6,
      baths: 5,
      size: "4500",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Modern Glass Oasis",
      location: "Miami, Florida",
      price: "$980,000",
      beds: 4,
      baths: 4,
      size: "3800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Mediterranean Retreat",
      location: "Beverly Hills, CA",
      price: "$2,100,000",
      beds: 7,
      baths: 6,
      size: "5200",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "Palm Breeze Estate",
      location: "Palm Springs, CA",
      price: "$850,000",
      beds: 4,
      baths: 3,
      size: "3100",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
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
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 py-12 px-6">
       <div className="max-w-7xl mx-auto">
        
         {/* Navigation */}
         <button 
           onClick={() => navigate(-1)}
           className="flex items-center text-gray-600 dark:text-gray-400 hover:text-green-600 mb-6 transition-colors font-medium"
        >
           <ArrowLeft size={20} className="mr-2" /> Back to Explore
         </button>

         <div className="mb-10 text-center md:text-left">
           <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
             Luxury Villas
           </h1>
           <p className="text-gray-500 mt-2 text-lg italic">Experience world-class living in our premium villas.</p>
         </div>

         {/* Grid Container */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {villaList.map((villa) => (
            <div key={villa.id} className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
              
               {/* Image with Zoom */}
               <div className="relative h-72 overflow-hidden">
                 <img 
                   src={villa.image} 
                   alt={villa.title} 
                   style={{ transform: `scale(${zoomLevels[villa.id] || 1})` }}
                   className="w-full h-full object-cover transition-transform duration-500"
                 />
                 <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold">
                   PREMIUM VILLA
                 </div>
                
                 {/* Zoom Controls */}
                 <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                   <button onClick={() => handleZoomIn(villa.id)} className="p-2 bg-white/90 rounded-full text-black hover:bg-white shadow-lg transition-all"><Plus size={16}/></button>
                   <button onClick={() => handleZoomOut(villa.id)} className="p-2 bg-white/90 rounded-full text-black hover:bg-white shadow-lg transition-all"><Minus size={16}/></button>
                 </div>
               </div>

               {/* Content */}
               <div className="p-8">
                 <div className="flex items-center text-gray-400 text-sm mb-3">
                   <MapPin size={16} className="mr-1 text-green-500" />
                   <span>{villa.location}</span>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">{villa.title}</h3>
                
                 <div className="flex justify-between py-4 border-t border-gray-50 dark:border-gray-800 mb-6">
                    <span className="flex items-center gap-1 font-semibold dark:text-gray-300"><Bed size={18} className="text-green-600"/> {villa.beds}</span>
                    <span className="flex items-center gap-1 font-semibold dark:text-gray-300"><Bath size={18} className="text-green-600"/> {villa.baths}</span>
                    <span className="flex items-center gap-1 font-semibold dark:text-gray-300"><Maximize size={18} className="text-green-600"/> {villa.size} ft</span>
                 </div>

                 <div className="flex items-center justify-between">
                   <span className="text-2xl font-black text-green-700 dark:text-green-400">{villa.price}</span>
                   <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-xl font-bold transition-all transform hover:scale-105">
                     View Villa
                   </button>
                 </div>
               </div>
             </div>
          ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Villa;