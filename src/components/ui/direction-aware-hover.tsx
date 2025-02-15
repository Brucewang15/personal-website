"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
    imageUrl,
    children,
    childrenClassName,
    imageClassName,
    className,
}: {
    imageUrl: StaticImageData;
    children: React.ReactNode | string;
    childrenClassName?: string;
    imageClassName?: string;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const [direction, setDirection] = useState<
        "top" | "bottom" | "left" | "right" | string
    >("left");

    const handleMouseEnter = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (!ref.current) return;

        const d = getDirection(event, ref.current);
        switch (d) {
            case 0:
                setDirection("top");
                break;
            case 1:
                setDirection("right");
                break;
            case 2:
                setDirection("bottom");
                break;
            case 3:
                setDirection("left");
                break;
            default:
                setDirection("left");
                break;
        }
    };

    const getDirection = (
        ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
        obj: HTMLElement
    ) => {
        const { width: w, height: h, left, top } = obj.getBoundingClientRect();
        const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
        const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
        // The direction is 0=top, 1=right, 2=bottom, 3=left
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            ref={ref}
            className={cn(
                "w-full h-full rounded-lg p-[3px] overflow-hidden group/card relative",
                className
            )}
            initial="initial"
            whileHover={direction}
            exit="exit"
        >
            <AnimatePresence mode="wait">
                <motion.div className="relative w-full h-full bg-transparent rounded-lg">
                    {/* Dark overlay appears on hover */}
                    <motion.div
                        className="group-hover/card:block hidden absolute inset-0 bg-black/50 z-10 transition duration-500 rounded-lg"
                    />
                    <motion.div className="h-full w-full relative bg-gray-50 dark:bg-black rounded-lg">
                        <Image
                            alt="image"
                            className={cn(
                                "h-full w-full object-cover rounded-lg", // Removed scale-[1.21]
                                imageClassName
                            )}
                            src={imageUrl}
                        />
                    </motion.div>

                    {/* Text still uses directional animation */}
                    <motion.div
                        variants={textVariants}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className={cn(
                            "text-white absolute bottom-4 left-4 z-40",
                            childrenClassName
                        )}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

const textVariants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    exit: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    top: {
        y: -2,
        opacity: 1,
    },
    bottom: {
        y: 2,
        opacity: 1,
    },
    left: {
        x: -2,
        opacity: 1,
    },
    right: {
        x: 20,
        opacity: 1,
    },
};
