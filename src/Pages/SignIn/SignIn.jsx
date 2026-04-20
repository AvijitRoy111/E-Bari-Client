import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Parent container with dark mode background
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-sans bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Main Card */}
      <div className="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-transparent dark:border-slate-800">
        
        {/* Left Side: Animation/Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-600 dark:bg-indigo-700 p-12 text-white flex-col justify-center items-center relative overflow-hidden">
          <div className="z-10 text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Welcome Back!</h2>
            <p className="text-indigo-100 text-lg opacity-90">To keep connected with us please login with your personal info</p>
          </div>
          
          {/* Decorative Animated Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full animate-bounce blur-2xl"></div>
          </div>
          
          {/* Animated Illustration */}
          <div className="z-10 mt-10 animate-float">
            <img 
              src="https://illustrations.popsy.co/white/remote-work.svg" 
              alt="Sign In Illustration" 
              className="w-72 h-72 drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Sign In Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Sign In</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-2">Enter your details to access your account</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Full Name</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <User size={20} />
                </span>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-gray-800 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <Mail size={20} />
                </span>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-gray-800 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Password</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <Lock size={20} />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-gray-800 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Extra Options */}
            <div className="flex items-center justify-between text-sm pt-2">
              <label className="flex items-center cursor-pointer text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200">
                <input type="checkbox" className="mr-2 h-4 w-4 accent-indigo-600 rounded border-gray-300 dark:border-slate-700 dark:bg-slate-800" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transform hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-6">
              Sign In
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Bottom Link */}
          <p className="text-center text-gray-500 dark:text-slate-400 mt-10">
            Don't have an account? <Link to="/signup"><a href="signup" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Create Account</a></Link>
          </p>
        </div>
      </div>

      {/* Internal CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SignIn;