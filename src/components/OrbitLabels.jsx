import { motion } from "framer-motion";

const services = [
  { name: "Construction", angle: 0 },
  { name: "Designing", angle: 120 },
  { name: "IT Solutions", angle: 240 },
];

const OrbitLabels = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      {services.map((s, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 text-sm text-white font-medium"
          style={{
            transform: `
              rotate(${s.angle}deg)
              translate(160px)
              rotate(-${s.angle}deg)
            `,
          }}
        >
          <span className="px-3 py-1 bg-black/70 border border-orange-500/40 rounded-full">
            {s.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default OrbitLabels;
