import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, BedDouble, Bath, Square, Heart, Calendar, 
  MessageSquare, ShieldCheck, ZoomIn, ZoomOut, ChevronLeft, 
  Wifi, Car, Tv, Wind, Coffee, X, CheckCircle2
} from 'lucide-react';
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import useProperties from '@/hooks/useProperties'; 
import axiosPublic from '@/api/axiosPublic';

// --- Skeleton Loader Component ---
const DetailsSkeleton = () => (
  <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-6 animate-pulse">
    <div className="flex justify-between mb-6">
      <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
      <div className="h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
    </div>
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
      <div className="lg:col-span-7 space-y-4">
        <div className="h-[300px] sm:h-[400px] md:h-[550px] bg-gray-200 dark:bg-gray-800 rounded-[2.5rem]"></div>
       </div>
       <div className="lg:col-span-5">
         <div className="h-[500px] bg-gray-200 dark:bg-gray-800 rounded-[2.5rem]"></div>
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

  // --- Booking & Modal States ---
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Rent', 
  });

  // --- Filter the specific property by ID ---
  useEffect(() => {
    if (!loading && properties?.length > 0 && _id) {
      const found = properties.find(p => String(p._id) === String(_id));
      if (found) setProperty(found);
    }
  }, [_id, properties, loading]);

  // --- Handle Booking Submission ---
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Merging Form Data with Property Details for Database
    const bookingData = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      bookingPurpose: formData.purpose,
      propertyId: property._id,
      propertyTitle: property.title || property.property_title,
      price: property.price || property.price_min,
      propertyThumbnail: property.images?.[0] || property.image,
      specifications: {
        beds: property.bedrooms || property.beds || 0,
        baths: property.bathrooms || property.baths || 0,
        area: property.area || property.sqft || 0
      },
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    try {
      // POST request to backend via axiosPublic
      const response = await axiosPublic.post('/bookings/booking', bookingData);

      if (response.data.success) {
        setIsBookingModalOpen(false);
        setIsSuccessModalOpen(true);
        // Reset form
        setFormData({ name: '', email: '', phone: '', purpose: 'Rent' });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to process booking. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] pb-20"><DetailsSkeleton /></div>;

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
    { icon: Wifi, label: "Free WiFi" }, { icon: Car, label: "Parking" },
    { icon: Tv, label: "Smart TV" }, { icon: Wind, label: "Air Condition" },
    { icon: Coffee, label: "Breakfast" }, { icon: ShieldCheck, label: "Security" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] pb-20 text-left">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-6">
        
         {/* Navigation Header */}
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
          
           {/* Gallery Section */}
           <div className="lg:col-span-7 space-y-4 md:space-y-6">
             <div className="relative h-[300px] sm:h-[400px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-800">
               <img
                 src={property.images?.[activeImage] || property.image}
                 alt={property.title}
                 className="w-full h-full object-cover transition-transform duration-500"
                 style={{ transform: `scale(${zoom})` }}
               />
               <div className="absolute bottom-4 right-4 flex gap-2">
                 <button onClick={() => setZoom(z => Math.min(z + 0.2, 2))} className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-black transition-all"><ZoomIn size={20} /></button>
                 <button onClick={() => setZoom(z => Math.max(z - 0.2, 1))} className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-black transition-all"><ZoomOut size={20} /></button>
               </div>
             </div>

             {property.images?.length > 1 && (
               <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar px-1">
                 {property.images.map((img, idx) => (
                   <button key={idx} onClick={() => {setActiveImage(idx); setZoom(1);}} className={`relative min-w-[80px] md:min-w-[120px] h-16 md:h-24 rounded-2xl overflow-hidden border-4 transition-all ${activeImage === idx ? "border-blue-600 scale-105" : "border-transparent opacity-60"}`}>
                     <img src={img} className="w-full h-full object-cover" alt="thumb" />
                   </button>
                 ))}
               </div>
             )}
           </div>

           {/* Pricing & Booking Card */}
           <div className="lg:col-span-5">
             <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 lg:sticky lg:top-8">
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

//               <div className="space-y-3">
//                 <button 
//                   onClick={() => setIsBookingModalOpen(true)}
//                   className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-blue-100 dark:shadow-none"
//                 >
//                   <Calendar size={20} /> Book Now
//                 </button>
//                 <Link to="/contact">
//                   <button className="w-full py-4 border-2 border-gray-100 dark:border-gray-700 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-3">
//                     <MessageSquare size={20} /> Contact Agent
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Description & Amenities */}
//           <div className="lg:col-span-12 grid md:grid-cols-12 gap-6 md:gap-10 mt-4">
//             <div className="md:col-span-8 bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2rem] border border-gray-100 dark:border-gray-800">
//               <h2 className="text-2xl font-bold dark:text-white mb-6">About Property</h2>
//               <p className="text-gray-600 dark:text-gray-400 leading-[1.8] text-lg">{property.description || "No description available."}</p>
//             </div>

//             <div className="md:col-span-4 bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800">
//               <h3 className="text-xl font-bold mb-6 dark:text-white">Amenities</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {amenities.map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
//                     <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg"><item.icon size={18} /></div>
//                     <span className="text-sm font-medium">{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Dynamic Booking Modal --- */}
//       {isBookingModalOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
//           <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in duration-300 max-h-[95vh] overflow-y-auto no-scrollbar">
            
//             <button onClick={() => setIsBookingModalOpen(false)} className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors z-10">
//               <X size={20} />
//             </button>

//             <div className="grid md:grid-cols-5 h-full">
//               {/* Modal Sidebar: Summary */}
//               <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800/50 p-8 border-r border-gray-100 dark:border-gray-800">
//                 <img src={property.images?.[0] || property.image} className="w-full h-32 object-cover rounded-2xl mb-4 shadow-sm" alt="property" />
//                 <h3 className="font-black text-xl dark:text-white mb-1 leading-tight">{property.title}</h3>
//                 <p className="text-gray-500 text-sm mb-6 line-clamp-1">{displayLocation}</p>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
//                     <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"><BedDouble size={18} className="text-blue-600"/></div>
//                     <span className="text-sm font-bold">{property.bedrooms || property.beds} Beds</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
//                     <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"><Bath size={18} className="text-blue-600"/></div>
//                     <span className="text-sm font-bold">{property.bathrooms || property.baths} Baths</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
//                     <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"><Square size={18} className="text-blue-600"/></div>
//                     <span className="text-sm font-bold">{property.area || property.sqft} Sqft</span>
//                   </div>
//                 </div>

//                 <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
//                   <p className="text-xs font-black uppercase text-gray-400 mb-1">Price</p>
//                   <p className="text-2xl font-black text-blue-600">${(property.price || property.price_min)?.toLocaleString()}</p>
//                 </div>
//               </div>

//               {/* Modal Body: Form */}
//               <div className="md:col-span-3 p-8">
//                 <h2 className="text-2xl font-black dark:text-white mb-6">Quick Booking</h2>
//                 <form onSubmit={handleBookingSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-xs font-black uppercase text-gray-400 mb-2 ml-1">Full Name</label>
//                     <input required type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none dark:text-white"
//                       value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-black uppercase text-gray-400 mb-2 ml-1">Email</label>
//                     <input required type="email" placeholder="email@example.com" className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none dark:text-white"
//                       value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-black uppercase text-gray-400 mb-2 ml-1">Phone</label>
//                     <input required type="tel" placeholder="+1..." className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none dark:text-white"
//                       value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-black uppercase text-gray-400 mb-2 ml-1">Purpose</label>
//                     <div className="grid grid-cols-2 gap-3">
//                       {['Rent', 'Buy'].map((opt) => (
//                         <button key={opt} type="button" onClick={() => setFormData({...formData, purpose: opt})}
//                           className={`relative py-4 rounded-2xl font-bold transition-all border-2 flex items-center justify-center gap-2 ${formData.purpose === opt ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600" : "border-gray-100 dark:border-gray-800 text-gray-400"}`}>
//                           {formData.purpose === opt && <CheckCircle2 size={18} />}
//                           {opt}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <button disabled={isSubmitting} type="submit" className="w-full mt-4 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-50">
//                     {isSubmitting ? "Processing..." : "Confirm Booking"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* --- Success Modal --- */}
//       {isSuccessModalOpen && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all">
//           <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-[3rem] p-10 text-center shadow-2xl animate-in zoom-in duration-300 border border-white/10">
//             <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-200 dark:shadow-none">
//               <ShieldCheck size={48} strokeWidth={2.5} />
//             </div>
//             <h2 className="text-2xl font-black mb-2 dark:text-white">Request Sent!</h2>
//             <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">
//               Your request for <span className="text-blue-600 font-bold">{property.title}</span> has been received. We will contact you shortly!
//             </p>
//             <button onClick={() => setIsSuccessModalOpen(false)} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
//               Great, Thanks!
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Details;