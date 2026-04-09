import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  BedDouble,
  Bath,
  Square,
  RotateCcw,
  ChevronRight,
  Heater,
  Heart
} from 'lucide-react';
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [maxPrice, setMaxPrice] = useState(600000); 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Initial Fetch
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch('../public/fake.json');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // Favourite state
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('property-favorites')) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (item) => {
    const isExist = favorites.find(fav => fav.id === item.id);
    let updated;
    if (isExist) {
      updated = favorites.filter(fav => fav.id !== item.id);
    } else {
      updated = [...favorites, item];
    }
    setFavorites(updated);
    localStorage.setItem('property-favorites', JSON.stringify(updated));
  };

  // Filter Logic
  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      const matchesSearch =
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        activeTab === "All" ||
        item.category?.toLowerCase() === activeTab.toLowerCase() ||
        (activeTab === "House" && item.category === "Family House"); 


      const matchesPrice = (item.price_min || 0) <= maxPrice;

      return matchesSearch && matchesType && matchesPrice;
    });
  }, [properties, searchTerm, activeTab, maxPrice]);

  // Reset Function
  const handleReset = () => {
    setSearchTerm("");
    setActiveTab("All");
    setMaxPrice(600000);
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(start, start + itemsPerPage);
  }, [filteredProperties, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeTab, maxPrice]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Properties", href: "/all" }
          ]}
        />

        {/* HEADER */}
        <div className="mt-8 mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Our <span className="text-blue-600">Exclusive</span> Collection
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
              {loading ? "Discovering spaces..." : `Found ${filteredProperties.length} stunning properties`}
            </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white dark:bg-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-blue-100/20 dark:shadow-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pb-20 flex flex-col lg:flex-row gap-10">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-80 space-y-6">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                <SlidersHorizontal size={20} className="text-blue-600" />
                <h3 className="font-bold text-xl">Filters</h3>
              </div>
              <button
                onClick={handleReset}
                className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors group"
                title="Reset Filters"
              >
                <RotateCcw size={18} className="group-hover:rotate-[-45deg] transition-transform" />
              </button>
            </div>

            {/* TYPE FILTER */}
            <div className="mb-8">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 block">
                Property Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["All", "Villa", "Apartment", "House"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === t
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none scale-[1.02]"
                      : "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100"
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* PRICE FILTER */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Budget</label>
                <span className="text-blue-600 font-extrabold text-lg">
                  Up to ${maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="600000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
                <span>$1k</span>
                <span>$600k</span>
              </div>
            </div>
          </div>
        </aside>

        {/* GRID */}
        <div className="flex-1">
          {filteredProperties.length === 0 && !loading ? (
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 text-xl font-medium">No properties match your search.</p>
              <button onClick={handleReset} className="mt-4 text-blue-600 font-bold hover:underline">Clear all filters</button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-[450px] bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div>
                ))
                : currentItems.map((item) => (
                  <div key={item.id} className="group bg-white dark:bg-gray-900 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">

                    {/* IMAGE SECTION */}
                    <div className="relative overflow-hidden h-64">
                      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
                        <span className="bg-white/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                          {item.category}
                        </span>
                        <button
                          onClick={() => toggleFavorite(item)}
                          className={`p-2 rounded-full transition-all duration-300 shadow-md ${favorites.some(fav => fav.id === item.id)
                              ? "bg-red-500 text-white"
                              : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-red-500"
                            }`}
                        >
                          <Heart size={18} fill={favorites.some(fav => fav.id === item.id) ? "currentColor" : "none"} />
                        </button>
                      </div>
                      <img
                        src={item.images?.[0]}
                        alt={item.title}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* CONTENT SECTION */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold dark:text-white group-hover:text-blue-600 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                        <MapPin size={14} className="shrink-0" />
                        <span className="truncate">{item.address}</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-2xl font-black text-blue-600">
                          ${item.price_min.toLocaleString()}
                        </span>
                        {item.price_max > item.price_min && (
                          <span className="text-gray-400 text-sm font-medium ml-1">
                            - ${item.price_max.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-50 dark:border-gray-800 text-gray-600 dark:text-gray-400 ">
                        <div className="flex flex-col items-center gap-1">
                          <BedDouble size={18} className="text-blue-500" />
                          <span className="text-xs font-bold">{item.beds} Beds</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 border-x border-gray-100 dark:border-gray-800">
                          <Bath size={18} className="text-blue-500" />
                          <span className="text-xs font-bold">{item.baths} Baths</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Square size={18} className="text-blue-500" />
                          <span className="text-xs font-bold">{item.sqft} sqft</span>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16 gap-3">
              {[...Array(totalPages).keys()].map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    setCurrentPage(n + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-12 h-12 rounded-2xl font-bold transition-all ${currentPage === n + 1
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110"
                    : "bg-white dark:bg-gray-900 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  {n + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;