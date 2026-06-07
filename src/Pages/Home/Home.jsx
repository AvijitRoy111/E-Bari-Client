import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ArrowRight,
  Star,
  Quote,
  Home as HomeIcon,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner from "../../assets/images/banner/banner.jpg";

export const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/fake.json");
        const data = await response.json();

        setProperties(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter data based on categories
  const villas = properties.filter(
    (p) => p.category?.toLowerCase() === "villa"
  );

  const apartments = properties.filter(
    (p) => p.category?.toLowerCase() === "apartment"
  );

  // Reusable Property Carousel Component
  const PropertyCarousel = ({ title, items }) => {
    // Generate unique selector
    const uniqueSelector = title.replace(/\s+/g, "-").toLowerCase();

     return (
       <div className="mt-16 group relative">
         {/* Header */}
         <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 px-2 gap-4">
           <div>
             <h2 className="text-3xl font-black text-gray-900 dark:text-white">
               {title}
             </h2>

             <div className="h-1.5 w-20 bg-blue-600 rounded-full mt-2"></div>
           </div>

           <div className="flex items-center gap-4">
             {/* Navigation Buttons */}
             <div className="flex gap-2">
               <button
                 className={`prev-${uniqueSelector} p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-blue-600 hover:text-white dark:text-white transition-all cursor-pointer`}
               >
                 <ChevronLeft size={20} />
               </button>

               <button
                 className={`next-${uniqueSelector} p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-blue-600 hover:text-white dark:text-white transition-all cursor-pointer`}
               >
                 <ChevronRight size={20} />
               </button>
             </div>

             <Link
               to="/all-properties"
               className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all shrink-0"
             >
               View All <ArrowRight size={18} />
             </Link>
           </div>
         </div>

         {/* Swiper */}
         <Swiper
           modules={[Navigation, Autoplay]}
           spaceBetween={30}
           slidesPerView={1}
           autoplay={{
             delay: 4000,
             disableOnInteraction: false,
           }}
           navigation={{
             nextEl: `.next-${uniqueSelector}`,
             prevEl: `.prev-${uniqueSelector}`,
           }}
           breakpoints={{
             640: {
               slidesPerView: 2,
             },
             1024: {
               slidesPerView: 3,
             },
           }}
           className="pb-10"
         >
           {items.map((item, idx) => (
             <SwiperSlide key={item.id || idx}>
               <div className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 group/card h-full">
                 <div className="relative h-64 overflow-hidden">
                   <img
                     src={
                       item?.images?.[0] ||
                       "https://via.placeholder.com/400x300"
                     }
                     alt={item?.title || "Property"}
                     className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                   />

                   <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-blue-600 uppercase shadow-sm">
                     {item?.category}
                   </div>
                 </div>

                 <div className="p-6">
                   <h3 className="text-xl font-bold dark:text-white line-clamp-1 mb-2">
                     {item?.title}
                   </h3>

                   <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                     <MapPin size={14} />

                     <span className="line-clamp-1">
                       {item?.address}
                     </span>
                   </div>

                   <div className="flex justify-between items-center">
                     <span className="text-2xl font-black text-blue-600">
                       $
                       {item?.price_min
                         ? item.price_min.toLocaleString()
                         : item?.price?.toLocaleString() || "N/A"}
                     </span>

                     <Link
                       to={`/details/${item?.id}`}
                       className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                     >
                       <ArrowRight size={20} />
                     </Link>
                   </div>
                 </div>
               </div>
             </SwiperSlide>
           ))}
         </Swiper>
       </div>
     );
   };

   // PropTypes Fix
   PropertyCarousel.propTypes = {
     title: PropTypes.string.isRequired,

     items: PropTypes.arrayOf(
       PropTypes.shape({
         id: PropTypes.oneOfType([
           PropTypes.string,
           PropTypes.number,
         ]),

         title: PropTypes.string,

         address: PropTypes.string,

         category: PropTypes.string,

         images: PropTypes.arrayOf(
           PropTypes.string
         ),

         price: PropTypes.number,

         price_min: PropTypes.number,
       })
     ).isRequired,
   };

   return (
     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

       {/* Hero Section */}
       <div className="relative w-full h-[600px] overflow-hidden">
         <div
           className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
           style={{
             backgroundImage: `url(${banner})`,
           }}
         ></div>

         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

         <div className="relative z-10 max-w-[1440px] mx-auto h-full flex flex-col justify-center px-6 md:px-12">
           <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold w-fit mb-6">
             Real Estate Agency
           </span>

           <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
             Find Your Perfect <br />

             <span className="text-blue-500">
               Future Home
             </span>
           </h1>

           <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
             Discover the best properties with trusted and hassle-free service.
             Over 10,000+ people already found their dream space with E-Bari.
           </p>

           <div className="flex flex-wrap gap-4">
             <Link
               to="/all-properties"
               className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30 transition-all flex items-center gap-2"
             >
               Explore Properties <ArrowRight size={20} />
             </Link>

             <Link
               to="/contact"
               className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-2xl font-bold text-lg transition-all"
             >
               Contact Us
             </Link>
           </div>
         </div>
       </div>

       {/* Announcement */}
       <div className="bg-blue-600 dark:bg-blue-700 py-3 overflow-hidden whitespace-nowrap">
         <div className="inline-block animate-marquee text-white font-bold text-sm md:text-base uppercase tracking-widest">
           Special Offers Available! Get up to 10% discount on your first
           booking! • Luxury Villas starting from $200k • New Apartments in
           Dhaka • Limited Time Only!
         </div>
       </div>

       <div className="max-w-[1440px] mx-auto px-6 pb-20">

         {/* Property Sections */}
         {loading ? (
           <div className="py-20 text-center dark:text-white font-medium text-lg">
             Loading stunning properties...
           </div>
         ) : (
           <>
             <PropertyCarousel
               title="Featured Properties"
               items={properties}
             />

            {villas.length > 0 && (
               <PropertyCarousel
                 title="Luxury Villas"
                 items={villas}
               />
             )}

             {apartments.length > 0 && (
               <PropertyCarousel
                 title="Modern Apartments"
                 items={apartments}
               />
             )}
           </>
         )}

         {/* Why Choose Us */}
         <div className="mt-32 grid md:grid-cols-3 gap-8">
           {[
             {
               icon: <HomeIcon size={32} />,
               title: "Wide Range",
               desc: "Choose from thousands of properties across the country.",
             },

             {
              icon: <Star size={32} />,
               title: "Top Rated",
               desc: "We are the highest-rated real estate platform in the region.",
             },

             {
               icon: <Quote size={32} />,
               title: "Trusted Agency",
               desc: "Verified owners and hassle-free documentation process.",
             },
           ].map((box, i) => (
             <div
               key={i}
               className="p-10 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 text-center hover:translate-y-[-10px] transition-all duration-500 shadow-sm"
             >
               <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 {box.icon}
               </div>

               <h3 className="text-xl font-black dark:text-white mb-4">
                 {box.title}
               </h3>

               <p className="text-gray-500 dark:text-gray-400">
                 {box.desc}
               </p>
             </div>
           ))}
         </div>

         {/* Testimonial */}
//         <div className="mt-32 bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
//           <Quote
//             className="absolute top-10 left-10 text-white/10"
//             size={120}
//           />

//           <h2 className="text-4xl font-black text-white mb-12 relative z-10">
//             What Our Clients Say
//           </h2>

//           <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             className="pb-12 text-white"
//           >
//             {[1, 2, 3].map((t) => (
//               <SwiperSlide key={t}>
//                 <div className="max-w-3xl mx-auto">
//                   <p className="text-xl md:text-2xl text-blue-50 italic mb-8">
//                     Finding a home was never this easy. E-Bari provided me
//                     with multiple options and the agent support was
//                     outstanding. Highly recommended!
//                   </p>

//                   <div className="flex items-center justify-center gap-4">
//                     <div className="w-14 h-14 rounded-full bg-white/20"></div>

//                     <div className="text-left">
//                       <h4 className="font-bold text-white">
//                         Rahat Chowdhury
//                       </h4>

//                       <p className="text-blue-200 text-sm">
//                         Property Buyer
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Marquee Animation */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//           @keyframes marquee {
//             0% {
//               transform: translateX(100%);
//             }

//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .animate-marquee {
//             display: inline-block;
//             animation: marquee 25s linear infinite;
//           }
//         `,
//         }}
//       />
//     </div>
//   );
// };