import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  driftX: number;
  driftY: number;
};

const maxParticles = 80;
const spawnIntervalMs = 16;
const particleLifetimeMs = 900;
const particlesPerMove = 3;

export default function MagicalCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastSpawnRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const spawnParticle = (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawnRef.current < spawnIntervalMs) {
        return;
      }
      lastSpawnRef.current = now;

      for (let i = 0; i < particlesPerMove; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 12;
        const drift = 8 + Math.random() * 18;
        const size = 3 + Math.random() * 7;
        const hue = 180 + Math.random() * 50;
        const id = idRef.current++;

        const particle = {
          id,
          x: event.clientX + Math.cos(angle) * distance,
          y: event.clientY + Math.sin(angle) * distance,
          size,
          hue,
          driftX: Math.cos(angle) * drift,
          driftY: Math.sin(angle) * drift - 6,
        };

        setParticles((prev) => {
          const next = [...prev, particle];
          if (next.length > maxParticles) {
            next.splice(0, next.length - maxParticles);
          }
          return next;
        });

        window.setTimeout(() => {
          setParticles((prev) => prev.filter((item) => item.id !== id));
        }, particleLifetimeMs);
      }
    };

    window.addEventListener("mousemove", spawnParticle);
    return () => window.removeEventListener("mousemove", spawnParticle);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full mix-blend-screen"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              background: `hsla(${particle.hue}, 100%, 70%, 0.9)`,
              boxShadow: `0 0 ${particle.size * 3}px hsla(${particle.hue}, 100%, 70%, 0.8)`,
            }}
            initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: 0.2,
              x: particle.driftX,
              y: particle.driftY,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: particleLifetimeMs / 1000, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
