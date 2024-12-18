"use client";

import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Tune2keys from "./pictures/Tune2keys.png";
import watclub from "./pictures/watclub.png";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiFlask, SiPytorch, SiNumpy, SiMusicbrainz, SiDjango, SiSqlite, SiMysql } from "react-icons/si";
import { StaticImageData } from "next/image";
import { JSX } from "react";

type Project = {
    image: StaticImageData; // Image data
    title: string; // Project title
    description: string; // Project description
    techStack: string[]; // List of technologies
    link: string; // GitHub or live project link
};

const Projects = () => {
    const techIcons: Record<string, JSX.Element> = {
        "Node.js": <FaNodeJs className="text-green-500 text-4xl" />,
        Flask: <SiFlask className="text-gray-500 text-4xl" />,
        PyTorch: <SiPytorch className="text-red-500 text-4xl" />,
        NumPy: <SiNumpy className="text-blue-500 text-4xl" />,
        Music21: <SiMusicbrainz className="text-purple-500 text-4xl" />,
        Django: <SiDjango className="text-green-800 text-4xl" />,
        SQLite: <SiSqlite className="text-blue-500 text-4xl" />,
        React: <FaReact className="text-blue-400 text-4xl" />,
        SQL: <SiMysql className="text-orange-500 text-4xl" />,
    };

    const imageList: Project[] = [
        {
            image: watclub,
            title: "WatClub",
            description: "A Club Rating Platform for University of Waterloo students",
            techStack: ["Node.js", "SQLite", "Django", "React"],
            link: "https://github.com/Brucewang15/WatClub",
        },
        {
            image: Tune2keys,
            title: "Tune2Keys",
            description: "Transforms audio, MIDI, and PDF files into rendered sheet music.",
            techStack: ["Node.js", "Flask", "PyTorch", "NumPy", "Music21"],
            link: "https://github.com/jglu/tune2key",
        },
    ];

    const handleOpen = (link: string) => {
        if (typeof window !== "undefined") {
            window.open(link, "_blank");
        }
    };

    return (
        <div className="w-[80%] justify-center text-center mx-[10%] flex flex-col gap-10">
            <div className="lg:text-4xl sm:text-2xl font-bold">Projects</div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {imageList.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-[2px] rounded-lg overflow-hidden hover:cursor-pointer"
                        onClick={() => handleOpen(project.link)}
                    >
                        <DirectionAwareHover className="rounded-lg" imageUrl={project.image}>
                            <div className="font-semibold text-xl text-left mb-2">{project.title}</div>
                            <div className="text-left text-base">{project.description}</div>
                            <div className="flex flex-wrap mt-4 gap-4">
                                {project.techStack.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="flex items-center gap-2 px-1 rounded-md"
                                    >
                                        {techIcons[tech]} {/* Render the icon */}
                                    </div>
                                ))}
                            </div>
                        </DirectionAwareHover>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
