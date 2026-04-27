import React from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin } from "lucide-react";
import Skeleton from "./SkeletonSkeleton";

const PropertyCard = ({ item, favorites, toggleFavorite, loading }) => {
  // Show detailed skeleton while loading
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm relative">
        {/* Image Placeholder */}
        <div className="relative aspect-[4/3]">
          <Skeleton className="w-full h-full" />

          
          {/* UPDATED: Category Badge Skeleton with Shadow and Backdrop */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-white/60 dark:bg-blue-900/60 backdrop-blur-md rounded-lg shadow-sm border border-white/20">
            <Skeleton className="w-16 h-4 rounded" />
          </div>

          {/* UPDATED: Favorite Button Skeleton with Shadow and Backdrop */}
          <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-sm border border-white/20">
            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
        </div>

        {/* Details Placeholder */}
        <div className="p-5">
          <Skeleton className="w-3/4 h-6 mb-3 rounded-md" />
          <div className="flex items-center mb-4">
            <Skeleton className="w-4 h-4 mr-2 rounded-full" />
            <Skeleton className="w-1/2 h-4 rounded-md" />
          </div>
          <div className="pt-4 border-t border-gray-50 dark:border-gray-700 flex justify-between items-center">
            <Skeleton className="w-24 h-8 rounded-md" />
            <Skeleton className="w-16 h-4 rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  // --- Real Content Logic ---
  const isFav = favorites?.some((fav) => fav._id === item?._id);

//   return (
//     <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 relative">
//       <Link to={`/details/${item?._id}`}>
//         <div className="relative aspect-[4/3] overflow-hidden">
//           <img
//             src={item?.images?.[0] || "placeholder.jpg"}
//             alt={item?.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg text-xs font-bold text-blue-600 z-10">
//             {item?.category}
//           </div>
//         </div>

//         <div className="p-5">
//           <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate mb-2">
//             {item?.title}
//           </h3>
//           <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
//             <MapPin size={14} className="mr-1 shrink-0" />
//             <span className="truncate">{item?.address}</span>
//           </div>
//           <div className="pt-4 border-t border-gray-50 dark:border-gray-700 flex justify-between items-center">
//             <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
//               ${item?.price_min?.toLocaleString()}
//             </span>
//             <span className="text-xs text-gray-400">Explore →</span>
//           </div>
//         </div>
//       </Link>

//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           toggleFavorite(item);
//         }}
//         className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 dark:bg-gray-900/60 backdrop-blur-md shadow-sm border border-white/20 hover:scale-110 active:scale-95 transition-all z-10"
//       >
//         <Heart
//           size={20}
//           className={isFav ? "fill-red-500 stroke-red-500" : "text-gray-600 dark:text-white"}
//         />
//       </button>
//     </div>
//   );
// };

// export default PropertyCard;