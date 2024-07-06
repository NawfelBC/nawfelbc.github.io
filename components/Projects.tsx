"use client";

import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PoppinsFont, MontserratFont } from "@/constants";
import TitleText from "./ui/TitleText";

const Projects = () => {
  return (
    <div
      id="projects"
      className="border-b border-neutral-800 lg:pt-12 lg:pb-16 py-4"
    >
      <TitleText title="Side Projects" width="w-[220px]" />
      <div className="pt-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p
                className={cn(
                  "mb-2 text-sm text-neutral-400",
                  MontserratFont.className
                )}
              >
                {project.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className={cn("mb-2 text-lg", MontserratFont.className)}>
                {project.title}
              </h6>
              {project.description.map((desc, index) => (
                <li
                  key={index}
                  className={cn(
                    "mb-4 text-neutral-400 tracking-wide",
                    MontserratFont.className
                  )}
                >
                  {desc}
                </li>
              ))}
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-[#ACA7CB]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
