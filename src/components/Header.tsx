"use client";

import Link from "next/link";

const Header = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault(); // Prevent default link behavior
        const targetElement = document.getElementById(targetId); // Find the target element by ID
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="w-[90%] lg:w-[70%] mx-auto py-6 flex items-center justify-between bg-black text-white z-10">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Bruce Wang &lt;/&gt;
            </div>

            <nav className="flex items-center space-x-10 font-bold text-[18px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                <Link
                    href="#experience"
                    onClick={(e) => handleSmoothScroll(e, "experience")}
                    className="hover:underline hidden lg:flex"
                >
                    Experience
                </Link>
                <Link
                    href="#projects"
                    onClick={(e) => handleSmoothScroll(e, "projects")}
                    className="hover:underline hidden md:flex"
                >
                    Projects
                </Link>
                <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "contact")}
                    className="hover:underline hidden md:flex"
                >
                    Contact Me
                </a>
                <Link href="/resume" target="_blank" className="hover:underline">
                    Resume
                </Link>
            </nav>
        </div>
    );
};

export default Header;
