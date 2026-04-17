import React, { useState, useEffect } from 'react';
import { MapPin, BedDouble, Bath, Square, Heart, Trash2 } from 'lucide-react';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';

const Favourite = () => {
    const [favItems, setFavItems] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('property-favorites')) || [];
        setFavItems(saved);
    }, []);

    const removeFavorite = (id) => {
        const updated = favItems.filter(item => item.id !== id);
        setFavItems(updated);
        localStorage.setItem('property-favorites', JSON.stringify(updated));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20">
            <div className="max-w-[1440px] mx-auto px-6 pt-8">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Favourite", href: "/favourite" }]} />
                
//                 <div className="mt-8 mb-10">
//                     <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
//                         My <span className="text-red-500">Favourite</span> Properties
//                     </h1>
//                     <p className="text-gray-500 mt-2">You have saved {favItems.length} properties</p>
//                 </div>

//                 {favItems.length === 0 ? (
//                     <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
//                         <p className="text-gray-500 text-xl font-medium">Your favourite list is empty!</p>
//                     </div>
//                 ) : (
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                         {favItems.map((item) => (
//                             <div key={item.id} className="group bg-white dark:bg-gray-900 rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
//                                 <div className="relative overflow-hidden h-52">
//                                     <img
//                                         src={item.images?.[0]}
//                                         alt={item.title}
//                                         className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
//                                     />
//                                     <button 
//                                         onClick={() => removeFavorite(item.id)}
//                                         className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-lg"
//                                     >
//                                         <Trash2 size={16} />
//                                     </button>
//                                 </div>

//                                 <div className="p-5 flex flex-col flex-1">
//                                     <h3 className="text-lg font-bold dark:text-white line-clamp-1">{item.title}</h3>
                                    
//                                     <div className="flex items-center gap-1 text-gray-400 text-xs mt-1 mb-3">
//                                         <MapPin size={12} />
//                                         <span className="truncate">{item.address}</span>
//                                     </div>

//                                     <div className="mb-4">
//                                         <span className="text-xl font-black text-blue-600">
//                                             ${item.price_min.toLocaleString()}
//                                         </span>
//                                     </div>

//                                     <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-50 dark:border-gray-800 text-gray-600 dark:text-gray-400">
//                                         <div className="flex flex-col items-center gap-1">
//                                             <BedDouble size={14} className="text-blue-500" />
//                                             <span className="text-[10px] font-bold">{item.beds} Beds</span>
//                                         </div>
//                                         <div className="flex flex-col items-center gap-1 border-x border-gray-100 dark:border-gray-800">
//                                             <Bath size={14} className="text-blue-500" />
//                                             <span className="text-[10px] font-bold">{item.baths} Baths</span>
//                                         </div>
//                                         <div className="flex flex-col items-center gap-1">
//                                             <Square size={14} className="text-blue-500" />
//                                             <span className="text-[10px] font-bold">{item.sqft} sqft</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Favourite;