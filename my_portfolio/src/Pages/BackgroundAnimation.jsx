import Particles from "@tsparticles/react";
import { useMemo } from "react";

function ParticleBackground() {
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },

      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
        },

        color: {
          value: "#3b82f6",
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },

        links: {
          enable: true,
          distance: 150,
          color: "#3b82f6",
          opacity: 0.25,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },

          resize: {
            enable: true,
          },
        },

        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.6,
            },
          },
        },
      },

      detectRetina: true,
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
}

export default ParticleBackground;