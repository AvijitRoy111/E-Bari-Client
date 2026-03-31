// components/Footer.jsx
import React from "react";
import logo from "../../assets/images/logo/bari.png.png";
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="shadow-[0_-6px_20px_rgba(0,0,0,0.15)] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="E-Bari logo" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">E-<span className="text-green-700">B</span>ari</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Trusted, easy and hassle-free real estate service.</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">We help people find homes, sell properties, and get personalized alerts for the best deals.</p>

          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12z"/></svg></a>
            <a href="#" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 8.75a12.15 12.15 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54 12.14 12.14 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 22.46 6z"/></svg></a>
            <a href="#" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#instaGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <defs>
    <linearGradient id="instaGradient" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#feda75" />
      <stop offset="50%" stopColor="#d62976" />
      <stop offset="100%" stopColor="#4f5bd5" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
</svg></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-4 md:mt-0">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1.5 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/all-properties" className="hover:underline">All Properties</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-4 md:mt-0">
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +880 1X XXX XXXX</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@e-bari.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dhaka, Bangladesh</li>
            <li className="text-xs text-slate-500 dark:text-slate-400">Office Time: Sat–Thu • 10:00 AM – 7:00 PM</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="mt-4 md:mt-0">
          <h4 className="font-semibold mb-2">Subscribe to Newsletter</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Get updates on new listings, price drops and exclusive offers.</p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-green-400"
            />
            <button type="submit" className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md text-sm">Subscribe</button>
          </form>

          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">We never share your email with anyone. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} E-Bari. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <span className="hidden md:inline">— Designed with  in Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
