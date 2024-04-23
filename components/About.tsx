"use client";

import { ABOUT_TEXT, PoppinsFont, MontserratFont } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from '../public/aboutImage.png';
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
        <h2 className={cn("my-20 text-center text-4xl", MontserratFont.className)}>
            About
        </h2>
        <div className="flex flex-wrap">
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8"
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
                className="w-full lg:w-1/2"
            >
                <div className="flex justify-center lg:justify-start">
                    <p className={cn("my-2 maxw-xl py-6 leading-10 text-justify", MontserratFont.className)}>
                        {ABOUT_TEXT}  
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About