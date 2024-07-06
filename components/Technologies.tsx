"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { MontserratFont } from "@/constants";
import Image from "next/image";

import airflowImg from "../public/technologies/airflow.png";
import awsImg from "../public/technologies/aws.png";
import gcpImg from "../public/technologies/gcp.png";
import gitImg from "../public/technologies/git.png";
import postgresqlImg from "../public/technologies/postgresql.png";
import pythonImg from "../public/technologies/python.png";
import terraformImg from "../public/technologies/terraform.png";
import dbtImg from "../public/technologies/dbt.png";
import mongodbImg from "../public/technologies/mongodb.png";
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

const technologies_list = [
  {
    src: pythonImg,
    alt: "python",
    variants: iconVariants(2.5),
  },
  {
    src: dbtImg,
    alt: "dbt",
    variants: iconVariants(3),
  },
  {
    src: airflowImg,
    alt: "airflow",
    variants: iconVariants(4),
  },
  {
    src: gcpImg,
    alt: "gcp",
    variants: iconVariants(5),
  },
  {
    src: awsImg,
    alt: "aws",
    variants: iconVariants(2),
  },
  {
    src: gitImg,
    alt: "git",
    variants: iconVariants(6),
  },
  {
    src: terraformImg,
    alt: "terraform",
    variants: iconVariants(6),
  },
  {
    src: mongodbImg,
    alt: "mongodb",
    variants: iconVariants(4),
  },
  {
    src: postgresqlImg,
    alt: "postgresql",
    variants: iconVariants(4),
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 py-16">
      <TitleText title="Technologies" width="w-[180px]" />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies_list.map((tech, index) => (
          <motion.div
            key={index}
            variants={tech.variants}
            initial="initial"
            animate="animate"
            className="rounded-2xl mr-3 ml-3"
          >
            <Image src={tech.src} width={100} height={0} alt={tech.alt} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
