"use client";

import { HERO_CONTENT, PoppinsFont, MontserratFont } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import selfImage from "../public/selfImage.png";
import TypewriterComponent from "typewriter-effect";
import { cn } from "@/lib/utils";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 lg:py-8 py-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl font-thin tracking-tight text-center lg:text-7xl"
            >
              Nawfel BACHA
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className={cn(
                "py-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent",
                MontserratFont.className
              )}
            >
              <TypewriterComponent
                options={{
                  strings: [
                    "Data Engineer",
                    "Backend Engineer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className={cn(
                "max-w-xl font-light leading-8 text-justify lg:tracking-wide",
                MontserratFont.className
              )}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center"
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "75%", height: "auto" }}
              src={selfImage}
              alt="Nawfel Bacha"
              className="rounded-lg opacity-90 "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
