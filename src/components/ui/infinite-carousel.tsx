// InfiniteCarousel.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";


const InfiniteCarousel = ({ top, bottom }) => {
    return (
        <div className="w-full flex flex-col gap-8">
            {/* Top Carousel - Scroll Right */}
            <div className="overflow-hidden">
                <div className="flex animate-scroll-right">
                    {/* Duplicate the items for seamless scrolling */}
                    {top.concat(top).map((item, index) => (
                        <div key={index} className="flex items-center gap-2 mx-4">
                            {item.icon}
                            <span className="text-white text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Carousel - Scroll Left */}
            <div className="overflow-hidden">
                <div className="flex animate-scroll-left">
                    {/* Duplicate the items for seamless scrolling */}
                    {bottom.concat(bottom).map((item, index) => (
                        <div key={index} className="flex items-center gap-2 mx-4">
                            {item.icon}
                            <span className="text-white text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for the animations */}
            <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default InfiniteCarousel;
