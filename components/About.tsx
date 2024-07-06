"use client";

import { ABOUT_TEXT, MontserratFont } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../public/test.svg";
import { cn } from "@/lib/utils";
import TitleText from "./ui/TitleText";

const About = () => {
  return (
    <div id="about" className="lg:py-8 py-4 border-b border-neutral-900">
      <TitleText title="About" width="w-[70px]" />
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex items-center justify-center">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={aboutImage}
              alt="about"
              className="rounded-lg opacity-90"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex justify-center lg:justify-start">
            <p
              className={cn(
                "max-w-xl text-md py-6 leading-10 text-justify",
                MontserratFont.className
              )}
            >
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
