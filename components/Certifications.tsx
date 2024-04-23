"use client";

import { CERTIFICATIONS } from "@/constants";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PoppinsFont, MontserratFont } from "@/constants";

const iconVariants = (duration:number): Variants => ({
    initial: {y: -10},
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
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            id="certifications"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 1.5 }}
            className={cn("my-20 text-center text-4xl", MontserratFont.className)}
        >
            Certifications
        </motion.h2>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100}}
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
                <a className="grid place-items-center" href={certification.url} target="_blank">
                    <img
                        width={350}
                        height={20}
                        src={certification.image}
                        alt={certification.name}
                        className="rounded-lg opacity-100"
                    />
                </a>
                    
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Certifications