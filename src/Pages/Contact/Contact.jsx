import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Breadcrumb Section */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      </div>

       <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
           {/* Left Side: Contact Information */}
            <div className="space-y-8"> 
             <div>
               <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                 Let's talk about <br /> <span className="text-blue-600">your next home.</span>
               </h1>
               <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md">
                 Have questions about our properties or need expert advice? Our team is here to help you every step of the way.
               </p>
             </div> 

             <div className="grid gap-6">
               {/* Contact Cards */}
               <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                 <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4">
                   <Mail className="w-6 h-6 text-blue-600" />
                 </div>
                 <div>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Email us at</p>
                   <p className="text-lg font-semibold text-gray-900 dark:text-white">support@dreamhome.com</p>
                 </div>
               </div>

               <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                 <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl mr-4">
                   <Phone className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Call us</p>
                   <p className="text-lg font-semibold text-gray-900 dark:text-white">+880 1234-567890</p>
                 </div>
               </div>

               <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                 <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl mr-4">
                   <MapPin className="w-6 h-6 text-purple-600" />
                 </div>
                 <div>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Visit Office</p>
                   <p className="text-lg font-semibold text-gray-900 dark:text-white">Dhanmondi, Dhaka, Bangladesh</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Right Side: Contact Form */}
           <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-blue-500/5 border border-gray-100 dark:border-gray-700">
             <div className="mb-8 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send Message</h3>
            </div>
            
             <form className="space-y-5">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                   <input 
                     type="text" 
                     placeholder="Write your name !"
                     className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                   <input 
                     type="email" 
                     placeholder="Write your email address !"
                     className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                 <input 
                   type="text" 
                   placeholder="Inquiry about Villa"
                   className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
//                 <textarea 
//                   rows="4" 
//                   placeholder="Tell us how we can help..."
//                   className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 transition-all outline-none dark:text-white resize-none"
//                 ></textarea>
//               </div>

//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]">
//                 <Send className="w-5 h-5" />
//                 Send Message
//               </button>
//             </form>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;