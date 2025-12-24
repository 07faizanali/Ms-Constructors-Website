import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

/* ---------------- ANIMATION HELPERS ---------------- */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeIn = (direction = "up", delay = 0, duration = 0.6) => {
  const y = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const x = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration, ease: "easeOut" },
    },
  };
};

const slideIn = (direction = "right", delay = 0, duration = 0.6) => {
  const x = direction === "right" ? 100 : -100;
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay, duration, ease: "easeOut" },
    },
  };
};

/* ---------------- DATA ---------------- */

const coreValues = [
  {
    title: "Innovation",
    description: "Always evolving with emerging technologies",
  },
  {
    title: "Integrity",
    description: "Building trust through honesty and transparency",
  },
  {
    title: "Client-Centricity",
    description: "Solutions tailored to each client's vision and needs",
  },
  {
    title: "Excellence",
    description: "Committed to high standards and consistent quality",
  },
];

/* ---------------- COMPONENT ---------------- */

const AboutSection = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (!element) return;

    const offset = -80;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-20 bg-zinc-950 text-zinc-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1350&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl border border-zinc-800"
            />

            <motion.div
              variants={slideIn("right", 0.4)}
              className="absolute -bottom-14 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
            >
              <p className="text-lg font-semibold mb-1">Our Vision</p>
              <p className="text-sm opacity-90">
                To become a trusted global partner in digital transformation
              </p>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={fadeIn("left", 0.2)}>
            <span className="inline-block mb-4 text-emerald-400 text-sm uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Combine Technology & Legal Expertise
            </h2>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Softbeem is a forward-thinking technology and legal services company
              that empowers businesses with innovative and reliable solutions.
              We bridge the gap between cutting-edge technology and legal
              compliance.
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3">
                Our Mission
              </h3>
              <p className="text-zinc-400">
                To empower businesses through innovative technology and expert
                legal guidance, delivering solutions that are efficient,
                compliant, and future-ready.
              </p>
            </div>

            {/* CORE VALUES */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            >
              {coreValues.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", index * 0.1)}
                  className="flex items-start gap-4"
                >
                  <div className="bg-emerald-500/10 p-2 rounded-md">
                    <Check className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <button
              onClick={() => scrollToSection("#services")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium"
            >
              Explore Our Services <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
