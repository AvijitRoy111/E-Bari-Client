import { useState, useContext } from "react";
import {
  Menu,
  User,
  Moon,
  Sun,
  Laptop,
  Home,
  Phone,
  Wrench,
  Building2,
  Heart,
  LogOut,
  Loader2,
  LayoutDashboard,
} from "lucide-react";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import logo from "../../assets/images/logo/bari.png.png";
import { useTheme } from "../Theme-Provider/Theme-Provider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "@/Providers/AuthProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  // Get Auth Context
  const auth = useContext(AuthContext) || {};
  const { user, loading, logout } = auth;

  const handleLogout = () => {
    logout?.();
    navigate("/signin");
  };

  const navLinksList = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/all-properties", label: "Properties", icon: <Building2 className="w-4 h-4" /> },
    { to: "/services", label: "Services", icon: <Wrench className="w-4 h-4" /> },
    { to: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full shadow-sm bg-white dark:bg-slate-950 sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* ================= MOBILE MENU (Left Side) ================= */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                <Menu className="w-6 h-6 text-slate-700 dark:text-slate-200" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[300px] p-0 flex flex-col bg-white dark:bg-slate-950">
              {/* MOBILE USER HEADER */}
              <div className="p-6 bg-emerald-600 dark:bg-emerald-700 text-white flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full border-4 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
                  {user?.image ? (
                    <img src={user.image} className="w-full h-full object-cover" alt="User" />
                  ) : (
                    <User className="w-8 h-8" />
                  )}
                </div>
                {user && (
                  <div className="text-center">
                    <p className="font-bold text-lg leading-tight">{user.name}</p>
                    <p className="text-emerald-100 text-xs opacity-80">{user.email}</p>
                  </div>
                )}
              </div>

              {/* MOBILE NAV LINKS */}
              <nav className="p-4 flex flex-col gap-1">
                {navLinksList.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive 
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 font-semibold" 
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                      }`
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}
                
                {/* Favorite for Mobile */}
                <NavLink
                  to="/favourite"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive ? "bg-emerald-50 text-emerald-700" : "text-slate-600 dark:text-slate-400"
                    }`
                  }
                >
                  <Heart className="w-4 h-4" />
                  Favorites
                </NavLink>
              </nav>

              {/* MOBILE LOGOUT/SIGNIN */}
              <div className="mt-auto p-6 border-t border-slate-100 dark:border-slate-800">
                {user ? (
                  <Button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-6 shadow-md">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                ) : (
                  <Link to="/signin" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-xl py-6 shadow-emerald-200 dark:shadow-none shadow-lg">
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:rotate-6 transition-transform">
            <img src={logo} className="w-8 h-8 object-contain" alt="Logo" />
          </div>
          <h1 className="text-xl font-black tracking-tight text-slate-800 dark:text-white">
            <span className="text-emerald-600">E-</span>BARI
          </h1>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinksList.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400"
                        : "text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ================= RIGHT SIDE ACTIONS ================= */}
        <div className="flex items-center gap-2">
          
          {/* Favorite Icon (Desktop) */}
          <Link to="/favourite" className="hidden sm:flex">
            <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20">
              <Heart className="w-5 h-5" />
            </Button>
          </Link>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-emerald-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Section */}
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 p-1 pr-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all outline-none">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center border border-emerald-200">
                    {user?.image ? (
                      <img src={user.image} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-emerald-700" />
                    )}
                  </div>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 mt-2 p-2 rounded-2xl shadow-xl border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
                <DropdownMenuLabel className="p-3">
                  <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{user.name}</p>
                  <p className="text-[10px] text-slate-500 font-normal truncate">{user.email}</p>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800" />

                <DropdownMenuItem asChild className="p-3 rounded-xl cursor-pointer focus:bg-emerald-50 dark:focus:bg-emerald-900/20">
                  <Link to="/dashboard" className="flex items-center gap-3 w-full">
                    <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800" />

                <div className="p-1">
                  <Button 
                    onClick={handleLogout}
                    variant="destructive" 
                    className="w-full justify-start gap-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border-none shadow-none h-10"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="font-bold">Logout</span>
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/signin">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 shadow-md shadow-emerald-200 dark:shadow-none transition-all active:scale-95 font-semibold">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}