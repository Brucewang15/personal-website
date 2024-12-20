"use client"

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import all four components with SSR disabled
const Experience = dynamic(() => import("./Experience"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

const ShootingStars = dynamic(() =>
    import("./ui/stars-background").then((mod) => mod.ShootingStars),
    { ssr: false }
);

const MainPage = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className="min-h-screen rounded-md bg-black flex flex-col items-center justify-center relative w-full">
                {mounted && <ShootingStars />}
                <div className="h-screen w-full md:p-32">
                    <div className="text-4xl font-bold">
                        Hi I'm Bruce Wang <br />
                        And I'm a
                    </div>
                </div>
            </div>

            <Experience />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
};

export default MainPage;
