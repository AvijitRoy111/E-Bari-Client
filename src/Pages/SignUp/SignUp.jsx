import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { 
  User, Mail, Phone, Image as ImageIcon, Lock, 
  Eye, EyeOff, Loader2
} from "lucide-react";
import axiosPublic from "@/api/axiosPublic";
import { AuthContext } from "@/Providers/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please agree to the terms and conditions!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        image: formData.image,
        password: formData.password
      };

      const res = await axiosPublic.post("/auth/create-user", payload);

      if (res.data.success) {
        toast.success("Welcome to E-Bari! Account created.");
        await login(formData.email);
        navigate("/");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4 py-12">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border dark:border-gray-800">
        
        {/* --- বাম দিকের সেকশন (ILLUSTRATION) --- */}
        <div className="md:w-5/12 bg-green-700 p-10 text-white flex flex-col items-center justify-between">
          <div className="text-center w-full">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md mx-auto transform rotate-12">
              <span className="text-3xl font-extrabold italic -rotate-12">B</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">E-Bari</h2>
            <p className="text-green-100/80 text-sm mt-2">Find your comfort, find your home.</p>
          </div>

          {/* এখানে একটি সুন্দর SVG ইলাস্ট্রেশন যোগ করা হয়েছে */}
          <div className="relative w-full flex justify-center py-10">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 relative z-10 animate-pulse-slow">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,70.1,-59,78.8,-46.3C87.4,-33.5,92.6,-18.2,91.3,-3.3C90,11.5,82.3,26,72.6,38.8C62.9,51.6,51.2,62.7,37.6,71.2C24,79.8,8.5,85.8,-6.2,85.8C-20.9,85.8,-34.8,79.8,-47.5,71C-60.2,62.3,-71.7,50.7,-78.9,37C-86,23.3,-88.9,7.5,-86.6,-7.7C-84.3,-22.9,-76.8,-37.6,-66.2,-49.2C-55.6,-60.8,-41.9,-69.3,-28.4,-76.3C-14.9,-83.4,-1.6,-88.9,13.2,-87.3C28,-85.7,44.7,-76.4Z" transform="translate(100 100)" opacity="0.1" />
              <rect x="60" y="80" width="80" height="60" rx="4" fill="white" />
              <path d="M60 80L100 50L140 80H60Z" fill="#A7F3D0" />
              <rect x="92" y="115" width="16" height="25" fill="#065F46" />
              <circle cx="140" cy="50" r="15" fill="#FDE047" opacity="0.8" />
            </svg>
          </div>

          <div className="text-center">
             <p className="text-xs text-green-200 font-medium tracking-widest uppercase">Premium Real Estate Solution</p>
          </div>
        </div>

        {/* --- ডান দিকের সেকশন (FORM) --- */}
        <div className="md:w-7/12 p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Create Account</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">Join our community and explore thousands of properties.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <User className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-600 transition-colors w-5 h-5" />
                <input 
                  name="name" 
                  placeholder="Full Name" 
                  required
                  onChange={handleChange} 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all dark:text-white"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-600 transition-colors w-5 h-5" />
                <input 
                  type="email"
                  name="email" 
                  placeholder="Email Address" 
                  required
                  onChange={handleChange} 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all dark:text-white"
                />
              </div>

              <div className="relative group">
                <Phone className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-600 transition-colors w-5 h-5" />
                <input 
                  name="phone" 
                  placeholder="Phone Number" 
                  required
                  onChange={handleChange} 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all dark:text-white"
                />
              </div>

              <div className="relative group">
                <ImageIcon className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-600 transition-colors w-5 h-5" />
                <input 
                  name="image" 
                  placeholder="Profile Image URL" 
                  onChange={handleChange} 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all dark:text-white"
                />
              </div>
            </div>

            <div className="relative group">
              <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-600 transition-colors w-5 h-5" />
              <input 
                type={showPass ? "text" : "password"}
                name="password" 
                placeholder="Create Password" 
                required
                onChange={handleChange} 
                className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all dark:text-white"
              />
              <button 
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-400 hover:text-green-600 transition-colors"
              >
                {showPass ? <EyeOff size={20}/> : <Eye size={20}/>}
              </button>
            </div>

            <div className="relative group">
              <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-600 transition-colors w-5 h-5" />
              <input 
                type="password"
                name="confirmPassword" 
                placeholder="Confirm Password" 
                required
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all dark:text-white"
              />
            </div>

            <div className="flex items-center gap-2 py-1">
              <input 
                type="checkbox" 
                id="agreed"
                className="w-4 h-4 rounded accent-green-600 cursor-pointer"
                onChange={(e) => setAgreed(e.target.checked)} 
              />
              <label htmlFor="agreed" className="text-xs text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                I agree to the <span className="text-green-600 font-bold">Terms</span> & <span className="text-green-600 font-bold">Privacy</span>
              </label>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-600 dark:text-red-400 text-xs font-medium">
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading} 
              className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl shadow-green-200 dark:shadow-none mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-green-700 font-bold hover:underline underline-offset-4">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;