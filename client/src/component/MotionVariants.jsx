export const fadeInUp = {
hidden: { opacity: 0, y: 40 },
show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } }
};


export const slideIn = {
hidden: { opacity: 0, x: -60 },
show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


export const staggerContainer = {
hidden: {},
show: {
transition: { staggerChildren: 0.15 }
}
};


export const popIn = {
hidden: { opacity: 0, scale: 0.9 },
show: {
opacity: 1,
scale: 1,
transition: { duration: 0.8, ease: "easeOut" }
}
};

export const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const menuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

