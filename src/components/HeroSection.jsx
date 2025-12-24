import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ArrowRight } from "lucide-react";
import { useCallback } from "react";

/* ---------------- SERVICES ---------------- */

const services = [
  { name: "Construction", angle: 0 },
  { name: "Designing", angle: 120 },
  { name: "IT Solutions", angle: 240 },
];

/* ---------------- COMPONENT ---------------- */

const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/herosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-orange-500">Solutions</span>
            </h1>

            <p className="text-gray-300 max-w-xl mb-10">
              Construction, Designing & IT solutions crafted for modern
              enterprises.
            </p>

            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg flex items-center gap-2 hover:bg-orange-700">
              Explore Services <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* RIGHT : GLOBE */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[360px] h-[360px]">

              {/* GLOBE CONTAINER */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full overflow-hidden border border-orange-500/40"
              >
                <Particles
                  init={particlesInit}
                  options={{
                    fullScreen: false,
                    particles: {
                      number: {
                        value: 120,
                        density: { enable: true, area: 800 },
                      },
                      color: { value: "#ff7a18" },
                      size: { value: 2 },
                      opacity: { value: 0.9 },
                      move: {
                        enable: true,
                        speed: 0.3,
                      },
                    },
                  }}
                />
              </motion.div>

              {/* CENTER TEXT */}
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <h3 className="text-orange-400 text-xl font-semibold">
                    Services
                  </h3>
                  <p className="text-white text-sm">360° Solutions</p>
                </div>
              </div>

              {/* ORBITING SERVICES */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `
                        rotate(${s.angle}deg)
                        translate(160px)
                        rotate(-${s.angle}deg)
                      `,
                    }}
                  >
                    <span className="px-3 py-1 text-sm text-white bg-black/70 border border-orange-500/40 rounded-full">
                      {s.name}
                    </span>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
