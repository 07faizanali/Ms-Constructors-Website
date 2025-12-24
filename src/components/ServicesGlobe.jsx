import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ServicesGlobe = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative w-[380px] h-[380px]">
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: {
              value: 90,
              density: { enable: true, area: 800 },
            },
            color: {
              value: ["#ff8c42", "#ffffff", "#ff5e00"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.9,
            },
            size: {
              value: { min: 2, max: 3 },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 80 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* CENTER TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h3 className="text-orange-400 text-xl font-semibold tracking-wide">
          Our Services
        </h3>
        <p className="text-white mt-2 text-sm">
          Construction • Designing • IT Solutions
        </p>
      </div>
    </div>
  );
};

export default ServicesGlobe;
