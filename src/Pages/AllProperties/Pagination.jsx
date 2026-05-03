import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Skeleton from "./SkeletonSkeleton"; // Ensure the path is correct

const Pagination = ({ loading, totalPages, currentPage, setCurrentPage }) => {
  
  // Render detailed skeleton while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-12 gap-2">
        {/* Left Arrow Button Skeleton */}
        <Skeleton className="w-10 h-10 rounded-lg" />

          {/* Dynamic Page Number Skeletons */}
          {[...Array(5).keys()].map((i) => (
            <Skeleton key={i} className="w-11 h-11 rounded-lg" />
          ))}

          {/* Right Arrow Button Skeleton */}
          <Skeleton className="w-10 h-10 rounded-lg" />
        </div>
      );
    }

   // Return null if there is only one page or no items
   if (totalPages <= 1) return null;

   // Handle page navigation and scroll to top
   const handlePageChange = (newPage) => {
     setCurrentPage(newPage);
     window.scrollTo({ top: 0, behavior: "smooth" });
   };

  return (
    <div className="flex justify-center items-center mt-12 gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="p-2 rounded-lg border dark:border-gray-700 dark:text-white disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
         <ChevronLeft size={20} />
       </button>

        {/* Render dynamic page number buttons */}
        {[...Array(totalPages).keys()].map((n) => {
         const pageNum = n + 1;
         return (
           <button
//             key={pageNum}
//             onClick={() => handlePageChange(pageNum)}
//             className={`w-11 h-11 rounded-lg text-sm font-bold transition-all ${
//               currentPage === pageNum
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
//             }`}
//           >
//              {pageNum}
//            </button>
//          );
//        })}

//        <button
//          disabled={currentPage === totalPages}
//          onClick={() => handlePageChange(currentPage + 1)}
//          className="p-2 rounded-lg border dark:border-gray-700 dark:text-white disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-800"
//        >
//          <ChevronRight size={20} />
//        </button>
//      </div>
//    );
//  };

// export default Pagination;