"use client";

import { PoppinsFont, MontserratFont } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import dbtMeetupImg from "../public/talks/dbt_meetup.jpg";
import dbtMeetupImg2 from "../public/talks/dbt_meetup2.jpeg";
import { cn } from "@/lib/utils";
import TitleText from "./ui/TitleText";

const Talks = () => {
  return (
    <div
      id="talks"
      className="lg:pt-12 lg:pb-16 py-4 border-b border-neutral-800"
    >
      <TitleText title="Talks & Conferences" width="w-[280px]" />
      <div className="pt-8 flex flex-wrap pb-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-1/2"
        >
          <div className="flex items-center justify-center">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "53%", height: "auto" }}
              src={dbtMeetupImg}
              alt="dbtMeetupImg"
              className="rounded-lg opacity-90"
            />
          </div>
          <div
            className={cn(
              "text-center pt-4 tracking-wide",
              MontserratFont.className
            )}
          >
            Data Vault 2.0 with dbt
          </div>
          <div
            className={cn(
              "text-center tracking-wide",
              MontserratFont.className
            )}
          >
            dbt Meetup - Switzerland (Feb 2024)
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-1/2"
        >
          <div className="flex items-center justify-center">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "70%", height: "auto" }}
              src={dbtMeetupImg2}
              alt="dbtMeetupImg2"
              className="rounded-lg opacity-90"
            />
          </div>
          <div
            className={cn(
              "text-center pt-4 tracking-wide",
              MontserratFont.className
            )}
          >
            dbt semantic layer
          </div>
          <div
            className={cn(
              "text-center tracking-wide",
              MontserratFont.className
            )}
          >
            dbt Meetup - Belgium (June 2024)
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Talks;
