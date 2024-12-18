import { FloatingDock } from "./ui/floating-dock"
import { FaGithub } from "react-icons/fa";
import {IconHome} from '@tabler/icons-react'

const Footer = () => {
    const items: { title: string; icon: React.ReactNode; href: string }[] = [
        {
            title: 'Home',
            icon: <IconHome className="w-full h-full" />,
            href: '/'
        },
        {
            title: 'GitHub',
            icon: <FaGithub className="w-full h-full" />,
            href: 'https://github.com/Brucewang15',
        },
    ]
    return <>
        <div className="fixed bottom-6 w-full flex justify-center z-20">
            <FloatingDock items={items} />
        </div>

    </>
}
export default Footer