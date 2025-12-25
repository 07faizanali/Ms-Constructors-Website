import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lottie from "lottie-react";

import {
  AppWindow,
  Globe,
  Smartphone,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Monitor,
  BarChart2,
  Code,
  Zap,
  Server,
  Database,
  Shield
} from "lucide-react";

// import techAnimation from "../assests/Lottie/UIUX Designer.json";
// import bgVideo from "../assests/Video/hero-bg2.mp4";
gsap.registerPlugin(ScrollTrigger);

const ITServices = () => {
  const sectionRef = useRef(null);

  /* ================= GSAP COUNTERS ================= */
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach((counter) => {
      const value = counter.getAttribute("data-value");

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 85%"
          }
        }
      );
    });

    gsap.fromTo(
      ".gsap-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  const stats = [
    { value: 500, label: "Projects Delivered", icon: <Monitor /> },
    { value: 98, label: "Client Satisfaction", icon: <BarChart2 /> },
    { value: 50, label: "Expert Developers", icon: <Code /> },
    { value: 24, label: "Support Hours", icon: <Zap /> }
  ];

  const services = [
    {
      title: "SaaS & Installables",
      icon: <AppWindow />,
      items: ["CRM", "ERP", "HRM", "Billing", "POS"]
    },
    {
      title: "Web Development",
      icon: <Globe />,
      items: ["Corporate Sites", "E-Commerce", "Portals", "CMS"]
    },
    {
      title: "Mobile Apps",
      icon: <Smartphone />,
      items: ["Food App", "Taxi App", "Fitness App"]
    },
    {
      title: "Cloud & Hosting",
      icon: <Cloud />,
      items: ["Cloud Servers", "Email Hosting", "VPN"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================= VIDEO BACKGROUND ================= 
       <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-40"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div> */}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6 pt-32">

        {/* HERO */}
        <div className="text-center mb-28">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            <span className="text-orange-500">Premium</span> IT Solutions
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            High-performance software, scalable systems, and enterprise-grade technology.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-full text-black font-semibold"
          >
            Get Consultation <ArrowRight />
          </motion.button>
        </div>

        {/* LOTTIE
        <div className="max-w-xs mx-auto mb-24">
          <Lottie animationData={techAnimation} loop />
        </div> */}

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="gsap-card bg-zinc-900/60 border border-orange-500/20 rounded-xl p-6 text-center backdrop-blur"
            >
              <div className="flex justify-center text-orange-500 mb-3">
                {stat.icon}
              </div>

              <div
                className="stat-number text-3xl font-bold text-orange-500"
                data-value={stat.value}
              >
                0
              </div>

              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div ref={sectionRef} className="space-y-24">
          {services.map((service, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-orange-500">{service.icon}</span>
                {service.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {service.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="gsap-card bg-zinc-900/60 border border-orange-500/20 rounded-lg p-5 flex gap-3 items-center hover:border-orange-500 transition"
                  >
                    <CheckCircle2 className="text-orange-500" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* WHY US */}
        <div className="mt-32 mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-orange-500">Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Server />, title: "Modern Tech" },
              { icon: <Database />, title: "Scalable Systems" },
              { icon: <Shield />, title: "Enterprise Security" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-zinc-900/60 border border-orange-500/20 p-8 rounded-xl text-center"
              >
                <div className="text-orange-500 flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default ITServices;
