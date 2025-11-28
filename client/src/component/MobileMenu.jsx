import { motion } from "framer-motion";
import { menuVariants } from "./MotionVariants";
import { Link } from "react-router";
import { RiCloseLargeLine } from "@remixicon/react";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed inset-0 bg-white backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden z-50"
    >
      <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-2xl text-black cursor-pointer">
      <RiCloseLargeLine size={24}/>
      </button>

      <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-black cursor-pointer hover:text-[#b5cf4d]">Home</Link>
      <Link to="/about" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-black cursor-pointer hover:text-[#b5cf4d]">About</Link>
      <Link to="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-black cursor-pointer hover:text-[#b5cf4d]">Contact</Link>
    </motion.div>
  );
};

export default MobileMenu;
