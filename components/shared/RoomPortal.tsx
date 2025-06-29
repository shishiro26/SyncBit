"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundEffects } from "@/components/shared/join-page/background-effects";
import { RoomHeader } from "@/components/shared/join-page/room-header";
import { OtpInput } from "@/components/shared/join-page/otp-input";
import { UsernameSection } from "@/components/shared/join-page/username-section";
import { ActionButtons } from "@/components/shared/join-page/action-buttons";
import { QualityIndicator } from "@/components/shared/join-page/quality-indicator";

export default function SyncBitRoomJoin() {
  const [roomCode, setRoomCode] = useState<string[]>(Array(6).fill(""));

  const handleJoinRoom = () => {
    const code = roomCode.join("");
    console.log("Joining SyncBit room with code:", code);
    // Navigate to audio player room
  };

  const handleCreateRoom = () => {
    console.log("Creating new SyncBit room");
    // Generate room code and navigate
  };

  const isRoomCodeComplete = roomCode.every((code) => code !== "");

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden flex items-center justify-center font-['Inter',sans-serif]">
      <BackgroundEffects />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="glass-subtle rounded-2xl p-8 w-[500px] shadow-xl border border-gray-700/30"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <RoomHeader />

          <motion.div
            className="mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <OtpInput value={roomCode} onChange={setRoomCode} length={6} />
          </motion.div>

          <UsernameSection />

          <ActionButtons
            isRoomCodeComplete={isRoomCodeComplete}
            onJoinRoom={handleJoinRoom}
            onCreateRoom={handleCreateRoom}
          />

          <QualityIndicator />
        </motion.div>
      </motion.div>
    </div>
  );
}
