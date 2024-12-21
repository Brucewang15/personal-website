import React from "react";
import LocationCard from "./ui/globe";
import { SiInstagram, SiDiscord, SiLinkedin, SiGithub } from "react-icons/si";
import { FiMail, FiUsers } from "react-icons/fi";
import { MdDownhillSkiing, MdMovie } from "react-icons/md";
import { FaTableTennis, FaHeartbeat } from "react-icons/fa";
import Icon from '@mdi/react';
import { mdiBadminton } from '@mdi/js';


const Aboutme = () => {
    const socials = [
        {
            name: "LinkedIn",
            icon: <SiLinkedin />,
            link: "https://www.linkedin.com/in/brucewang15/"
        },
        {
            name: "Instagram",
            icon: <SiInstagram />,
            link: "https://www.instagram.com/bruce_w.15/",
        },
        {
            name: "Discord",
            icon: <SiDiscord />,
            link: ""
        },
        {
            name: "GitHub",
            icon: <SiGithub />,
            link: "https://github.com/Brucewang15"
        },
        {
            name: "Email",
            icon: <FiMail />,
            link: "mailto:bruce.wang15@outlook.com"
        }
    ];
    const hobbies = [
        {
            name: "Skiing",
            icon: <MdDownhillSkiing />,
        },
        {
            name: "Badminton",
            icon: <Icon path={mdiBadminton} size={0.66} />, // Substitute for Badminton
        },
        {
            name: "Ping Pong",
            icon: <FaTableTennis />,
        },
        {
            name: "Movies",
            icon: <MdMovie />,
        },
    ];

    return (
        <div className="w-[90%] lg:w-[70%] mx-auto z-20 mb-32">
            {/* Title */}
            <div className="text-2xl md:text-4xl font-bold text-center mb-6">About Me</div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Location Card */}
                <div className="rounded-lg border border-slate-700/75">
                    <LocationCard />
                </div>

                {/* Socials Section */}
                <div className="rounded-lg border border-slate-700/75 p-6">
                    {/* Title */}
                    <div className="text-base font-bold mb-4 flex items-center gap-2">
                        <FiUsers />
                        Socials
                    </div>

                    {/* Socials List */}
                    <div className="flex flex-col h-full gap-2 pl-2">
                        {socials.map((social, index) => (
                            <a key={index} target="_blank" href={social.link} className="flex flex-row items-center gap-3 text-gray-400 hover:pointer">
                                <div>{social.icon}</div>
                                <div>{social.name}</div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hobbies Section */}
                <div className="rounded-lg border border-slate-700/75 p-6">
                    <div className="text-base font-bold mb-4 flex items-center gap-2">
                        <FaHeartbeat />
                        Hobbies
                    </div>
                    <div className="flex flex-col h-full gap-2 pl-2">
                        {hobbies.map((hobby, index) => (
                            <div key={index} className="flex flex-row items-center gap-3 text-gray-400">
                                <div>{hobby.icon}</div>
                                <div>{hobby.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
