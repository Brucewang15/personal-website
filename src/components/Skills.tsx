// Skills.tsx
"use client";

import React from "react";
 // Ensure correct import path

// Importing from react-icons/fa (Font Awesome)
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";

// Importing from react-icons/si (Simple Icons)
import {
    SiFlask,
    SiPytorch,
    SiNumpy,
    SiMusicbrainz,
    SiDjango,
    SiSqlite,
    SiMysql,
    SiNextdotjs,
    SiTailwindcss,
    SiPostgresql,
    SiDocker,
    SiTypescript,
    SiOpencv,
    SiTensorflow,
} from "react-icons/si";

import { JSX } from "react";
import InfiniteCarousel from "./ui/infinite-carousel";

type CarouselItem = {
    icon: JSX.Element;
    label: string;
};

const Skills: React.FC = () => {
    const techIcons: Record<string, JSX.Element> = {
        // Existing Icons
        "Node.js": <FaNodeJs className="text-green-500 text-4xl" />,
        Flask: <SiFlask className="text-gray-500 text-4xl" />,
        PyTorch: <SiPytorch className="text-red-500 text-4xl" />,
        NumPy: <SiNumpy className="text-blue-500 text-4xl" />,
        Music21: <SiMusicbrainz className="text-purple-500 text-4xl" />,
        Django: <SiDjango className="text-green-800 text-4xl" />,
        SQLite: <SiSqlite className="text-blue-500 text-4xl" />,
        React: <FaReact className="text-blue-400 text-4xl" />,
        SQL: <SiMysql className="text-orange-500 text-4xl" />, // Adjust based on specific SQL technologies

        // New Icons
        "Next.js": <SiNextdotjs className="text-white text-4xl" />, // Next.js doesn't have an official color, white is commonly used
        "Tailwind CSS": <SiTailwindcss className="text-blue-400 text-4xl" />,
        PostgreSQL: <SiPostgresql className="text-blue-600 text-4xl" />,
        Docker: <SiDocker className="text-blue-500 text-4xl" />,
        TypeScript: <SiTypescript className="text-blue-600 text-4xl" />,
        Python: <FaPython className="text-yellow-500 text-4xl" />,
        OpenCV: <SiOpencv className="text-teal-500 text-4xl" />,
        TensorFlow: <SiTensorflow className="text-orange-400 text-4xl" />,
    };

    // Define your skills
    const skills: CarouselItem[] = [
        { icon: techIcons["Node.js"], label: "Node.js" },
        { icon: techIcons["Django"], label: "Django" },
        { icon: techIcons["Flask"], label: "Flask" },
        { icon: techIcons["NumPy"], label: "NumPy" },
        { icon: techIcons["Next.js"], label: "Next.js" },
        { icon: techIcons["Tailwind CSS"], label: "Tailwind CSS" },
        { icon: techIcons["PostgreSQL"], label: "PostgreSQL" },
        { icon: techIcons["Docker"], label: "Docker" },
        { icon: techIcons["TypeScript"], label: "TypeScript" },
        { icon: techIcons["Python"], label: "Python" },
        { icon: techIcons["SQL"], label: "SQL" },
        { icon: techIcons["PyTorch"], label: "PyTorch" },
        { icon: techIcons["OpenCV"], label: "OpenCV" },
        { icon: techIcons["TensorFlow"], label: "TensorFlow" },
        // Add more skills as needed
    ];

    // Split skills into top and bottom
    const half = Math.ceil(skills.length / 2);
    const top: CarouselItem[] = skills.slice(0, half);
    const bottom: CarouselItem[] = skills.slice(half);

    return (
        <div className="w-[80%] justify-center text-center mx-auto flex flex-col gap-10">
            <div className="lg:text-4xl sm:text-2xl font-bold">Skills</div>

            {/* Infinite Carousel */}
            <InfiniteCarousel top={top} bottom={bottom} />

            {/* Optional: Additional content below the carousel */}
        </div>
    );
};

export default Skills;
