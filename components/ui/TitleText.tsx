import { MontserratFont } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const TitleText = ({ title, width }: { title: string; width: string }) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <motion.h2
        id={title}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={cn(
          "text-center font-bold text-4xl lg:text-5xl",
          MontserratFont.className
        )}
      >
        {title}
      </motion.h2>
      <div className="flex mt-4">
        <div
          className={`h-[4px] ${width} bg-purple-200 rounded-full mr-4`}
        ></div>
        <div className="h-[4px] w-[30px] bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default TitleText;
