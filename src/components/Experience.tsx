"use client"

import { BackgroundGradient } from "./ui/background-gradient"
import hppn from './pictures/hppn_logo.jpg'
import warg from './pictures/warg_logo.jpg'
import first from './pictures/first_logo2.png'
import { JSX } from "react"
import Image, { StaticImageData } from "next/image"

const Experience = () => {

    const items: { icon: JSX.Element, job: string, place: string, time: string }[] = [
        {
            icon: <Image src={hppn} alt="icon" className="rounded-full h-14 w-auto" />,
            job: 'Founding Software Engineer',
            place: 'Hppn.ing',
            time: 'Oct 2024 - Present'

        },
        {
            icon: <Image src={warg} alt="icon" className="rounded-full h-14 w-auto" />,
            job: 'Autonomy Software Engineer',
            place: "Waterloo Aerial Robotics Group",
            time: 'Sept 2024 - Present'
        },
        {
            icon: <Image src={warg} alt="icon" className="rounded-full h-14 w-14" />,
            job: 'Software Engineer Intern',
            place: "TopInfoDev Solutions",
            time: 'May 2024 - Sept 2024'

        },
        {
            icon: <Image src={first} alt="icon" className="rounded-full h-14 w-14 bg-white object-cover" />,
            job: 'Lead Software and Hardware Engineer',
            place: "FIRST Robotics",
            time: 'Sept 2020 - Feb 2024'
        }   
    ]

    return <>

        <div className="w-[90%] lg:w-[50%] flex flex-col justify-center text-center mx-auto gap-6 mb-32">

            <div className="text-4xl font-bold">Experience</div>

            {items.map((item, index) => (
                <div key={index} className="">
                    <BackgroundGradient className="min-h-20 dark:bg-zinc-900 rounded-[22px] p-4 w-full">
                        <div className="flex flex-row h-full gap-5">
                            {item.icon}
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col text-left">
                                    <div className="font-bold text-base text-gray-100">{item.job}</div>
                                    <div className="text-sm text-gray-300 dark:text-gray-400">{item.place}</div>
                                </div>
                                <div className="text-sm text-gray-300 font-semibold">{item.time}</div>
                            </div>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}


        </div>
    </>
}

export default Experience