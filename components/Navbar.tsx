import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { PoppinsFont, MontserratFont } from "@/constants";
import { cn } from "@/lib/utils";

import logoImage from "../public/mainLogo.png";
import Link from "next/link";

const buttons = [
  {
    title: "About",
    id: "#about",
  },
  {
    title: "Technologies",
    id: "#technologies",
  },
  {
    title: "Experiences",
    id: "#experiences",
  },
  {
    title: "Certifications",
    id: "#certifications",
  },
  {
    title: "Talks",
    id: "#talks",
  },
  {
    title: "Publications",
    id: "#publications",
  },
];

const Navbar = () => {
  return (
    <nav className="sm:flex items-center justify-between py-6">
      <a
        href="/"
        className="flex flex-shrink-0 justify-center sm:justify-normal"
      >
        <Image width={40} height={40} src={logoImage} alt="logo" />
      </a>
      <div className="ml-3">
        <ul className="flex mr-8 justify-center sm:flex">
          {buttons.map((button, index) => (
            <li
              key={index}
              className={cn(
                "text-xs mb-2 ml-3 sm:text-base sm:mr-5 sm:ml-5 hover:opacity-75 hover:text-pink-200",
                MontserratFont.className
              )}
            >
              <Link href={button.id}>{button.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-6 sm:m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/nawfel-bacha/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailto:nawfel.bacha@proton.me" target="_blank">
          <MdOutlineMailOutline />
        </a>
        <a href="https://github.com/NawfelBC" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
