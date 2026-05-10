import React, { useState } from 'react';
import { 
    Mail, Phone, MapPin, Send, MessageSquare, 
    CheckCircle, Clock, Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react';
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import axiosPublic from '@/api/axiosPublic';

const Contact = () => {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Input Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form Submit Handler
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         try {
//             // Ensure this endpoint matches your Backend Route precisely
//             const response = await axiosPublic.post('/contacts/contact', formData);
//             if (response.status === 200 || response.status === 201) {
//                 setShowModal(true); 
//             }
//         } catch (error) {
//             console.error("Submission Error:", error);
//             alert("Connection refused. Please ensure the backend server is running on port 5000.");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // Modal Close and Reset Form
//     const handleCloseModal = () => {
//         setShowModal(false);
//         setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            
//             {/* Themed Success Modal */}
//             {showModal && (
//                 <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 backdrop-blur-md px-4">
//                     <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-2xl max-w-sm w-full text-center border border-gray-100 dark:border-gray-700 transform transition-all animate-in zoom-in-95 duration-300">
//                         <div className="flex justify-center mb-6">
//                             <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full">
//                                 <CheckCircle className="w-16 h-16 text-blue-600 shadow-sm" />
//                             </div>
//                         </div>
//                         <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Thank You!</h3>
//                         <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
//                             Your message has been received. Our property experts will reach out to you within 24 hours.
//                         </p>
//                         <button 
//                             onClick={handleCloseModal}
//                             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/25 active:scale-95"
//                         >
//                             Back to Home
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Breadcrumb Navigation */}
//             <div className="max-w-7xl mx-auto px-6 pt-10">
//                 <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
//             </div>

//             <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    
//                     {/* Left Side: Professional Information */}
//                     <div className="space-y-12">
//                         <div>
//                             <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
//                                 Let's build <br /> <span className="text-blue-600">your dream.</span>
//                             </h1>
//                             <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md leading-relaxed">
//                                 Whether you're looking for a luxury villa or a modern apartment, our team is ready to guide you.
//                             </p>
//                         </div>

//                         {/* Contact Channels */}
//                         <div className="space-y-6">
//                             <div className="flex items-center gap-5 group">
//                                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-blue-500 transition-all">
//                                     <Mail className="w-6 h-6 text-blue-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Email Us</p>
//                                     <p className="text-lg font-semibold text-gray-900 dark:text-white">hello@dreamhome.com</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-5 group">
//                                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-green-500 transition-all">
//                                     <Phone className="w-6 h-6 text-green-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Call Anytime</p>
//                                     <p className="text-lg font-semibold text-gray-900 dark:text-white">+880 1234-567890</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-5 group">
//                                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-purple-500 transition-all">
//                                     <Clock className="w-6 h-6 text-purple-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Office Hours</p>
//                                     <p className="text-lg font-semibold text-gray-900 dark:text-white">Mon - Fri: 9 AM - 6 PM</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Social Connect */}
//                         <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
//                             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Follow our journey</p>
//                             <div className="flex gap-4">
//                                 {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
//                                     <a key={idx} href="#" className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
//                                         <Icon className="w-5 h-5" />
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Side: Professional Contact Form */}
//                     <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-500/5 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
//                         <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
//                             <MessageSquare className="w-32 h-32 text-blue-600" />
//                         </div>

//                         <div className="mb-10">
//                             <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
//                             <p className="text-gray-500 dark:text-gray-400">Fill out the form and we'll reply shortly.</p>
//                         </div>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
//                                     <input
//                                         required
//                                         type="text"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         placeholder="John Doe"
//                                         className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
//                                     <input
//                                         required
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="name@example.com"
//                                         className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Phone Number</label>
//                                     <input
//                                         required
//                                         type="tel"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         placeholder="+880 00000"
//                                         className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
//                                     <input
//                                         required
//                                         type="text"
//                                         name="subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         placeholder="Property Inquiry"
//                                         className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
//                                 <textarea
//                                     required
//                                     name="message"
//                                     rows="4"
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                     placeholder="Tell us about your requirements..."
//                                     className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white resize-none"
//                                 ></textarea>
//                             </div>

//                             <button
//                                 disabled={isSubmitting}
//                                 type="submit"
//                                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
//                             >
//                                 {isSubmitting ? (
//                                     <span className="animate-pulse">Processing...</span>
//                                 ) : (
//                                     <>
//                                         <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                                         Send Message
//                                     </>
//                                 )}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Contact;