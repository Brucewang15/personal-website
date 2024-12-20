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
    SiOpenai,
    SiSupabase,
    SiMongodb,
} from "react-icons/si";

import { JSX } from "react";
import InfiniteCarousel from "./ui/infinite-moving-cards";

type CarouselItem = {
    icon: JSX.Element;
    name: string;
};

const Skills: React.FC = () => {
    // const techIcons: Record<string, JSX.Element> = {
    //     // Existing Icons
    //     "Node.js": <FaNodeJs className="text-green-500 text-4xl" />,
    //     Flask: <SiFlask className="text-gray-500 text-4xl" />,
    //     PyTorch: <SiPytorch className="text-red-500 text-4xl" />,
    //     NumPy: <SiNumpy className="text-blue-500 text-4xl" />,
    //     Music21: <SiMusicbrainz className="text-purple-500 text-4xl" />,
    //     Django: <SiDjango className="text-green-800 text-4xl" />,
    //     SQLite: <SiSqlite className="text-blue-500 text-4xl" />,
    //     React: <FaReact className="text-blue-400 text-4xl" />,
    //     SQL: <SiMysql className="text-orange-500 text-4xl" />, // Adjust based on specific SQL technologies

    //     // New Icons
    //     "Next.js": <SiNextdotjs className="text-white text-4xl" />, // Next.js doesn't have an official color, white is commonly used
    //     "Tailwind CSS": <SiTailwindcss className="text-blue-400 text-4xl" />,
    //     PostgreSQL: <SiPostgresql className="text-blue-600 text-4xl" />,
    //     Docker: <SiDocker className="text-blue-500 text-4xl" />,
    //     TypeScript: <SiTypescript className="text-blue-600 text-4xl" />,
    //     Python: <FaPython className="text-yellow-500 text-4xl" />,
    //     OpenCV: <SiOpencv className="text-teal-500 text-4xl" />,
    //     TensorFlow: <SiTensorflow className="text-orange-400 text-4xl" />,
    // };

    const techIcons: Record<string, JSX.Element> = {
        // Existing Icons
        "Node.js": <FaNodeJs className="text-white text-4xl" />,
        Flask: <SiFlask className="text-white text-4xl" />,
        PyTorch: <SiPytorch className="text-white text-4xl" />,
        NumPy: <SiNumpy className="text-white text-4xl" />,
        Music21: <SiMusicbrainz className="text-white text-4xl" />,
        Django: <SiDjango className="text-white text-4xl" />,
        SQLite: <SiSqlite className="text-white text-4xl" />,
        React: <FaReact className="text-white text-4xl" />,
        SQL: <SiMysql className="text-white text-4xl" />,
        Openai: <SiOpenai className="text-white text-4xl" />,

        // New Icons
        "Next.js": <SiNextdotjs className="text-white text-4xl" />,
        "Tailwind CSS": <SiTailwindcss className="text-white text-4xl" />,
        PostgreSQL: <SiPostgresql className="text-white text-4xl" />,
        Docker: <SiDocker className="text-white text-4xl" />,
        TypeScript: <SiTypescript className="text-white text-4xl" />,
        Supabase: <SiSupabase className="text-white text-4xl" />, // Icon for Supabase
        MongoDB: <SiMongodb className="text-white text-4xl" />,   // Icon for MongoDB
        Python: <FaPython className="text-white text-4xl" />,
        OpenCV: <SiOpencv className="text-white text-4xl" />,
        TensorFlow: <SiTensorflow className="text-white text-4xl" />,
    };


    // Define your skills
    const skills: CarouselItem[] = [
        { icon: techIcons["Node.js"], name: "Node.js" },
        { icon: techIcons["Openai"], name: "OpenAI" },
        { icon: techIcons["Django"], name: "Django" },
        { icon: techIcons["MongoDB"], name: "MongoDB"},
        { icon: techIcons["Flask"], name: "Flask" },
        { icon: techIcons["NumPy"], name: "NumPy" },
        { icon: techIcons["Next.js"], name: "Next.js" },
        { icon: techIcons["Tailwind CSS"], name: "Tailwind CSS" },
        { icon: techIcons["PostgreSQL"], name: "PostgreSQL" },
        { icon: techIcons["Docker"], name: "Docker" },
        { icon: techIcons["TypeScript"], name: "TypeScript" },
        { icon: techIcons["Python"], name: "Python" },
        { icon: techIcons["SQL"], name: "SQL" },
        { icon: techIcons["PyTorch"], name: "PyTorch" },
        { icon: techIcons["OpenCV"], name: "OpenCV" },
        { icon: techIcons["Supabase"], name: "Supabase"},
        { icon: techIcons["TensorFlow"], name: "TensorFlow" },
        // Add more skills as needed
    ];

    // Split skills into top and bottom
    const half = Math.ceil(skills.length / 2);
    const top: CarouselItem[] = skills.slice(0, half);
    const bottom: CarouselItem[] = skills.slice(half);

    return (
        <div className="overflow-hidden w-[90%] md:w-[70%] justify-center text-center mx-auto flex flex-col gap-10 mb-32">
            <div className="text-2xl md:text-4xl  font-bold">Skills</div>

            {/* Infinite Carousel */}

            <InfiniteCarousel items={top} direction="right" speed="slow" />
            <InfiniteCarousel items={bottom} direction="left" speed="slow" />


            {/* Optional: Additional content below the carousel */}
        </div>
    );
};

export default Skills;
