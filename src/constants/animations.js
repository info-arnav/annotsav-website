
let dur = 0.2
export const btnVariant = {
  initial: {
    rotate: 0, opacity: 0,
   
  },
  hover: {
    scale: 1.2,
    color: "#FFF",
  },
  tap: {
    scale: [1.2, 1, 1.2],

  },

  btn2: {
    rotate: -10,
    opacity: 1,
    transition: {
      delay: dur,
    },
  },
  btn3: {
    rotate: 18,
    opacity: 1,
    transition: {
      delay: dur + 0.1,
    },
  },
  btn4: {
    rotate: [-10, 20, -8],
    opacity: 1,
    transition: {
      delay: dur + 0.2,
    },
  },
}

export const orgVariant = {
  hidden: { opacity: 0, display: 'none', overflow: "hidden" },
  visible: {
    opacity: 1,
    display: "flex",
    transition: { duration: 1, ease: "easeInOut" },
  },
}