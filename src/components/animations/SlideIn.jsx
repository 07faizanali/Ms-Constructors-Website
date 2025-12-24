import { motion } from "framer-motion";

export default function SlideIn({ children, direction = "left" }) {
  const variants = {
    left: { x: -80, opacity: 0 },
    right: { x: 80, opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
