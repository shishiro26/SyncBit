"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";

interface OtpInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  length?: number;
}

export function OtpInput({ value, onChange, length = 6 }: OtpInputProps) {
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (index: number, inputValue: string) => {
    if (inputValue.length > 1) return;

    const sanitizedValue = inputValue.replace(/[^0-9A-Z]/gi, "").toUpperCase();
    const newValue = [...value];
    newValue[index] = sanitizedValue;
    onChange(newValue);

    if (sanitizedValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
        setActiveInput(index - 1);
      } else {
        const newValue = [...value];
        newValue[index] = "";
        onChange(newValue);
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveInput(index - 1);
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9A-Z]/gi, "")
      .toUpperCase()
      .slice(0, length);

    const newValue = [...value];
    for (let i = 0; i < pastedData.length && i < length; i++) {
      newValue[i] = pastedData[i];
    }
    onChange(newValue);

    const focusIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[focusIndex]?.focus();
    setActiveInput(focusIndex);
  };

  return (
    <div className="flex justify-center gap-3 mb-4">
      {Array.from({ length }, (_, index) => (
        <div key={index} className="relative">
          <input
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            value={value[index] || ""}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => setActiveInput(index)}
            className={`w-14 h-16 glass-subtle rounded-xl border-2 text-center text-xl font-bold text-white font-mono animate-fast focus:outline-none ${
              activeInput === index
                ? "border-emerald-400 bg-emerald-950/20 glow-syncbit"
                : value[index]
                ? "border-emerald-500/40 bg-emerald-950/10"
                : "border-gray-600/30 hover:border-gray-500/50"
            }`}
            maxLength={1}
            autoComplete="off"
          />
        </div>
      ))}
    </div>
  );
}
