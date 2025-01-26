"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function Home() {
  const [currentButtonPosition, setCurrentButtonPosition] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const [counter, setCounter] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="main-header flex flex-row items-center justify-center h-[100vh] relative">
      <div className="flex flex-col w-[50vw]">
        <h1 className="text-white text-5xl">27TH JAN!!!</h1>
        <p>&nbsp;</p>
        <p className="text-md">
          You're probably seeing this after 12PM SO I GET THE PASS AND I LOVE
          YOU WAYYYYYYYY MOREEEE THAN YOUUUUUU CAN EVER IMAGINEEEEE{" "}
        </p>
        <div className="flex items-center">
          <img src="/uwu.gif" className="w-[8%]" />
          <img src="/cat.gif" className="w-[12%]" />
          <p className="animate-bounce">
            &lt;- This is literally me when you btw :)
          </p>
        </div>
        <button
          style={
            currentButtonPosition != null
              ? {
                  position: "absolute",
                  top: `${currentButtonPosition.y}px`,
                  left: `${currentButtonPosition.x}px`,
                  zIndex: 1000,
                  display: counter > 4 ? "none" : "unset"
                }
              : {}
          }
          ref={buttonRef}
          onClick={(e) => {
            const divWidth = buttonRef.current?.offsetWidth || 0;
            const divHeight = buttonRef.current?.offsetHeight || 0;
            const x = Math.random() * (window.innerWidth - divWidth);
            const y = Math.random() * (window.innerHeight - divHeight);

            setCounter((prevCounter) => {
              const newCounter = prevCounter + 1;

              if (newCounter % 5 === 0) {
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { x: x / window.innerWidth, y: y / window.innerHeight },
                });
                alert("yayy you lost hehe :3")
              }

              return newCounter;
            });

            // Update button position
            setCurrentButtonPosition({ x, y });
          }}
          className="bg-[#D2B48C] text-[#8B4513] w-[40%] p-4 pixel-border m-[25px]"
        >
          If you can click me, then You love me more &gt;:(
        </button>
        <Link style={counter > 4 ? {
          display: "unset"
        } : {
          display: "none"
        }} href={"/reason1"} className="bg-[#D2B48C] text-[#8B4513] w-[40%] p-4 pixel-border m-[25px] uppercase">Anyways Happy Birthday babyyyy I love you so much :)</Link>
      </div>
    </div>
  );
}
