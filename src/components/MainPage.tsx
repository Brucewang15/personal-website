"use client"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import dynamic from "next/dynamic";
import Footer from './Footer'

// Dynamically import ShootingStars with SSR disabled
const ShootingStars = dynamic(() => import("./ui/stars-background").then((mod) => mod.ShootingStars), {
    ssr: false,
});



const MainPage = () => {
    return <>
        <div className="min-h-screen rounded-md bg-black flex flex-col items-center justify-center relative w-full">
            <ShootingStars />
        </div>

        <Experience />
        <Skills />
        <Projects />
        <Footer />
    </>
}

export default MainPage