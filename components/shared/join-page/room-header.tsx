import { AudioWaveformIcon as Waveform } from "lucide-react";

export function RoomHeader() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold gradient-syncbit-text">
        Join SyncBit Room
      </h1>
      <p className="text-gray-400 text-base font-medium flex items-center justify-center gap-2">
        <Waveform className="w-4 h-4" />
        High precision audio streaming
      </p>
    </div>
  );
}
