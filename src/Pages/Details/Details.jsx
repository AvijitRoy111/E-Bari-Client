import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPin, BedDouble, Bath, Square, Heart, Share2, 
  ZoomIn, ZoomOut, CheckCircle2, Calendar, MessageSquare 
} from 'lucide-react';
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";

// const Details = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [activeImage, setActiveImage] = useState(0);
//   const [zoom, setZoom] = useState(1);

//   //loaded data ......
//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await fetch('/fake.json'); 
//         const data = await response.json();
//         const found = data.find(p => p.id === parseInt(id)) || data[0];
//         setProperty(found);
//       } catch (error) {
//         console.error("Error loading property:", error);
//       }
//     };
//     fetchDetails();
//   }, [id]);

//   if (!property) return <div className="h-screen flex items-center justify-center">Loading...</div>;

//   const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
//   const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 1));

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20">
//       <div className="max-w-[1440px] mx-auto px-6 pt-8">
//         <Breadcrumb
//           items={[
//             { label: "Home", href: "/" },
//             { label: "Properties", href: "/all" },
//             { label: "Details", href: "#" }
//           ]}
//         />

//         <div className="mt-8 grid lg:grid-cols-12 gap-10">
          
//           {/* LEFT COLUMN: IMAGES */}
//           <div className="lg:col-span-7 space-y-6">
//             {/* Main Image with Zoom */}
//             <div className="relative h-[500px] rounded-3xl overflow-hidden bg-black group">
//               <img
//                 src={property.images?.[activeImage]}
//                 alt={property.title}
//                 className="w-full h-full object-cover transition-transform duration-300"
//                 style={{ transform: `scale(${zoom})` }}
//               />
              
//               {/* Zoom Controls */}
//               <div className="absolute bottom-6 right-6 flex gap-2">
//                 <button onClick={handleZoomOut} className="p-3 bg-white/90 dark:bg-gray-800 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition-all">
//                   <ZoomOut size={20} />
//                 </button>
//                 <button onClick={handleZoomIn} className="p-3 bg-white/90 dark:bg-gray-800 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition-all">
//                   <ZoomIn size={20} />
//                 </button>
//               </div>

//               <div className="absolute top-6 left-6">
//                 <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
//                   {property.category}
//                 </span>
//               </div>
//             </div>

//             {/* Thumbnails (4 Images) */}
//             <div className="grid grid-cols-4 gap-4">
//               {property.images?.slice(0, 4).map((img, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {setActiveImage(idx); setZoom(1);}}
//                   className={`relative h-24 md:h-32 rounded-2xl overflow-hidden border-4 transition-all ${
//                     activeImage === idx ? "border-blue-600 scale-95" : "border-transparent opacity-70 hover:opacity-100"
//                   }`}
//                 >
//                   <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
//                 </button>
//               ))}
//             </div>

//             {/* Description Section */}
//             <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
//               <h2 className="text-2xl font-bold mb-4 dark:text-white">About this property</h2>
//               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                 {property.description || "This luxurious property offers a perfect blend of modern architecture and comfortable living. Located in a prime area, it features state-of-the-art facilities, spacious rooms, and breathtaking views."}
//               </p>
              
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
//                 {['Smart Home', 'Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden'].map((feat) => (
//                   <div key={feat} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
//                     <CheckCircle2 size={18} className="text-green-500" />
//                     <span className="text-sm font-medium">{feat}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: DETAILS & BOOKING */}
//           <div className="lg:col-span-5 space-y-6">
//             <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 sticky top-8">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
//                     {property.title}
//                   </h1>
//                   <div className="flex items-center gap-2 text-gray-500">
//                     <MapPin size={18} className="text-blue-600" />
//                     <span className="text-sm">{property.address}</span>
//                   </div>
//                 </div>
//                 <button className="p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:text-red-500 transition-colors">
//                   <Heart size={24} />
//                 </button>
//               </div>

//               {/* Price Tag */}
//               <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
//                 <span className="text-gray-500 dark:text-gray-400 block text-sm font-bold uppercase mb-1">Total Price</span>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-4xl font-black text-blue-600">${property.price_min?.toLocaleString()}</span>
//                   {property.price_max > property.price_min && (
//                     <span className="text-gray-400 font-medium"> - ${property.price_max?.toLocaleString()}</span>
//                   )}
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-4 mb-8">
//                 <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
//                   <BedDouble className="mx-auto mb-2 text-blue-600" />
//                   <p className="text-xs text-gray-400 uppercase font-bold">Beds</p>
//                   <p className="font-bold dark:text-white">{property.beds}</p>
//                 </div>
//                 <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
//                   <Bath className="mx-auto mb-2 text-blue-600" />
//                   <p className="text-xs text-gray-400 uppercase font-bold">Baths</p>
//                   <p className="font-bold dark:text-white">{property.baths}</p>
//                 </div>
//                 <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
//                   <Square className="mx-auto mb-2 text-blue-600" />
//                   <p className="text-xs text-gray-400 uppercase font-bold">Sqft</p>
//                   <p className="font-bold dark:text-white">{property.sqft}</p>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="space-y-3">
//                 <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center gap-2">
//                   <Calendar size={20} />
//                   Book a Visit
//                 </button>
//                 <button className="w-full py-4 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
//                   <MessageSquare size={20} />
//                   Contact Agent
//                 </button>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">JS</div>
//                   <div>
//                     <p className="text-sm font-bold dark:text-white">John Smith</p>
//                     <p className="text-xs text-gray-400">Property Owner</p>
//                   </div>
//                 </div>
//                 <button className="text-gray-400 hover:text-blue-600 transition-colors">
//                   <Share2 size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;