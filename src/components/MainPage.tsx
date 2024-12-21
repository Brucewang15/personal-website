"use client"

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { FlipWords } from "./ui/flip-words";
import Header from "./Header";

// Dynamically import all four components with SSR disabled
const Experience = dynamic(() => import("./Experience"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const Aboutme = dynamic(() => import("./Aboutme"), { ssr: false })
const ShootingStars = dynamic(() =>
    import("./ui/stars-background").then((mod) => mod.ShootingStars),
    { ssr: false }
);

const MainPage = () => {
    const [mounted, setMounted] = useState(false);

    const words: string[] = ["a Software Engineer", "a Student", "an Innovator"];

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {/* Set ShootingStars to position absolute inside a wrapper */}
            <div className="relative w-full h-full">
                <ShootingStars className="absolute inset-0 z-0" />
                <div className="relative z-10">
                    <div className="rounded-md flex flex-col items-center justify-center">
                        <Header />
                    </div>
                    <div className="w-[90%] lg:w-[70%] mx-auto py-10">
                        <div className="text-2xl md:text-4xl font-bold leading-none">
                            Hi I'm Bruce Wang <br />
                            <span className="block mt-4 leading-relaxed">
                                And I'm <FlipWords words={words} />
                            </span>
                        </div>

                        <div className="mt-8 text-base md:text-xl lg:pr-20">
                            Hi! I'm Bruce Wang, a Computer Science student at the University of Waterloo.
                        </div>
                    </div>

                    <div id="aboutme">
                        <Aboutme />
                    </div>

                    {/* Add ids to these sections so the navigation links can anchor to them */}
                    <div id="experience">
                        <Experience />
                    </div>
                    <Skills />
                    <div id="projects">
                        <Projects />
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default MainPage;
