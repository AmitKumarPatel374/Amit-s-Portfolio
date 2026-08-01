import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedis,
} from "react-icons/si";

export const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-sky-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    icon: FaDatabase,
    color: "text-green-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "text-red-500",
  },
  {
    name: "AI",
    icon: TbBrandOpenai,
    color: "text-violet-400",
  },
];