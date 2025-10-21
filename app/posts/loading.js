"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  const [loading] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-6"
      > */}
        <ClipLoader
          color="#fff"
          loading={loading}
          size={120}
          speedMultiplier={1.2}
        />
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg font-medium tracking-wide"
        > */}
          <h1 className="text-3xl text-white font-bold">Loading your blog...</h1> 
        {/* </motion.p> */}
      {/* </motion.div> */}
    </div>
  );
}
