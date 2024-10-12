import { motion } from "framer-motion";
import { memo } from "react";

const AnimatedHeading = () => (
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Welcome to Our Service
  </motion.h1>
);

export default memo(AnimatedHeading);
