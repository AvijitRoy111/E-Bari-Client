import { Home, Key, ShieldCheck, TrendingUp, Handshake, Headset } from 'lucide-react';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';

const Services = () => {
    const serviceList = [
        {
            id: 1,
            title: "Property Buy & Sell",
            desc: "We help you find your dream home or sell your property at the best market price with zero hassle.",
            icon: <Home className="w-8 h-8 text-blue-600" />,
            bgColor: "bg-blue-50 dark:bg-blue-900/20"
        },
//         {
//             id: 2,
//             title: "Luxury Rentals",
//             desc: "Access an exclusive collection of high-end apartments and villas for short or long-term stays.",
//             icon: <Key className="w-8 h-8 text-orange-600" />,
//             bgColor: "bg-orange-50 dark:bg-orange-900/20"
//         },
//         {
//             id: 3,
//             title: "Property Management",
//             desc: "Our expert team handles maintenance, tenant screening, and legal paperwork for your peace of mind.",
//             icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
//             bgColor: "bg-green-50 dark:bg-green-900/20"
//         },
//         {
//             id: 4,
//             title: "Real Estate Investment",
//             desc: "Get data-driven insights and expert advice on where to invest for the highest future ROI.",
//             icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
//             bgColor: "bg-purple-50 dark:bg-purple-900/20"
//         },
//         {
//             id: 5,
//             title: "Legal Assistance",
//             desc: "Complete transparency and legal support for property documentation and registration process.",
//             icon: <Handshake className="w-8 h-8 text-red-600" />,
//             bgColor: "bg-red-50 dark:bg-red-900/20"
//         },
//         {
//             id: 6,
//             title: "24/7 Virtual Tour",
//             desc: "Experience properties from the comfort of your home with our high-quality 3D virtual tour technology.",
//             icon: <Headset className="w-8 h-8 text-indigo-600" />,
//             bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//              {/* Breadcrumb Section */}
//             <div className="max-w-7xl mx-auto px-6 pt-8">
//                  <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
//              </div>

//              {/* Hero Section of Services */}
//              <section className="max-w-7xl mx-auto px-6 py-16 text-center">
//                  <div className="max-w-3xl mx-auto mb-16">
//                      <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-3 block">
//                          Our Expertise
//                      </span>
//                      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
//                          Comprehensive Real Estate <span className="text-blue-600">Solutions</span>
//                      </h1>
//                      <p className="text-gray-500 dark:text-gray-400 text-lg">
//                          Whether you are looking to buy, sell, or manage properties, we provide world-class services tailored to your unique needs.
//                      </p>
//                  </div>

//                  {/* Services Grid */}
//                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                      {serviceList.map((service) => (
//                         <div
//                             key={service.id}
//                             className="group p-10 bg-gray-50 dark:bg-gray-800/50 rounded-[2.5rem] border border-transparent hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 text-left relative overflow-hidden"
//                         >
//                              {/* Decorative Circle on Hover */}
//                              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

//                              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                                  {service.icon}
//                              </div>

//                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
//                                  {service.title}
//                              </h3>

//                              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
//                                  {service.desc}
//                              </p>

//                              <button className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-gray-300 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
//                                  Learn More
//                                  <span className="group-hover:translate-x-2 transition-transform">→</span>
//                              </button>
//                          </div>
//                     ))}
//                  </div>

//                  {/* Bottom CTA Section */}
//                  <div className="mt-24 p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-blue-500/20">
//                      <div className="relative z-10 text-center">
//                          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//                              Ready to find your future?
//                          </h2>
//                          <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg opacity-90">
//                              Let our experts guide you through the journey of finding the perfect place to call home.
//                          </p>

//                          {/* Glassmorphism Button */}
//                          <button className="relative group overflow-hidden bg-white/20 backdrop-blur-lg border border-white/40 px-10 py-4 rounded-2xl font-extrabold text-lg text-white hover:bg-white/30 transition-all shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
//                              <span className="relative z-10 flex items-center justify-center gap-2">
//                                  Get Started Now
//                                  <span className="group-hover:translate-x-1 transition-transform">→</span>
//                              </span>
//                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform"></div>
//                          </button>
//                      </div>

//                      {/* Background Decorative Circles */}
//                      <div className="absolute top-0 right-0 opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none">
//                          <div className="w-[400px] h-[400px] border-[40px] border-white rounded-full"></div>
//                      </div>
//                      <div className="absolute bottom-0 left-0 opacity-10 translate-y-1/2 -translate-x-1/4 pointer-events-none">
//                          <div className="w-[300px] h-[300px] bg-white rounded-full blur-3xl"></div>
//                      </div>
//                  </div>
//              </section>
//          </div>
//     );
// };

// export default Services;