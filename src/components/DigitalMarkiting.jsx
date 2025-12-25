import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaUsers,
  FaEnvelope,
  FaChartLine,
  FaBullseye,
  FaCheckCircle,
    FaChevronDown,
    FaStar
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};



/* ------------------ Counter Component ------------------ */
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}+</span>;
};

const services = [
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc",
    points: ["Keyword Research", "On-Page SEO", "Technical Audit", "Link Building"],
  },
  {
    icon: <FaUsers />,
    title: "Social Media Marketing",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    points: ["Brand Strategy", "Content Creation", "Paid Ads", "Engagement Growth"],
  },
  {
    icon: <FaEnvelope />,
    title: "Email Marketing",
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa",
    points: ["Campaign Design", "Automation", "Lead Nurturing", "Analytics"],
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reporting",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    points: ["Traffic Analysis", "ROI Tracking", "Conversion Reports", "Insights"],
  },
  {
    icon: <FaBullseye />,
    title: "PPC Advertising",
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
    points: ["Google Ads", "Remarketing", "Budget Optimization", "Lead Generation"],
  },
  {
    icon: <FaUsers />,
    title: "Content Marketing",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    points: ["Blogs", "Videos", "Infographics", "Content Strategy"],
  },
];

/* ------------------ Data ------------------ */
const stats = [
  { value: 250, label: "Projects Completed" },
  { value: 120, label: "Happy Clients" },
  { value: 5, label: "Years Experience" },
  { value: 98, label: "Success Rate (%)" },
];

const testimonials = [
  {
    name: "Amit Verma",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    review: "Their marketing strategy doubled our leads in just 3 months.",
  },
  {
    name: "Sarah Khan",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    review: "Clear reports, strong ROI, and excellent communication.",
  },
  {
    name: "Rahul Mehta",
    role: "E-commerce Owner",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    review: "SEO and ads boosted our sales massively.",
  },
];

const faqs = [
  {
    q: "How long does digital marketing take?",
    a: "SEO takes 3–6 months, while paid ads show faster results.",
  },
  {
    q: "Do you provide custom strategies?",
    a: "Yes, every plan is tailored to business goals.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Google, Facebook, Instagram, LinkedIn & YouTube.",
  },
];

const steps = [
  {
    step: "1",
    title: "Analysis",
    desc: "In-depth market research",
  },
  {
    step: "2",
    title: "Strategy",
    desc: "Custom plan development",
  },
  {
    step: "3",
    title: "Execute",
    desc: "Implementation & optimization",
  },
  {
    step: "4",
    title: "Report",
    desc: "Track & measure results",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const card = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Marketing = () => {
    const [openFAQ, setOpenFAQ] = useState(null);
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white">
      {/* HERO SECTION */}
      <div className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Digital Marketing <br />
            <span className="text-cyan-400">That Drives Results</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Grow your business online with data-driven strategies, creative
            campaigns, and performance-focused digital marketing solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

            <Link
              to="/services"
              className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400/10 transition"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1557838923-2985c318be48"
          alt="Digital Marketing"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl shadow-2xl"
        />
      </div>

            {/* ================= STATS ================= */}
      <div className="container mx-auto px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                <Counter end={stat.value} />
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>


      {/* SERVICES SECTION */}
      <div className="container mx-auto px-6 pb-28">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Digital Marketing Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#020617] border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 text-cyan-400 text-xl mb-3">
                  {service.icon}
                  <h3 className="font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-gray-400">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-cyan-400 text-sm" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      
      {/* ================= TESTIMONIALS ================= */}
      <div className="container mx-auto px-6 pb-28">
        <h2 className="text-4xl font-bold text-center mb-16">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} className="w-14 h-14 rounded-full" />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{t.review}"</p>
              <div className="flex gap-1 text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
<section>
       <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Our Process
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-lg"
            >
              {/* Step number */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-cyan-500 text-black font-bold">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
</section>
      {/* ================= FAQ ================= */}
      <div className="container mx-auto px-6 pb-38 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-xl mb-4"
          >
            <button
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              className="w-full flex justify-between p-5"
            >
              {faq.q}
              <FaChevronDown
                className={`transition ${openFAQ === i && "rotate-180"}`}
              />
            </button>
            {openFAQ === i && (
              <div className="px-5 pb-5 text-gray-400">{faq.a}</div>
            )}
          </div>
        ))}

      {/* CTA SECTION */}
      <div className="bg-cyan-500/10 border-t border-cyan-500/20">
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Ready to Boost Your Online Growth?
          </motion.h3>

          <p className="mt-4 text-gray-300">
            Let’s build a strategy that converts clicks into customers.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-xl font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Marketing;
