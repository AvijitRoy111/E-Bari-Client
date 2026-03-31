import { useState } from "react";
import { Menu, X, User, Moon, Sun, Laptop, Home, Phone, Wrench, Building2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import logo from "../../assets/images/logo/bari.png.png";
import { useTheme } from "../Theme-Provider/Theme-Provider";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeIcon =
    theme === "light" ? (
      <Sun className="w-5 h-5 text-yellow-500" />
    ) : theme === "dark" ? (
      <Moon className="w-5 h-5 text-blue-400" />
    ) : theme === "Laptop" ? (
      <Sun className="w-5 h-5 text-yellow-500" />
    ) : (
      <Moon className="w-5 h-5 text-blue-400" />
    );

  // Mobile Nav Items with Icons
  const mobileLinks = [
    { to: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { to: "/all-properties", label: "All Properties", icon: <Building2 className="w-5 h-5" /> },
    { to: "/services", label: "Services", icon: <Wrench className="w-5 h-5" /> },
    { to: "/contact", label: "Contact", icon: <Phone className="w-5 h-5" /> },
  ];

  // Desktop nav without icons
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-green-700 font-semibold" : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/all-properties"
          className={({ isActive }) => (isActive ? "text-green-700 font-semibold" : "")}
        >
          All Properties
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "text-green-700 font-semibold" : "")}
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-green-700 font-semibold" : "")}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* MOBILE LEFT MENU */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent side="left" className="w-64 p-0 pt-3">

              <div className="flex items-center justify-between">
                <User className="w-6 h-6 mb-4 ml-3" />
              </div>

              <hr className="border-b border-b-gray-300 w-full mx-0 mb-6" />

              {/* MOBILE MENU WITH ICONS + ACTIVE GREEN + BORDER */}
              <div className="flex flex-col gap-2 text-lg font-medium ml-3 pr-3">
                {mobileLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md ${
                        isActive
                          ? "bg-green-700 text-white text-sm border-l-4 border-r-4 border-orange-600"
                          : "text-black dark:text-white text-sm"
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <Button className="mt-10 w-[90%] bg-green-700 hover:bg-green-800 text-white border-l-4 border-r-4 border-orange-600 ml-3">
                Logout
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        {/* MOBILE LOGO */}
        <div className="md:hidden flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full brightness-200" />
          <h1 className="text-2xl font-bold">
            <span className="text-green-700">E-B</span>ari
          </h1>
        </div>

        {/* DESKTOP LOGO */}
        <div className="hidden md:flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full brightness-200" />
          <h1 className="text-2xl font-bold">
            <span className="text-green-700">E-B</span>ari
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-lg font-medium">
          <ul className="flex items-center gap-4">{navLinks}</ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>{themeIcon}</DropdownMenuTrigger>

            <DropdownMenuContent className="w-40 mt-2">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="w-5 h-5 text-yellow-500" /> Light Mode
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="w-5 h-5 text-blue-400" /> Dark Mode
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="w-4 h-4 mr-2" /> System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="hidden md:block bg-green-600 hover:bg-green-700 text-white">
            Sign In
          </Button>

          <User className="md:hidden w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
