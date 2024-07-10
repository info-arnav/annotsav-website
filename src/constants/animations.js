
let dur = 0.2
export const btnVariant = {
  initial: {
     display: 'none',
  },
  hover: {
    scale: 1.2,
    color: "#FFF",
  },
  tap: {
    scale: [1.2, 1, 1.2],

  },

  btn2: {
    display: 'block',
    transition: {
      delay: dur,
    },
  },
  btn3: {
    display: 'block',
    transition: {
      delay: dur + 0.1,
    },
  },
  // btn4: {
  //   rotate: [-10, 20, -8],
  //   opacity: 1,
  //   transition: {
  //     delay: dur + 0.2,
  //   },
  // },
}

export const orgVariant = {
  hidden: { opacity: 0, display: 'none', overflow: "hidden" },
  visible: {
    opacity: 1,
    display: "flex",
    transition: { duration: 1, ease: "easeInOut" },
  },
}

export const menuVariant = {
  dash1: {
    rotate: -40,
    y: 8,
  },
  dash2: {
    opacity: 0,
  },
  dash3: {
    rotate: 40,
    y: -8,
  },
  close: {
    x: "200%",
  },
  open: {
    x: "0",
  },
}

export const menuItemVariant = {
  hover: {
    color: "white",
    backgroundColor: "#365e32",
  },
  hidden: {
    opacity: 0,
  },
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: 0.3 * index,
    },
  }),
  tap:{
    backgroundColor: "#365e32",
    color: "white",
  }
}