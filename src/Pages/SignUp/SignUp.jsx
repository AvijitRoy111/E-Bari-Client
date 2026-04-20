import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-sans bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
       <div className="max-w-5xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-transparent dark:border-slate-800">
        
         {/* Left Side: Animated Image Section */}
         <div className="hidden md:flex md:w-1/2 bg-sky-600 dark:bg-sky-700 p-12 text-white flex-col justify-center items-center relative overflow-hidden">
           <div className="z-10 text-center">
             <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Join Us Today!</h2>
             <p className="text-sky-100 text-lg opacity-90">Create your account and unlock a world of new possibilities.</p>
           </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse blur-xl"></div>
             <div className="absolute bottom-10 right-20 w-48 h-48 bg-white rounded-full animate-bounce blur-2xl"></div>
           </div>
          
           {/* Reliable Illustration - High Quality SVG */}
           <div className="z-10 mt-10 animate-float flex justify-center items-center">
             <img 
               src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" 
              alt="Laptop Illustration" 
              className="w-40 h-40 object-contain drop-shadow-2xl"
            />
            {/* Alt alternative if the above doesn't show: https://undraw.co/ standard SVGs */}
            <img 
              src="https://illustrations.popsy.co/white/creative-work.svg" 
              alt="Sign Up Illustration" 
              className="w-80 h-80 absolute opacity-80"
              onError={(e) => { e.target.src = 'https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png' }}
            />
          </div>
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col justify-center">
           <div className="mb-8 text-center md:text-left">
             <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Create Account</h2>
             <p className="text-gray-500 dark:text-slate-400 mt-2">Fill in the details below to get started</p>
           </div>

           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1">
               <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Full Name</label>
               <div className="relative group">
                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                   <User size={19} />
                 </span>
                 <input 
                   type="text" 
                   placeholder="John Doe"
                   className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-gray-800 dark:text-white outline-none"
                />
              </div>
            </div>

             <div className="space-y-1">
               <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Email Address</label>
               <div className="relative group">
                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                   <Mail size={19} />
                 </span>
                 <input 
                   type="email" 
                   placeholder="name@company.com"
                   className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-gray-800 dark:text-white outline-none"
                 />
               </div>
             </div>

             <div className="space-y-1">
               <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Phone Number</label>
               <div className="relative group">
                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                   <Phone size={19} />
                 </span>
                 <input 
                  type="tel" 
                  placeholder="+880 1XXX-XXXXXX"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-gray-800 dark:text-white outline-none"
                />
              </div>
            </div>

             <div className="space-y-1">
               <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Password</label>
               <div className="relative group">
                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                   <Lock size={19} />
                 </span>
                 <input 
                   type={showPassword ? "text" : "password"} 
                   placeholder="••••••••"
                   className="w-full pl-10 pr-12 py-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-gray-800 dark:text-white outline-none"
                 />
                 <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-sky-600"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

             <div className="space-y-1">
               <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Confirm Password</label>
               <div className="relative group">
                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                   <Lock size={19} />
                 </span>
                 <input 
                   type={showConfirmPassword ? "text" : "password"} 
                   placeholder="••••••••"
                   className="w-full pl-10 pr-12 py-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-gray-800 dark:text-white outline-none"
                 />
                 <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-sky-600"
                 >
                   {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                 </button>
               </div>
             </div>

             <div className="flex items-center justify-between text-sm pt-3">
               <label className="flex items-center cursor-pointer text-gray-500 dark:text-slate-400 hover:text-gray-700 select-none">
                 <input type="checkbox" className="mr-2 h-4 w-4 accent-sky-600 rounded border-gray-300 dark:border-slate-700 dark:bg-slate-800 cursor-pointer" />
                 I agree to the <a href="#" className="text-sky-600 dark:text-sky-400 font-medium hover:underline ml-1">Terms & Conditions</a>
               </label>
             </div>

             <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-200 dark:shadow-none transform hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-6">
               Create Account
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
           </form>

           <p className="text-center text-gray-500 dark:text-slate-400 mt-8">
             Already have an account? 
//             <Link to="/signin" className="text-sky-600 dark:text-sky-400 font-bold hover:underline ml-1">
//               Sign In
//             </Link> 
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SignUp;