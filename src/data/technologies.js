import {
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiRedis,
  SiOpenai,
} from "react-icons/si";

export const technologies = [
  {
    name: "React",
    icon: <FaReact className="text-sky-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="text-green-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "Redis",
    icon: <SiRedis className="text-red-500" />,
  },
  {
    name: "AI",
    icon: <SiOpenai className="text-violet-400" />,
  },
];