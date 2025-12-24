import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHardHat,
  FaBuilding,
  FaTools,
  FaWarehouse,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function ConstructionPage() {

  const statsRef = useRef([]);



  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    statsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: el.dataset.value,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

  }, []);

  return (
    <div className="bg-[#0c0f14] text-white overflow-hidden">

      {/* ================= HERO VIDEO ================= */}
      <section className="relative min-h-screen flex items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-construction-site-9718/1080p.mp4"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold reveal">
            Building <span className="text-orange-500">Trust</span><br />
            Through Excellence
          </h1>
          <p className="mt-6 max-w-2xl text-gray-300 reveal">
            We deliver world-class residential, commercial and industrial
            construction projects with uncompromising quality and safety.
          </p>

          <div className="mt-10 flex gap-6 reveal">
            <button className="px-8 py-4 bg-orange-500 rounded-full font-semibold">
              View Projects
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-32 px-6 md:px-20 bg-[#0f131a]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            className="rounded-2xl shadow-2xl reveal"
            alt=""
          />

          <div className="reveal">
            <h2 className="text-4xl font-bold mb-6">
              20+ Years of Construction Excellence
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We are a trusted construction partner delivering safe,
              sustainable and innovative infrastructure solutions across
              residential, commercial and industrial sectors.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" /> ISO Certified
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" /> 500+ Projects Delivered
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" /> Safety-First Culture
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 px-6 md:px-20 bg-black">
        <h2 className="text-center text-4xl font-bold mb-20 reveal">
          Our Construction Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { icon: <FaBuilding />, title: "Residential Construction" },
            { icon: <FaWarehouse />, title: "Commercial Projects" },
            { icon: <FaTools />, title: "Renovation & Remodeling" },
            { icon: <FaHardHat />, title: "Industrial Construction" },
            { icon: <FaBuilding />, title: "Interior Fit-Outs" },
            { icon: <FaWarehouse />, title: "Turnkey Projects" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#121722] p-8 rounded-2xl shadow-xl reveal"
            >
              <div className="text-4xl text-orange-500 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm">
                End-to-end planning, execution and delivery with quality assurance.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
 {/* ================= SAFETY ================= */}
      <section className="py-28 bg-black px-6 md:px-20">
        <h2 className="text-center text-4xl font-bold mb-16 reveal">
          Safety & Compliance
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            "ISO 9001 Certified",
            "ISO 14001 Environmental",
            "OHSAS Safety",
            "Govt Approved Contractor",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#121722] p-8 rounded-xl text-center reveal"
            >
              <FaShieldAlt className="text-orange-500 text-4xl mx-auto mb-4" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

            {/* ================= STATS ================= */}
      <section className="py-28 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
          {[
            { label: "Years Experience", value: 25 },
            { label: "Projects Completed", value: 520 },
            { label: "Happy Clients", value: 300 },
          ].map((s, i) => (
            <div key={i} className="reveal">
              <div
                ref={(el) => (statsRef.current[i] = el)}
                data-value={s.value}
                className="text-6xl font-extrabold text-orange-500"
              >
                0
              </div>
              <p className="mt-4 text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= PROJECT GALLERY ================= */}
      <section className="py-32 px-6 md:px-20 bg-[#0f131a]">
        <h2 className="text-center text-4xl font-bold mb-16 reveal">
          Our Landmark Projects
        </h2>

        <div className="columns-1 md:columns-3 gap-6 max-w-7xl mx-auto">
          {[1,2,3,4,5,6].map((i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05 }}
              src={`https://source.unsplash.com/800x900/?construction,building,${i}`}
              className="mb-6 rounded-xl shadow-xl reveal"
              alt=""
            />
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-32 px-6 md:px-20 bg-black">
        <h2 className="text-center text-4xl font-bold mb-20 reveal">
          Our Construction Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {["Planning", "Design", "Execution", "Delivery"].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-[#121722] rounded-xl reveal"
            >
              <div className="text-3xl font-bold text-orange-500 mb-3">
                0{i + 1}
              </div>
              <h4 className="font-semibold">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>

    {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 bg-black overflow-hidden px-6">
        <h2 className="text-center text-4xl font-bold mb-20 reveal">
          Client Testimonials
        </h2>

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10"
        >
          {[
            "Exceptional quality and on-time delivery.",
            "Highly professional construction team.",
            "Best safety standards in the industry.",
          ]
            .concat([
              "Exceptional quality and on-time delivery.",
              "Highly professional construction team.",
              "Best safety standards in the industry.",
            ])
            .map((t, i) => (
              <div
                key={i}
                className="min-w-[350px] bg-[#121722] p-8 rounded-xl"
              >
                <p className="text-gray-300">“{t}”</p>
                <p className="mt-4 font-semibold">— Corporate Client</p>
              </div>
            ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 md:px-20 bg-gradient-to-r from-orange-500 to-orange-600 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 reveal">
          Build With Confidence
        </h2>
        <p className="max-w-2xl mx-auto text-orange-100 mb-10 reveal">
          Partner with a construction company that delivers excellence every time.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-10 py-4 bg-black rounded-full font-semibold"
        >
          Start Your Project
        </motion.button>
      </section>

    </div>
  );
}
