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
            icon: <Image src={hppn} alt="icon" className="rounded-full h-14 w-auto" />,
            job: 'Software Engineer Intern',
            place: 'Hppn.ing',
            time: 'Sept 2024 - Present',
            location: 'Waterloo, ON'

        },
        {
            icon: <Image src={warg} alt="icon" className="rounded-full h-14 w-auto" />,
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

    return <>

        <div className="w-[90%] lg:w-[50%] flex flex-col justify-center text-center mx-auto gap-6 mb-24">

            <div className="text-2xl md:text-4xl font-bold">Experience</div>

            {items.map((item, index) => (
                <div key={index} className="">
                    <BackgroundGradient className="min-h-20 dark:bg-zinc-900 rounded-[22px] p-4 w-full">
                        <div className="flex flex-row h-full gap-5">
                            {item.icon}
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col text-left gap-2">
                                    <div className="font-bold text-base text-gray-100">{item.job}</div>
                                    <div className="text-sm text-gray-300 dark:text-gray-400">{item.place}</div>
                                </div>
                                <div className="flex flex-col text-right">
                                    <div className="text-sm text-gray-300 font-semibold">{item.time}</div>
                                </div>

                            </div>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}


        </div>
    </>
}

export default Experience