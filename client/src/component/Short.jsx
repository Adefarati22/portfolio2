import { motion } from "framer-motion";
import { fadeInUp, slideIn, staggerContainer } from "./MotionVariants";
import { Link } from "react-router";

export default function Short() {
  return (
    <section className="py-20 border-t border-b border-gray-400 h-screen">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto hidden px-5 lg:px-20 md:grid lg:grid-cols-2 gap-12 justify-center"
      >
        <motion.h1 variants={slideIn} className="text-5xl md:text-8xl font-bold mb-4">
          About Me
        </motion.h1>

        <motion.div variants={fadeInUp} className="space-y-4">
          <h3 className="font-medium text-lg md:text-3xl max-w-2xl">
            I am a MERN stack developer based in Nigeria. Has a BSC in
            Microbiology.{" "}
          </h3>
          <p className="text-sm md:text-lg text-gray-400 mb-6">
            I am a fullstack developer based in Nigeria looking for exciting
            opportunities. Has Microbiology background. Likes to focus on
            accessibility when developing. Passionate and curious about solving
            problems. Currently, I'm exploring Reactjs, Typescript, vitest and a
            bit of Designing. While I am not programming, I enjoy playing
            cooking, singing, listening to music, and swimming. Learning more to
            improve skill.
          </p>
          <Link
            to={"/about"}
            className="text-[#d3e97a] font-bold hover:text-[#b5cf4d] cursor-pointer border-b-2"
          >
            MORE ABOUT ME
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
      className="mx-auto md:hidden px-5"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm md:text-lg text-gray-400 mb-6">
            I am a fullstack developer based in Nigeria looking for exciting
            opportunities. Has Microbiology background. Likes to focus on
            accessibility when developing. Passionate and curious about solving
            problems. Currently, I'm exploring Reactjs, Typescript, vitest and a
            bit of Designing. While I am not programming, I enjoy playing
            cooking, singing, listening to music, and swimming. Learning more to
            improve skill.
          </p>
          <Link
            to={"/about"}
            className="text-[#d3e97a] font-bold hover:text-[#b5cf4d] cursor-pointer border-b-2"
          >
            MORE ABOUT ME
          </Link>
          <img src="/also.png" alt="placeholder" className="h-auto w-full max-w-sm mx-auto block py-4"/>
      </motion.div>
    </section>
  );
}
