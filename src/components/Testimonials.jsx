
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { testimonialsData } from "../data/testimonials";

gsap.registerPlugin(ScrollTrigger);

const AUTO_SLIDE_INTERVAL = 5000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  /* ================= GSAP REVEAL ================= */
  useEffect(() => {
    gsap.fromTo(
      ".testimonial-reveal",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section relative py-28 bg-zinc-950 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f5c77a22,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 testimonial-reveal">
          <span className="uppercase tracking-widest text-sm text-amber-400 font-medium">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-zinc-400 text-lg">
            Real experiences from clients who trusted us with premium
            construction & design projects.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="testimonial-reveal bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute -top-6 left-10 text-amber-400 w-12 h-12" />

              <p className="text-zinc-300 text-lg leading-relaxed italic mb-8">
                “{testimonialsData[index].content}”
              </p>

              <div className="flex items-center gap-5">
                <img
                  src={testimonialsData[index].image}
                  alt={testimonialsData[index].name}
                  className="w-14 h-14 rounded-full object-cover border border-amber-400/40"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonialsData[index].name}
                  </h4>
                  <p className="text-amber-400 text-sm">
                    {testimonialsData[index].position},{" "}
                    {testimonialsData[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ================= DOT INDICATORS ================= */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-amber-400 w-6" : "bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
