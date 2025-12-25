import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[86%]">
      <div
        className={`glass flex items-center justify-between px-4 py-2 rounded-2xl border border-white/10 transition-all ${
          elevated ? "shadow-lg backdrop-blur" : ""
        } bg-white/20`}
      >
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <Link to="/">
            <h1 className="text-lg md:text-xl font-bold text-white">INNOVEX</h1>
          </Link>
          <span className="text-xs font-medium text-green-700">
            Powered by MS Constructor
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium text-sm">
          <li className="px-3 py-1 rounded-full hover:bg-white/30">
            <Link to="/">Home</Link>
          </li>

          {/* About Us Dropdown */}
          <li className="relative group px-3 py-1 rounded-full hover:bg-white/30 cursor-pointer">
            About Us
            <ul className="absolute top-8 left-0 w-56 bg-white rounded-xl shadow-xl p-3
                          opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
              <li className="px-3 py-2 rounded-md text-black hover:bg-gray-100">
                <Link to="/about/company-overview">Company Overview</Link>
              </li>
              <li className="px-3 py-2 rounded-md text-black hover:bg-gray-100">
                <Link to="/about/core-values">Core Values</Link>
              </li>
              <li className="px-3 py-2 rounded-md text-black hover:bg-gray-100">
                <Link to="/about/vision-mission">Vision & Mission</Link>
              </li>
              <li className="px-3 py-2 rounded-md text-black hover:bg-gray-100">
                <Link to="/about/achievements">Achievements</Link>
              </li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="relative group px-3 py-1 rounded-full hover:bg-white/30 cursor-pointer">
            Services
            <ul className="absolute top-8 left-0 w-52 bg-white rounded-xl shadow-xl p-3
                          opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
              <li className="px-3 py-2 rounded-md text-black hover:bg-gray-100">
                <Link to="/it-services">IT Solutions</Link>
              </li>
              <li className="px-3 py-2 rounded-md text-black hover:bg-gray-100">
                <Link to="/designing">Designing</Link>
              </li>
              <li className="px-3 py-2 rounded-md text-black hover:bg-gray-100">
                <Link to="/construction">Construction</Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-1 rounded-full hover:bg-white/30">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800"
        >
          Get Quote
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 glass bg-white/30 rounded-2xl px-5 py-4 space-y-2">
          {/* Home */}
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

          {/* About Us mobile */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full text-left flex justify-between items-center px-2 py-1 bg-white/10 rounded"
            >
              About Us
              <span>{aboutOpen ? "-" : "+"}</span>
            </button>
            {aboutOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/about/company-overview" onClick={() => setOpen(false)} className="block">Company Overview</Link>
                <Link to="/about/core-values" onClick={() => setOpen(false)} className="block">Core Values</Link>
                <Link to="/about/vision-mission" onClick={() => setOpen(false)} className="block">Vision & Mission</Link>
                <Link to="/about/achievements" onClick={() => setOpen(false)} className="block">Achievements</Link>
              </div>
            )}
          </div>

          {/* Services mobile */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left flex justify-between items-center px-2 py-1 bg-white/10 rounded"
            >
              Services
              <span>{servicesOpen ? "-" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/it-services" onClick={() => setOpen(false)} className="block">IT Solutions</Link>
                <Link to="/designing" onClick={() => setOpen(false)} className="block">Designing</Link>
                <Link to="/construction" onClick={() => setOpen(false)} className="block">Construction</Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

          {/* CTA */}
          <Link
            to="/contact"
            className="block bg-black text-white text-center py-2 rounded-full"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
