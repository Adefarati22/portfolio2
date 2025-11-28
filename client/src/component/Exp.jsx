import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./MotionVariants";

export default function Exp() {
  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.7 }}
    className="py-20"
    >
      <div className="lg:flex gap-10 justify-between py-20 border-b border-gray-400  px-5 lg:px-20 mx-auto">
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-bold mb-4"
        >
          My Experience
        </motion.h1>
        <motion.div variants={fadeInUp}>
          <div>
            <div className="lg:flex justify-between mb-3">
              <h4 className="lg:text-xl font-semibold">Freelance Developer</h4>
              <p className="text-gray-400">Sep 2025 - Oct 2025</p>
            </div>
            <h3 className="text-[#d3e97a] font-bold mb-2">NAAC</h3>

            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>
                Built RESTful APIs for artist authentication and artwork CRUD
              </li>
              <li>Designed responsive gallery and upload dashboard</li>
              <li>Created admin panel for client management</li>
              <li>Integrated Cloudinary and deployed on Vercel</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
