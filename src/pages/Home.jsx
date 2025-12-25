import { useEffect } from "react";

import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContactUsPage from "./ContactUsPage";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  /* ============ PARTICLES INIT ============ */


  /* ============ GSAP EFFECTS ============ */
  useEffect(() => {
    // Hero items animation
    gsap.from(".hero-item", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    });

    // Floating button animation
    gsap.to(".floating-btn", {
      y: -18,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      ease: "power1.inOut",
    });

    // Scroll progress bar animation
    gsap.to(".scroll-progress", {
      scaleX: 1,
      transformOrigin: "left",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Reveal sections on scroll
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <div className="relative text-white overflow-hidden">
      {/* ================= SCROLL PROGRESS ================= */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-orange-200 z-[100]">
        <div className="scroll-progress h-full bg-orange-600 scale-x-0" />
      </div>

      

      {/* ================= LIGHT RAYS ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff3,transparent_60%)] -z-10" />

      {/* ================= MAIN BG ================= */}
      <div className="bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600">

             
        <section>
          <HeroSection/>
          <AboutSection/>
          <Testimonials/>
          <ContactUsPage/>
        </section>

      </div>

      {/* ================= SOCIAL ICONS ================= */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-black p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaTwitter size={22} />
        </a>
      </div>
    </div>
  );
}
