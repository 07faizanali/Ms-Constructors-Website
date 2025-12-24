import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const sweepRef = useRef(null);

  useEffect(() => {
    // Footer content reveal
    gsap.fromTo(
      footerRef.current.querySelectorAll(".footer-col"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );

    // LINE SWEEP ANIMATION
    gsap.fromTo(
      sweepRef.current,
      { x: "-120%" },
      {
        x: "120%",
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        repeat: -1,
        repeatDelay: 3,
      }
    );
  }, []);

  return (
  <footer
  ref={footerRef}
  className="relative mt-16 py-12 overflow-hidden bg-[#0B1220]"
>
  {/* Line Sweep */}
  <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
    <div
      ref={sweepRef}
      className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70"
    />
  </div>

  {/* Background Layers */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C3F]/80 via-[#0B1220] to-black" />
  <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-500/10 blur-[140px]" />
  <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-blue-500/10 blur-[140px]" />

  {/* Grid Overlay */}
  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]" />

  {/* CONTENT */}
  <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* BRAND */}
    <div className="footer-col">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
          I
        </div>
        <div>
          <div className="font-bold text-lg text-white">INNOVEX</div>
          <div className="text-xs text-gray-400">Powered by MS Constructor</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-[250px]">
        Enterprise-grade IT solutions & scalable technology services.
      </p>

      {/* SOCIAL */}
      <div className="flex gap-3 mt-4">
        <a className="social" href="#"><FaFacebookF /></a>
        <a className="social" href="#"><FaInstagram /></a>
        <a className="social" href="#"><FaXTwitter /></a>
        <a className="social" href="#"><FaLinkedinIn /></a>
      </div>
    </div>

    {/* COMPANY */}
    <div className="footer-col text-sm">
      <div className="font-semibold text-white mb-3">Company</div>
      <ul className="space-y-2 text-gray-400">
        <li className="footer-link">Company Overview</li>
        <li className="footer-link">Vision & Mission</li>
        <li className="footer-link">Core Values</li>
        <li className="footer-link">Achievements</li>
      </ul>
    </div>

    {/* SERVICES */}
    <div className="footer-col text-sm">
      <div className="font-semibold text-white mb-3">Services</div>
      <ul className="space-y-2 text-gray-400">
        <li className="footer-link">Web & App Development</li>
        <li className="footer-link">UI / UX Design</li>
        <li className="footer-link">Cloud & DevOps</li>
        <li className="footer-link">AI & Automation</li>
        <li className="footer-link">IT Consulting</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div className="footer-col text-sm">
      <div className="font-semibold text-white mb-3">Contact</div>
      <ul className="space-y-2 text-gray-400">
        <li>Email: hello@innovex.tech</li>
        <li>Phone: +91 98765 43210</li>
        <li>Location: Mumbai, India</li>
      </ul>
    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="relative z-10 mt-10 pt-4 border-t border-white/10 text-center text-xs text-gray-500">
    <motion.span
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      © {new Date().getFullYear()} INNOVEX. All Rights Reserved.
    </motion.span>
  </div>
</footer>

  );
}
