import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, BedDouble, Bath, Square, Heart, Calendar, 
  MessageSquare, ShieldCheck, ZoomIn, ZoomOut, ChevronLeft, 
  Wifi, Car, Tv, Wind, Coffee
} from 'lucide-react';
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import useProperties from '@/hooks/useProperties'; 

// --- Updated Skeleton Component (Matches the Real UI Layout) ---
const DetailsSkeleton = () => (
  <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-6 animate-pulse">
    {/* Navigation Skeleton */}
    <div className="flex justify-between mb-6">
      <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
      <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
    </div>

    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
      {/* Media Skeleton */}
      <div className="lg:col-span-7 space-y-4">
        <div className="h-[300px] sm:h-[400px] md:h-[550px] bg-gray-200 dark:bg-gray-800 rounded-[2.5rem]"></div>
        <div className="flex gap-3 overflow-hidden">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="min-w-[80px] md:min-w-[120px] h-16 md:h-24 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
          ))}
        </div>
      </div>

      {/* Pricing/Stats Card Skeleton */}
      <div className="lg:col-span-5">
        <div className="h-[500px] bg-gray-200 dark:bg-gray-800 rounded-[2.5rem]"></div>
      </div>

      {/* Full-width Content Skeleton (Description & Amenities) */}
      <div className="lg:col-span-12 grid md:grid-cols-12 gap-6 md:gap-10 mt-4">
        {/* Description Skeleton */}
        <div className="md:col-span-8 bg-gray-200/50 dark:bg-gray-800/30 p-10 rounded-[2rem] space-y-4">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>
        {/* Amenities Skeleton */}
        <div className="md:col-span-4 bg-gray-200/50 dark:bg-gray-800/30 p-10 rounded-[2rem] space-y-4">
          <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-10 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Details = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { properties, loading } = useProperties(); 
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!loading && properties?.length > 0 && _id) {
      const found = properties.find(p => String(p._id) === String(_id));
      if (found) setProperty(found);
    }
  }, [_id, properties, loading]);

  // Loading state with updated Skeleton
  if (loading) return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] pb-20">
      <DetailsSkeleton />
    </div>
  );

  if (!property) return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Property Not Found</h2>
      <button onClick={() => navigate('/all')} className="text-blue-600 flex items-center gap-2 font-semibold">
        <ChevronLeft size={20} /> Back to Listings
      </button>
    </div>
  );

  const displayLocation = typeof property.location === 'object' ? property.address : (property.location || property.address);

  const amenities = property.amenities || [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Car, label: "Parking" },
    { icon: Tv, label: "Smart TV" },
    { icon: Wind, label: "Air Condition" },
    { icon: Coffee, label: "Breakfast" },
    { icon: ShieldCheck, label: "Security" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-6">
        
        {/* Navigation & Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <button 
            onClick={() => navigate('/all')}
            className="flex items-center gap-2 w-fit px-4 py-2 bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all font-medium"
          >
            <ChevronLeft size={18} /> Back to Search
          </button>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Properties", href: "/all" }, { label: "Details", href: "#" }]} />
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* LEFT: MEDIA */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <div className="relative h-[300px] sm:h-[400px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-800 group">
              <img
                src={property.images?.[activeImage] || property.image}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: `scale(${zoom})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 right-4 md:bottom-8 md:left-8 flex gap-2">
                <button onClick={() => setZoom(z => Math.min(z + 0.2, 2))} className="p-2 md:p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-black transition-all"><ZoomIn size={20} /></button>
                <button onClick={() => setZoom(z => Math.max(z - 0.2, 1))} className="p-2 md:p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-black transition-all"><ZoomOut size={20} /></button>
              </div>
            </div>

            {/* Thumbnails */}
            {property.images?.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar px-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {setActiveImage(idx); setZoom(1);}}
                    className={`relative min-w-[80px] md:min-w-[120px] h-16 md:h-24 rounded-xl md:rounded-2xl overflow-hidden border-4 transition-all ${
                      activeImage === idx ? "border-blue-600 scale-105" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="thumb" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: PRICING CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 lg:sticky lg:top-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight">{property.title || property.property_title}</h1>
                  <div className="flex items-center gap-2 text-gray-500 mt-2"><MapPin size={18} className="text-blue-600" /><span>{displayLocation}</span></div>
                </div>
                <button onClick={() => setIsLiked(!isLiked)} className={`p-4 rounded-2xl ${isLiked ? "bg-red-50 text-red-500" : "bg-gray-50 text-gray-400"}`}>
                  <Heart size={22} fill={isLiked ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="mb-6 p-6 bg-blue-600 rounded-3xl text-white">
                <p className="text-xs font-bold uppercase mb-1">Selling Price</p>
                <span className="text-3xl md:text-4xl font-black">${(property.price || property.price_min)?.toLocaleString()}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: BedDouble, label: "Beds", value: property.bedrooms || property.beds || 0 },
                  { icon: Bath, label: "Baths", value: property.bathrooms || property.baths || 0 },
                  { icon: Square, label: "Sqft", value: property.area || property.sqft || 0 }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <stat.icon className="mx-auto mb-2 text-blue-600" size={20} />
                    <p className="text-[10px] text-gray-400 uppercase font-black">{stat.label}</p>
                    <p className="font-bold dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3"><Calendar size={20} /> Book Now</button>
                <button className="w-full py-4 border-2 border-gray-100 dark:border-gray-700 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-3"><MessageSquare size={20} /> Contact Agent</button>
              </div>
            </div>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="lg:col-span-12 grid md:grid-cols-12 gap-6 md:gap-10 mt-4">
            <div className="md:col-span-8 bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2rem] border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold dark:text-white mb-6">About Property</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-[1.8] text-lg">{property.description || "No description available."}</p>
            </div>

            <div className="md:col-span-4 bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg"><item.icon size={18} /></div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;