import React from "react";
import Skeleton from "./SkeletonSkeleton";
import { RotateCcw } from "lucide-react"; // Import a reset icon

const PropertyFilters = ({ loading, searchTerm, setSearchTerm, activeTab, setActiveTab, maxPrice, setMaxPrice }) => {
    
    // Function to clear all filters
    const handleReset = () => {
        setSearchTerm("");
        setActiveTab("All");
        setMaxPrice(600000); // Reset to default max price
    };

    // Show detailed skeleton loading
    if (loading) {
        return (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="w-full lg:w-1/3">
                    <Skeleton className="w-full h-12 rounded-xl" />
                </div>
                 <div className="flex bg-gray-100 dark:bg-gray-700 p-1.5 rounded-xl gap-2">
                     <Skeleton className="w-20 h-9 rounded-lg" />
                     <Skeleton className="w-20 h-9 rounded-lg" />
                     <Skeleton className="w-24 h-9 rounded-lg" />
                 </div>
                 <div className="w-full lg:w-1/4">
                     <div className="flex justify-between mb-3">
                         <Skeleton className="w-16 h-4 rounded" />
                         <Skeleton className="w-20 h-4 rounded" />
                     </div>
                     <Skeleton className="w-full h-2 rounded-lg" />
                 </div>
                 {/* Reset Button Skeleton */}
                 <div className="hidden lg:block">
                     <Skeleton className="w-12 h-12 rounded-xl" />
                 </div>
             </div>
         );
     }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
             <div className="w-full lg:w-1/3">
                 <input
                     type="text"
                    placeholder="Search by location..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>

            {/* Category Tabs */}
             <div className="flex bg-gray-100 dark:bg-gray-700 p-1.5 rounded-xl">
                {["All", "Villa", "Apartment"].map((type) => (
                     <button
                         key={type}
                         onClick={() => setActiveTab(type)}
                         className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                             activeTab === type
                                 ? "bg-white dark:bg-blue-600 shadow-sm text-blue-600 dark:text-white"
                                 : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                         }`}
                     >
                         {type}
                     </button>
                ))}
            </div>

            {/* Price Range */}
            <div className="w-full lg:w-1/4">
                <div className="flex justify-between mb-2">
                     <span className="text-sm font-medium dark:text-gray-300">Max Price:</span>
                     <span className="text-sm font-bold text-blue-600">${maxPrice.toLocaleString()}</span>
                 </div>
                 <input
//                     type="range"
//                     min="1000"
//                     max="600000"
//                     step="5000"
//                     className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(Number(e.target.value))}
//                 />
//             </div>

//             {/* Reset Button */}
//             <button
//                 onClick={handleReset}
//                 title="Reset Filters"
//                 className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 rounded-xl hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all active:scale-95 group"
//             >
//                 <RotateCcw size={18} className="group-hover:rotate-[-180deg] transition-transform duration-500" />
//                 <span className="lg:hidden font-bold">Reset Filters</span>
//             </button>
//         </div>
//     );
// };

// export default PropertyFilters;