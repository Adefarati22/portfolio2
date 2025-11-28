import { motion } from "framer-motion";
import {
  fadeInUp,
  popIn,
  slideIn,
  staggerContainer,
} from "../../component/MotionVariants";
import Projects from "../projects/Projects";
import Short from "@/component/Short";
import Contact from "../contact/Contact";
import Typewriter from "@/component/Typewriter";
import { TEXTS } from "@/utils/constant";
import useMetaArgs from "@/hooks/useMeta";
import { Link } from "react-router";

export default function Hero() {
  useMetaArgs({
    title: "Home - Esther-Portfolio",
    description: "home page of Esther Adefarati portfolio",
    keywords:
      "Home, portfolio, Esther, full-stack developer, web developer, MERN stack developer, developer",
  });
  return (
    <>
      <section className="min-h-[60vh] flex items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto px-5 lg:px-20 py-14 grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeInUp}>
            <motion.h1
              variants={popIn}
              className="lg:text-8xl text-5xl uppercase font-semibold"
            >
              Hi, i am{" "}
              <Typewriter words={TEXTS} typingSpeed={120} pauseTime={1500} />
            </motion.h1>
            <p className="text-lg my-6">
              A Nigerian based MERN stack developer passionate about building
              accessible and user friendly websites.
            </p>
            <div className="flex gap-4 items-center justify-start">
              <Link
                to="/contact"
                className="px-6 py-3 text-black text-xs md:text-lg font-semibold rounded-full bg-[#d3e97a] cursor-pointer hover:bg-[#b5cf4d]"
              >
                Contact Me
              </Link>
              <a
                href="https://www.linkedin.com/in/adefarati-toyosi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222222] rounded-full p-4 hover:bg-[#444444] cursor-pointer"
              >
                <img src="/link.svg" alt="linkdin" />
              </a>
              <a
                href="https://github.com/Adefarati22"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222222] rounded-full p-4 cursor-pointer hover:bg-[#444444]"
              >
                <img src="/git.svg" alt="github" />
              </a>
            </div>
          </motion.div>
          <motion.div variants={slideIn}>
            <img
              src="/placeholder.png"
              alt="placeholder"
              className="bg-[#c7c7c7] rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </section>
      <section>
        <Projects />
        <Short />
        <Contact />
      </section>
    </>
  );
}

// add a  type writer effect later
