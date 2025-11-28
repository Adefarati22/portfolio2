import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
} from "@/component/MotionVariants";
import Contact from "../contact/Contact";
import Exp from "@/component/Exp";
import { skills } from "@/utils/constant";
import useMetaArgs from "@/hooks/useMeta";

export default function About() {
      useMetaArgs({
      title: "About - Esther-Portfolio",
      description:
        "about page of Esther Adefarati",
      keywords: "About, portfolio, Esther, full-stack developer, web developer, MERN stack developer, developer",
    });
  return (
    <section className="py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-10  px-5 lg:px-20 mx-auto"
      >
        {/* LEFT SIDE TEXT */}
        <motion.div
          variants={fadeInUp}
          className="grid lg:grid-cols-2 gap-12 justify-center "
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-4">About Me</h1>
          <div>
            <p className="text-lg leading-">
              I am a MERN stack developer based in Nigeria, passionate about
              building scalable, modern, and user-focused digital products.
            </p>

            <p className="text-gray-300 leading-7 my-4">
              I am focused on creating high-quality, responsive and visually
              engaging web applications. I enjoy turning ideas and designs into
              real products using technologies such as
              <span className="text-[#d3e97a] font-semibold">
                {" "}
                MongoDB, Express.js, React and Node.js.
              </span>
            </p>
            {/* BUTTONS + SOCIALS */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="/Ecv.pdf"
                download="Esther_CV"
                className="px-6 py-3 rounded-full bg-[#d3e97a] text-black font-medium hover:bg-[#b5cf4d] transition"
              >
                Download Resume
              </a>

              <div className="flex gap-4 items-center">
                <a
                  href="https://www.linkedin.com/in/adefarati-toyosi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/link.svg" alt="linkedin" className="w-7" />
                </a>
                <a
                  href="https://github.com/Adefarati22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/git.svg" alt="github" className="w-7" />
                </a>
                <a
                  href="https://www.instagram.com/adefaratie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/insta.svg" alt="instagram" className="w-7" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#c7c7c7] rounded-2xl flex items-center justify-center"
        >
          <img src="/2.png" alt="profile placeholder" />
        </motion.div>
      </motion.div>
      <motion.div
      variants={staggerContainer}
        initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
       className="lg:flex gap-10 justify-between py-20 border-b border-gray-400  px-5 lg:px-20 mx-auto">
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-bold mb-4"
        >
          My Capabilities
        </motion.h1>
        <motion.div variants={fadeInUp}>
          <p>I am always looking for more skills to learn.</p>
          <div className="mt-5 grid grid-cols-4 gap-4 justify-center">
            {skills.map((skill) => (
              <spam className="text-[#d3e97a] border border-white rounded-full btn" key={skill.id}>{skill.name}</spam>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Exp/>
      <Contact />
    </section>
  );
}
