"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, User } from "lucide-react";
import { useState } from "react";
import { generateUsername } from "@/lib/username";

export function UsernameSection() {
  const [username, setUsername] = useState("audio-lover");
  const onRegenerate = () => {
    setUsername(generateUsername());
  };
  return (
    <motion.div
      className="mb-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <User className="w-4 h-4 text-gray-500" />
        <p className="text-gray-400 text-base font-medium">
          Joining as{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={username}
              className="gradient-syncbit-text font-bold text-lg inline-block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {username}
            </motion.span>
          </AnimatePresence>
        </p>
      </div>

      <motion.button
        onClick={onRegenerate}
        className="text-emerald-400 text-sm hover:text-emerald-300 animate-fast flex items-center gap-2 mx-auto font-medium cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          animate={{ rotate: 0 }}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <Shuffle className="w-4 h-4" />
        </motion.div>
        Generate new username
      </motion.button>
    </motion.div>
  );
}
