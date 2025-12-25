import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import {
  Globe,
  ShoppingCart,
  Newspaper,
  Briefcase,
 
} from "lucide-react";

/* -------------------- SERVICES -------------------- */
const services = [
  {
    title: "Website Development",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    desc: "Modern, fast & SEO-friendly websites for businesses.",
  },
  {
    title: "eCommerce Solutions",
    icon: <ShoppingCart className="w-8 h-8 text-cyan-400" />,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    desc: "Scalable online stores with secure payments.",
  },
  {
    title: "CMS / Blog Platforms",
    icon: <Newspaper className="w-8 h-8 text-cyan-400" />,
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    desc: "Content-driven platforms with admin dashboards.",
  },
  {
    title: "Job / Business Portals",
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    desc: "Custom portals with authentication & dashboards.",
  },
];

/* -------------------- TESTIMONIALS -------------------- */
const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "Their web development team built our platform fast, secure, and scalable. Highly recommended!",
  },
  {
    name: "Anjali Verma",
    role: "Marketing Head",
    text: "Amazing UI/UX and performance. Our conversions improved instantly.",
  },
  {
    name: "David Lee",
    role: "SaaS Product Owner",
    text: "Professional team with deep technical expertise.",
  },
];

const WebDev = () => {
  const countersRef = useRef([]);

  /* -------------------- GSAP COUNTERS -------------------- */
  useEffect(() => {
    countersRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: el.dataset.value,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#020617] text-white overflow-hidden">

      {/* -------------------- SEO META -------------------- */}
      <Helmet>
        <title>Professional Web Development Services | Modern & Scalable</title>
        <meta
          name="description"
          content="High-performance web development services using React, Node.js & modern stacks. Fast, secure & SEO-optimized solutions."
        />
      </Helmet>

      {/* -------------------- HERO -------------------- */}
      <section className="py-28 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Web Development & CMS Solutions
        </motion.h1>
        <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
          We build lightning-fast, secure, and scalable websites that grow your business.
        </p>
      </section>

      {/* -------------------- STATS (GSAP) -------------------- */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mb-24">
        {[
          { label: "Years Experience", value: 12 },
          { label: "Projects Delivered", value: 500 },
          { label: "Client Satisfaction %", value: 98 },
          { label: "Support Availability", value: 24 },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center"
          >
            <div
              ref={(el) => (countersRef.current[i] = el)}
              data-value={item.value}
              className="text-3xl font-bold text-cyan-400"
            >
              0
            </div>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </section>

      {/* -------------------- SERVICES -------------------- */}
      <section className="max-w-7xl mx-auto px-4 mb-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Web Development Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden"
            >
              <img src={s.img} alt={s.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                {s.icon}
                <h3 className="text-xl font-semibold mt-4">{s.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------- PRICING -------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-28">
        <h2 className="text-3xl font-bold text-center mb-14">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { plan: "Starter", price: "$999", features: ["5 Pages", "Responsive", "Basic SEO"] },
            { plan: "Business", price: "$2999", features: ["CMS", "SEO", "Admin Panel"] },
            { plan: "Enterprise", price: "$6999", features: ["Custom App", "API", "Security"] },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{p.plan}</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-6">{p.price}</p>
              <ul className="space-y-2 text-gray-300">
                {p.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- TESTIMONIALS -------------------- */}
      <section className="max-w-5xl mx-auto px-4 mb-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6"
            >
              <p className="text-gray-300 italic">“{t.text}”</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-400">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- CTA -------------------- */}
      <section className="text-center pb-24">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Website?</h2>
        <p className="text-gray-400 mb-8">
          Let’s create something powerful together.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold text-black">
          Get Free Consultation
        </button>
      </section>
    </div>
  );
};

export default WebDev;
