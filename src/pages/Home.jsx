import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ContactUsPage from "./ContactUsPage";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  /* ============ PARTICLES INIT ============ */
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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

      {/* ================= PARTICLES ================= */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            opacity: { value: 0.3 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />

      {/* ================= LIGHT RAYS ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff3,transparent_60%)] -z-10" />

      {/* ================= MAIN BG ================= */}
      <div className="bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="hero-item text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            Premium IT & Digital Solutions
          </h1>

          <p className="hero-item mt-6 max-w-3xl text-orange-50 text-lg">
            We build powerful digital products, stunning designs and scalable
            technology solutions for modern businesses.
          </p>

          <Link to="/it-services">
            <button className="floating-btn hero-item mt-10 bg-black text-orange-400 px-10 py-4 rounded-full font-semibold shadow-2xl">
              Get Started
            </button>
          </Link>
        </section>

        {/* ================= IMAGE CONTENT ================= */}
        <section className="reveal py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-2xl shadow-2xl"
            alt="Technology"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Technology That Drives Growth</h2>
            <p className="text-orange-50 leading-relaxed">
              Our team delivers future-ready solutions using modern
              technologies, intuitive UI/UX and enterprise-grade
              architecture.
            </p>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="reveal py-28 px-6">
          <h2 className="text-center text-3xl font-bold mb-16">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {["Web Development", "UI / UX Designing", "Enterprise Solutions"].map((title, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition"
              >
                <img
                  src={`https://source.unsplash.com/600x400/?technology,${i}`}
                  className="h-56 w-full object-cover"
                  alt={title}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-orange-50">
                    Scalable, secure and performance-driven solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL IMAGE STRIP ================= */}
        <section className="reveal py-24 px-6 grid md:grid-cols-3 gap-6">
          {["software", "coding", "startup"].map((q, i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/800x600/?${q}`}
              className="rounded-xl shadow-xl hover:scale-105 transition"
              alt={q}
            />
          ))}
        </section>
        
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
