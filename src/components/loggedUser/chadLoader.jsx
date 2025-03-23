import React from "react";
import { motion } from "framer-motion";

const ChatLoader = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-gray-400 rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
};

export default ChatLoader;
