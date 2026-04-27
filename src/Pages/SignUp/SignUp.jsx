import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Phone, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '@/api/authApi';
import { toast, Toaster } from 'react-hot-toast'; // ✅ Toaster ইম্পোর্ট করা হয়েছে

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false); // ✅ Terms and conditions এর জন্য স্টেট

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ ভ্যালিডেশন
    if (!agreed) {
      setError("Please agree to the Terms and Conditions ⚠️");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
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

      await registerUser(payload);
      
      // ✅ সাকসেস টোস্টার
      toast.success("Account created successfully! 🎉");
      
      setTimeout(() => {
        navigate("/signin");
      }, 2000); // ২ সেকেন্ড পর রিডাইরেক্ট হবে যাতে টোস্টারটি দেখা যায়

    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
      toast.error(err?.response?.data?.message || "Registration failed");
      if (err?.response?.data?.message === "User already exists") {
        navigate("/signin");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-sans bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* ✅ টোস্টার কন্টেইনার */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-5xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-transparent dark:border-slate-800">
        
        {/* Left Side: Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-sky-600 dark:bg-sky-700 p-12 text-white flex-col justify-center items-center relative overflow-hidden">
          <div className="z-10 text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Join Us Today!</h2>
            <p className="text-sky-100 text-lg opacity-90">Create your account and unlock a world of new possibilities.</p>
          </div>
          <div className="z-10 mt-10 animate-float">
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" 
              alt="Laptop" 
              className="w-40 h-40 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 bg-white dark:bg-slate-900 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Create Account</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-2">Please fill in the details below</p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 mb-6 rounded-r-lg text-sm flex items-center">
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                <User size={19} />
              </span>
              <input type="text" name="name" required placeholder="Full Name" onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                  <Mail size={19} />
                </span>
                <input type="email" name="email" required placeholder="Email" onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white" />
              </div>

              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                  <Phone size={19} />
                </span>
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white" />
              </div>
            </div>

            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                <ImageIcon size={19} />
              </span>
              <input type="url" name="image" placeholder="Profile Image URL" onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white" />
            </div>

            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                <Lock size={19} />
              </span>
              <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" onChange={handleChange} className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-sky-600">
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 group-focus-within:text-sky-500">
                <Lock size={19} />
              </span>
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" required placeholder="Confirm Password" onChange={handleChange} className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-sky-600">
                {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            {/*  Terms and Conditions Checkbox */}
            <div className="flex items-center gap-2 px-1 py-2">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-gray-300 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-500 dark:text-slate-400 cursor-pointer">
                I agree to the <span className="text-sky-600 hover:underline">Terms & Conditions</span>
              </label>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader2 size={20} className="animate-spin" /> Processing...</>
              ) : (
                <><ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /> Create Account</>
              )}
            </button>
          </form>

          <p className="text-center text-gray-500 dark:text-slate-400 mt-8">
            Already have an account? 
            <Link to="/signin" className="text-sky-600 dark:text-sky-400 font-bold hover:underline ml-1">Sign In</Link> 
          </p>
        </div>
      </div>
      
      {/* CSS Animations */}
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

export default SignUp;