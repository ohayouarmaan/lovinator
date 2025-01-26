"use client";
import { useEffect, useRef } from "react";

interface BackgroundAudioProps {
  src: string;
  volume?: number;
}

export default function BackgroundAudio({ src, volume = 0.5 }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = volume; // Set the volume
      audio.loop = true; // Enable looping
      audio.play().catch(console.error); // Try to autoplay the audio
    }
  }, [volume]);

  return <audio ref={audioRef} src={src} />;
}
