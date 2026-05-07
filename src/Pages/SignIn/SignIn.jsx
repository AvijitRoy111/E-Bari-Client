import React, { useState, useContext } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/Providers/AuthProvider';
import axiosPublic from '@/api/axiosPublic';
import Swal from 'sweetalert2';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // --- Configuration for a sleek, small toaster ---
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await axiosPublic.post('/auth/login', { email, password });

      if (res.data.success) {
        // 1. Show success toaster
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        });

        // 2. Save data in Context and Local Storage
        login(email); 
        
        // 3. Redirect to home page
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 404) {
          // User not found: Show warning toaster and redirect to signup after a short delay
          Toast.fire({
            icon: 'warning',
            title: data.message || 'User not found'
          });
          setTimeout(() => navigate('/signup'), 2000);
        } else if (status === 401) {
          // Wrong password: Show error toaster
          Toast.fire({
            icon: 'error',
            title: data.message || 'Invalid password'
          });
        }
      } else {
        // Server or connection error
        Toast.fire({
          icon: 'error',
          title: 'Connection failed'
        });
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-sans bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-transparent dark:border-slate-800">
        
        {/* Left Side: Animated Illustration Section */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-600 dark:bg-indigo-700 p-12 text-white flex-col justify-center items-center relative overflow-hidden">
          <div className="z-10 text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Welcome Back!</h2>
            <p className="text-indigo-100 text-lg opacity-90">To keep connected with us please login with your personal info</p>
          </div>
          <div className="z-10 mt-10 animate-float">
            <img src="https://illustrations.popsy.co/white/remote-work.svg" alt="Sign In" className="w-72 h-72 drop-shadow-2xl" />
          </div>
        </div>

        {/* Right Side: Sign In Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-14 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Sign In</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-2">Enter your details to access your account</p>
          </div>

          <form className="space-y-5" onSubmit={handleSignIn}>
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-600 dark:text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <Mail size={20} />
                </span>
                <input 
                  name="email" 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 dark:text-white transition-all"
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
                  name="password" 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 dark:text-white transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transform hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-6">
              Sign In
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Footer Navigation Link */}
          <p className="text-center text-gray-500 dark:text-slate-400 mt-10">
            Don't have an account? <Link to="/signup" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </div>

      {/* Internal CSS for animation */}
      <style jsx>{` 
        @keyframes float { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-15px); } 
        } 
        .animate-float { animation: float 4s ease-in-out infinite; } 
      `}</style>
    </div>
  );
};

export default SignIn;