import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div intial = {{opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{opacity: 0}}>
      <div className="font-bold text-3xl p-3">Home</div>
    </motion.div>
  );
};

export default Home;
