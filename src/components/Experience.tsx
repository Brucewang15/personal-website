"use client"

import { BackgroundGradient } from "./ui/background-gradient"
import hppn from './pictures/hppn_logo.jpg'
import warg from './pictures/warg_logo.jpg'
import first from './pictures/first_logo3.jpg'
import tid from './pictures/topinfodev.png'
import { JSX } from "react"
import Image from "next/image"

const Experience = () => {

    const items: { icon: JSX.Element, job: string, place: string, time: string, location: string }[] = [
        {
            icon: <Image src={hppn} alt="icon" className="rounded-full h-14 w-14 object-cover" />,
            job: 'Software Engineer Intern',
            place: 'Hppn.ing',
            time: 'Sept 2024 - Present',
            location: 'Waterloo, ON'
        },
        {
            icon: <Image src={warg} alt="icon" className="rounded-full h-14 w-14 object-cover" />,
            job: 'Autonomy Software Engineer',
            place: "Waterloo Aerial Robotics Group",
            time: 'Sept 2024 - Present',
            location: 'Waterloo, ON'
        },
        {
            icon: <Image src={tid} alt="icon" className="rounded-full h-14 w-14 object-scale-down bg-white" />,
            job: 'Full-Stack Engineer Intern',
            place: "TopInfoDev Solutions",
            time: 'May 2024 - Sept 2024',
            location: 'Vancouver, BC'
        },
        {
            icon: <Image src={first} alt="icon" className="rounded-full h-14 w-14 bg-white object-contain" />,
            job: 'Lead Robotics Engineer',
            place: "FIRST Tech Challenge",
            time: 'Sept 2020 - Feb 2024',
            location: 'Coquitlam, BC'
        }
    ]

    return (
        <div className="w-[90%] lg:w-[50%] flex flex-col justify-center text-center mx-auto gap-8 mb-24">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Experience</h2>

            <div className="flex flex-col gap-6">
                {items.map((item, index) => (
                    <div key={index}>
                        <BackgroundGradient className="dark:bg-zinc-900 rounded-[22px] p-5 w-full">
                            <div className="flex items-center gap-6">
                                <div className="flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex flex-col text-left">
                                        <h3 className="font-bold text-lg text-gray-100">{item.job}</h3>
                                        <span className="text-sm text-gray-300 dark:text-gray-400">{item.place}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-sm text-gray-300 font-semibold">{item.time}</span>
                                        <span className="text-sm text-gray-300 font-semibold">{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience