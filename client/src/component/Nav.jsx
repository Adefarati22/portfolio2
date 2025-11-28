import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "./MotionVariants";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-4 px-10 mx-auto flex items-center justify-between"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-xl font-bold cursor-pointer hover:text-[#d3e97a]">Adefarati Esther.</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <NavLink to="/" className={({isActive}) => `${isActive ? 'text-[#d3e97a]' : ''}` }><li className="cursor-pointer hover:text-[#d3e97a]">Home</li></NavLink>
       <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-[#d3e97a]' : ''}` }> <li className="cursor-pointer hover:text-[#d3e97a]">About</li> </NavLink>
       <NavLink to="/contact" className={({isActive}) => `${isActive ? 'text-[#d3e97a]' : ''}` }> <li className="cursor-pointer hover:text-[#d3e97a]">Contact</li></NavLink>
      </ul>

      {/* Mobile Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden cursor-pointer"
      >
        <img src="/menu.svg" alt="menu"/>
      </button>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.nav>
  );
};

export default Navbar;
