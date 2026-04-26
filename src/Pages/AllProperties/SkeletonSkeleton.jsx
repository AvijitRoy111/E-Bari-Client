import React from "react";

// Reusable skeleton component with pulse animation
const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md ${className}`}></div>
);

export default Skeleton;