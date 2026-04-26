import React, { useState, useEffect, useMemo } from "react";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import useProperties from "@/hooks/useProperties";

import PropertyFilters from "./PropertyFilters";
import PropertyGrid from "./PropertyGrid";
import Pagination from "./Pagination";

const AllProperties = () => {
  const { properties, loading } = useProperties();
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [maxPrice, setMaxPrice] = useState(600000);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("property-favorites")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (item) => {
    const isExist = favorites.find(fav => fav._id === item._id);
    let updated;
    if (isExist) {
      updated = favorites.filter(fav => fav._id !== item._id);
    } else {
      updated = [...favorites, item];
    }
    setFavorites(updated);
    localStorage.setItem("property-favorites", JSON.stringify(updated));
  };

  const filteredProperties = useMemo(() => {
    if (!properties) return [];
    return properties.filter(item => {
      const matchesSearch =
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        activeTab === "All" ||
        item.category?.toLowerCase() === activeTab.toLowerCase();
      const matchesPrice = (item.price_min || 0) <= maxPrice;
      return matchesSearch && matchesType && matchesPrice;
    });
  }, [properties, searchTerm, activeTab, maxPrice]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(start, start + itemsPerPage);
  }, [filteredProperties, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeTab, maxPrice]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Properties" }]} />
        
        <div className="mt-8 space-y-10">
          {/* Added loading prop here so filters can show skeletons */}
          <PropertyFilters
            loading={loading}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />

          <PropertyGrid
            loading={loading}
            properties={currentItems}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />

          {/* Hide pagination while loading for a cleaner look */}
          {!loading && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;