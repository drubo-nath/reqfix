"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe3D, GlobeMarker } from "./3d-globe";

const sampleMarkers: GlobeMarker[] = [
   {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "Buenos Aires",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Singapore",
  },

  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9568,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: 37.5665,
    lng: 126.978,
    src: "https://assets.aceternity.com/avatars/13.webp",
    label: "Seoul",
  },
];

const issues = [
  "The boiler stopped working this morning.",
  "Water is leaking from the ceiling in the kitchen.",
  "Heating won't turn on and it's freezing!",
  "Power went out in the master bedroom.",
  "Front door lock is completely jammed.",
  "The toilet is overflowing!",
  "Dishwasher is making a terrible grinding noise.",
  "Air conditioning just blew warm air.",
  "Window pane cracked from the storm.",
];

export default function Globe3DHero() {
  const [currentIssue, setCurrentIssue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIssue((prev) => (prev + 1) % issues.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none md:pointer-events-auto my-0 md:my-20">
      {/* 3D Globe Background */}
      <div className="absolute inset-0 z-0">
        <Globe3D
          markers={sampleMarkers}
          config={{
            atmosphereColor: "#c1c8cf",
            atmosphereIntensity: 10,
            bumpScale: 5,
            autoRotateSpeed: 0.3,
            initialRotation: { x: 0, y: Math.PI * 1.2 }, 
          }}
          onMarkerClick={(marker) => {
            console.log("Clicked marker:", marker.label);
          }}
        />
      </div>

      {/* Floating Animated Bubbles - Repositioned for Center Hero Layout */}
      {/* Hidden on mobile to keep the focused MVP layout clean */}
      <div className="absolute top-[20%] right-[5%] z-10 w-auto max-w-xs pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIssue}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 items-end"
          >
             {/* Glassmorphism Message Card */}
            <div className="bg-white/5 backdrop-blur-xl shadow-2xl rounded-2xl rounded-tr-sm px-6 py-4 text-sm text-white border border-white/10 max-w-full relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-50" />
               <div className="relative z-10">
                 <span className="text-emerald-400 font-bold text-[10px] tracking-wider mb-2 block uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Incident
                 </span>
                 <p className="leading-relaxed text-neutral-200">
                  "{issues[currentIssue]}"
                 </p>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
