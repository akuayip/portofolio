import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
      },
    },

    color: {
      value: "#ffffff",
    },

    shape: {
      type: "circle",
    },

    size: {
      value: {
        min: 1,
        max: 4,
      },
    },

    opacity: {
      value: 0.5,
    },

    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },

    move: {
      enable: true,
      speed: 4,
      warp: true,
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      speed: 6,
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 7,
      },
    },
  },
};
export default options;
