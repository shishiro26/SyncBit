"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Plus, Volume2 } from "lucide-react";

interface ActionButtonsProps {
  isRoomCodeComplete: boolean;
  onJoinRoom: () => void;
  onCreateRoom: () => void;
}

export function ActionButtons({
  isRoomCodeComplete,
  onJoinRoom,
  onCreateRoom,
}: ActionButtonsProps) {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.15 }}
      >
        <Button
          onClick={onJoinRoom}
          className={`w-full gradient-syncbit text-white font-semibold py-4 rounded-xl animate-gentle shadow-lg text-base button-hover-effect group relative  ${
            !isRoomCodeComplete
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-emerald-500/20 glow-syncbit-strong"
          }`}
          disabled={!isRoomCodeComplete}
        >
          <div className="flex items-center justify-center gap-3 relative z-10">
            <motion.div
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Play className="w-5 h-5" />
            </motion.div>
            Join Room
            <motion.div
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Volume2 className="w-4 h-4" />
            </motion.div>
          </div>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.15 }}
      >
        <Button
          onClick={onCreateRoom}
          variant="outline"
          className="w-full glass-subtle border-2 border-gray-600/30 hover:border-emerald-500/40 text-white font-semibold py-4 rounded-xl animate-gentle text-base bg-transparent button-hover-effect group hover:bg-emerald-950/10"
        >
          <div className="flex items-center justify-center gap-3 relative z-10">
            <motion.div
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-5 h-5" />
            </motion.div>
            Create New Room
          </div>
        </Button>
      </motion.div>
    </motion.div>
  );
}
