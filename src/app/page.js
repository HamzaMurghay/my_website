"use client"

import { useRef } from 'react';
import Image from 'next/image';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current?.play();
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Hello! My Name is Hamza</h1>
      </div>

      <div className="flex space-x-2.5 justify-center mt-4">
        <Image
          src="/images/Bombardilo.jpeg"
          alt="suka blyat croco go boom boom"
          width={500}
          height={300}
        />
        <Image
          src="/images/Bombardilo.jpeg"
          alt="suka blyat croco go boom boom"
          width={500}
          height={300}
        />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={playSound}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          🔊 Play Sound
        </button>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef}>
        <source src="/audio/bombardiro-crocodilo_4kNJ6me.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
