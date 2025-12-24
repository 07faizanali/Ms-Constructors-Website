import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, type: "Interior", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 2, type: "Graphic", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698" },
  { id: 3, type: "UI", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d" },
  { id: 4, type: "Interior", img: "https://images.unsplash.com/photo-1618220179428-22790b461013" },
  { id: 5, type: "Graphic", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb" },
  { id: 6, type: "UI", img: "https://images.unsplash.com/photo-1581276879432-15a19d654956" },
];

export default function DesigningPage() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter(p => p.type === filter);

  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#0b0b0e] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 md:px-20 bg-gradient-to-br from-black via-[#0f0f15] to-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="reveal">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Luxury <span className="text-orange-500">Design</span><br />
              Crafted to Inspire
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              Premium interior spaces, bold branding, and modern UI experiences
              inspired by Houzz, Dribbble, and Behance.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-8 py-4 bg-orange-500 rounded-full font-semibold">
                View Portfolio
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full">
                Start Project
              </button>
            </div>
          </div>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4 }}
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
            className="rounded-3xl shadow-2xl"
            alt=""
          />
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="py-24 px-6 md:px-20">
        <div className="flex justify-center gap-6 mb-16 reveal">
          {["All", "Interior", "Graphic", "UI"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-orange-500 border-orange-500"
                  : "border-white/20 hover:border-orange-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-3 gap-6 max-w-7xl mx-auto">
          {filtered.map(p => (
            <motion.img
              key={p.id}
              whileHover={{ scale: 1.04 }}
              src={p.img}
              className="mb-6 rounded-xl shadow-xl reveal"
              alt=""
            />
          ))}
        </div>
      </section>

      {/* ================= VIDEO REELS ================= */}
      <section className="py-28 px-6 md:px-20 bg-[#111117]">
        <h2 className="text-center text-4xl font-bold mb-16 reveal">
          Design Reels
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1,2,3].map(i => (
            <motion.video
              key={i}
              whileHover={{ scale: 1.05 }}
              autoPlay
              loop
              muted
              className="rounded-2xl shadow-xl reveal"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          ))}
        </div>
      </section>

      {/* ================= BEFORE AFTER ================= */}
      <section className="py-32 px-6 md:px-20 bg-black">
        <h2 className="text-center text-4xl font-bold mb-16 reveal">
          Before & After Transformation
        </h2>

        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl reveal">
          <motion.img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            className="w-full"
            alt=""
          />
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 400 }}
            className="absolute top-0 left-0 h-full overflow-hidden cursor-ew-resize"
            style={{ width: "50%" }}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 md:px-20 bg-gradient-to-r from-orange-500 to-orange-600 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 reveal">
          Let’s Design Something Iconic
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-orange-100 reveal">
          From interiors to digital products — we design experiences that last.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="px-10 py-4 bg-black rounded-full font-semibold"
        >
          Start Your Project
        </motion.button>
      </section>

    </div>
  );
}
