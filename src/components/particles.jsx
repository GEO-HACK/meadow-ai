import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Load slim version for better performance
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Ensures particles stay in the background
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#00ff00" }, // Green futuristic glow
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: { min: 1, max: 4 } },
          links: { enable: true, distance: 150, color: "#00ff00", opacity: 0.5 },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
        },
        background: { color: "transparent" }, // Keeps the background of the site unchanged
      }}
    />
  );
};

export default ParticlesBackground;
