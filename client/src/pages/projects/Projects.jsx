import { motion } from "framer-motion";
import { projects } from "../../utils/constant";
import ProjectCard from "@/component/Card";
import { fadeInUp, staggerContainer } from "@/component/MotionVariants";

export default function Projects () {  

  return (
    <section className="py-20 border-t border-gray-400">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className=" mx-auto px-5 lg:px-20"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-7xl font-bold mb-4 "
        >
          Featured Projects
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="max-w-2xl mx-aut text-gray-200 mb-12"
        >
        Here are some of the selected projects that showcase my passion for front-end development.
        </motion.p>

        {/* Grid Layout */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-16"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              src={project.image}
              alt={project.title}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              year={project.year}
              Role={project.role}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

