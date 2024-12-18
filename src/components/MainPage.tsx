"use client"
import Experience from "./Experience"
import Projects from "./Projects"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"
import { ShootingStars } from "./ui/stars-background"


const MainPage = () => {
    return <>
        <div className="min-h-screen rounded-md bg-black flex flex-col items-center justify-center relative w-full">
            <ShootingStars />
        </div>

        <Experience />
        <Projects />
    </>
}

export default MainPage