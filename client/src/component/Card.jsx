import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "framer-motion";

export default function ProjectCard({
  src,
  alt,
  title,
  description,
  liveUrl,
  githubUrl,
  year,
  Role,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      <div className="bg-[#1a1a1a] rounded-lg w-full md:h-full lg:h-[70vh]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="mx-auto block w-full lg:h h-full object-cover rounded-lg p-10"
        />
      </div>

      <div className="p-5 w-full ">
        <h3 className="text-xl md:text-4xl font-medium mb-2">{title}</h3>
        <p className="text-sm md:text-xl text-gray-400 mb-4">{description}</p>

        <div className="space-y-4">
          <h5 className="text-lg font-semibold"> PROJECT INFO </h5>
          <div className="border-b border-gray-600" />
          <h5 className="flex justify-between">
            Year<spam className="text-gray-400">{year}</spam>
          </h5>
          <div className="border-b border-gray-600 text-xs md:text-sm" />
          <h5 className="flex justify-between">
            Role<spam className="text-gray-400 text-xs md:text-sm">{Role}</spam>
          </h5>
          <div className="border-b border-gray-600" />
        </div>

        <div className="flex items-center justify-between mt-3 gap-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d3e97a] font-medium border-b-2 flex gap-1 justify-center items-center text-xs md:text-sm"
          >
            Live Demo <RiArrowRightUpLine size={26} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d3e97a] font-medium border-b-2 flex gap-1 justify-center items-center text-xs md:text-sm"
          >
            See on GitHub <img src="/git.svg" alt="github" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
