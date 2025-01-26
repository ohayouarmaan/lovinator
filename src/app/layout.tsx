"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundAudio from "@/components/audio";
import { useRef, useEffect, useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioStarted, setAudioStarted] = useState(false);

  const startAudio = () => {
    console.log("SHOULD START", audioRef.current, audioStarted)
    if (audioRef.current && !audioStarted) {
      audioRef.current.play();
      setAudioStarted(true);
    }
  };


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <div style={{
          opacity: !audioStarted ? 1 : 0,
          display: !audioStarted ? "fixed" : "none",
          zIndex: !audioStarted ? 1000 : -1,
        }} className="z-[10000] h-[100vh] w-[100vw] bg-black text-white flex flex-col items-center justify-center transition-opacity">
          <button className="bg-gray-400 p-6" onClick={startAudio}>
            Click To Start :3
          </button>
        </div>
        <audio ref={audioRef} autoPlay loop>
          <source src="/Vacations - Telephones.mp3" type="audio/mp3" />
        </audio>
        {children}
      </body>
    </html>
  );
}
