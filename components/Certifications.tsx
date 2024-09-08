"use client";

import { CERTIFICATIONS } from "@/constants";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PoppinsFont, MontserratFont } from "@/constants";
import TitleText from "./ui/TitleText";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Certifications = () => {
  return (
    <div id="certifications" className="border-b border-neutral-800 lg:pt-12 lg:pb-16 py-4">
      <TitleText title="Certifications" width="w-[200px]" />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {CERTIFICATIONS.map((certification, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl p-4"
          >
            <a
              className="grid place-items-center"
              href={certification.url}
              target="_blank"
            >
              <img
                width={350}
                src={certification.image}
                alt={certification.name}
                className="rounded-lg opacity-100 h-[260px]"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
