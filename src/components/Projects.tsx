"use client";

import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Tune2keys from "./pictures/Tune2keys.png";
import watclub from "./pictures/watclub.png";
import SoccerMetric from "./pictures/soccermetric.png";
import theraAI from './pictures/theraAI.png'
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiFlask,
    SiMediapipe,
    SiPytorch,
    SiNumpy,
    SiMusicbrainz,
    SiDjango,
    SiSqlite,
    SiMysql,
    SiTensorflow,
    SiOpencv,
    SiPandas,
    SiOpenai,
    SiTailwindcss,
    SiNextdotjs,
    SiGooglecloud
} from "react-icons/si";
import yolo from "./pictures/Yolo.svg";
import Image, { StaticImageData } from "next/image";
import { JSX } from "react";

type Project = {
    image: StaticImageData;
    title: string;
    description: string;
    techStack: string[];
    link: string;
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
        TensorFlow: <SiTensorflow className="text-orange-400 text-4xl" />,
        OpenCV: <SiOpencv className="text-blue-600 text-4xl" />,
        Pandas: <SiPandas className="text-yellow-500 text-4xl" />,
        OpenAI: <SiOpenai className="text-white text-4xl" />,
        TailwindCSS: <SiTailwindcss className="text-teal-500 text-4xl" />,
        Ultralytics: <Image src={yolo} alt="yolo" width={36} height={36} />,
        MediaPipe: <SiMediapipe className="text-teal-500 text-4xl" />,
        "Next.js": <SiNextdotjs className="text-white text-4xl" />,
        "Google Cloud": <SiGooglecloud className="text-blue-600 text-4xl" />,
    };

    const imageList: Project[] = [
        {
            image: watclub,
            title: "WatClub",
            description: "A Club Rating Platform for University of Waterloo students",
            techStack: ["React", "Django", "SQLite", "TensorFlow", "NumPy"],
            link: "https://github.com/Brucewang15/WatClub"
        },
        {
            image: SoccerMetric,
            title: "SoccerMetric",
            description: "A soccer analysis platform for tracking player performance",
            techStack: [
                "Ultralytics",
                "MediaPipe",
                "Pandas",
                "OpenCV",
                "OpenAI",
                "React",
                "Flask",
                "TailwindCSS"
            ],
            link: "https://github.com/gordonzhang1/SoccerMetrics"
        },
        {
            image: Tune2keys,
            title: "Tune2Keys",
            description: "ML model that transforms audio into sheet music.",
            techStack: ["React", "Flask", "PyTorch", "NumPy", "Music21"],
            link: "https://github.com/jglu/tune2key"
        },
        {
            image: theraAI,
            title: "TheraAI",
            description: "A mental health platform that provides therapy through AI.",
            techStack: ["React", "Next.js", "Google Cloud", "TailwindCSS", "OpenAI"],
            link: "https://github.com/dkaty123/TalkTuahTherapist"
        }
    ];

    return (
        <div className="w-[90%] lg:w-[70%] justify-center text-center mx-auto flex flex-col gap-10 mb-32">
            <div className="text-2xl md:text-4xl font-bold">Projects</div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {imageList.map((project, index) => (
                    <a
                        key={index}
                        className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-[2px] rounded-lg overflow-hidden hover:cursor-pointer h-[100%] flex"
                        target="_blank"
                        href={project.link}
                    >
                        <DirectionAwareHover
                            className="rounded-lg w-full h-full flex flex-col justify-between"
                            imageUrl={project.image}
                        >
                            <div>
                                <div className="font-semibold text-xl text-left mb-2">
                                    {project.title}
                                </div>
                                <div className="text-left text-base">
                                    {project.description}
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-4 gap-4">
                                {project.techStack.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="flex items-center gap-2 px-1 rounded-md"
                                    >
                                        {techIcons[tech]}
                                    </div>
                                ))}
                            </div>
                        </DirectionAwareHover>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
