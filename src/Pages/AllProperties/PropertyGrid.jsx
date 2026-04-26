import React from "react";
import PropertyCard from "./PropertyCard";
import Skeleton from "./SkeletonSkeleton";

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 space-y-4 border border-gray-100 dark:border-gray-700 shadow-sm">
    <Skeleton className="aspect-[4/3] w-full rounded-xl" />
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
    <div className="flex justify-between items-center pt-4">
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-8 w-20" />
    </div>
  </div>
);

const PropertyGrid = ({ loading, properties, favorites, toggleFavorite }) => {
  // Show 6 skeleton cards while loading data from database
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 dark:text-gray-400 text-lg">No properties found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((item) => (
        <PropertyCard 
          key={item._id} 
          item={item} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
      ))}
    </div>
  );
};

export default PropertyGrid;