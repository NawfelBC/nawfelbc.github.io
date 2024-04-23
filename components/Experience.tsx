"use client";

import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PoppinsFont, MontserratFont } from "@/constants";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5 }}
            className={cn("my-20 text-center text-4xl", MontserratFont.className)}
        >
            Experience
        </motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100}}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4"
                    >
                        <p className={cn("mb-2 text-sm text-neutral-400", MontserratFont.className)}>{experience.year}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100}}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4"
                    >
                        <h6 className="mb-2">
                        <span className={cn("text-lg", MontserratFont.className)}>{experience.role} </span>- <a href={experience.company_website} target="_blank" className={cn("text-purple-200 text-sm hover:opacity-75", MontserratFont.className)}>
                                {experience.company}
                            </a>
                        </h6>
                        <ul>
                            {experience.description.map((desc, index) => (
                                <li
                                    key={index}
                                    className={cn("mb-4 text-neutral-400", MontserratFont.className)}
                                >
                                    - {desc}
                                </li>
                            ))}
                        </ul>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-3 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience