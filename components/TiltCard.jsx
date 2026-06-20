"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TiltCard({ children, className, intensity = 10 }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ rx: 0, ry: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * intensity * 2;
    const rx = -(py - 0.5) * intensity * 2;
    setTransform({ rx, ry });
  };

  const reset = () => setTransform({ rx: 0, ry: 0 });

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ rotateX: transform.rx, rotateY: transform.ry }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}