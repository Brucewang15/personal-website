import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Tune2keys from './pictures/Tune2keys.png';
import { FaNodeJs, FaPython } from 'react-icons/fa';
import { SiFlask, SiPytorch, SiNumpy, SiMusicbrainz } from 'react-icons/si';

const Projects = () => {
    const techIcons = {
        'Node.js': <FaNodeJs className="text-green-500 text-4xl" />,
        'Flask': <SiFlask className="text-gray-500 text-4xl" />,
        'PyTorch': <SiPytorch className="text-red-500 text-4xl" />,
        'NumPy': <SiNumpy className="text-blue-500 text-4xl" />,
        'Music21': <SiMusicbrainz className="text-purple-500 text-4xl" />,
    };

    const imageList = [
        [
            Tune2keys,
            'Tune2Keys',
            'Transforms audio, MIDI, and PDF files into rendered sheet music.',
            ['Node.js', 'Flask', 'PyTorch', 'NumPy', 'Music21'],
        ],
        [Tune2keys], // Placeholder for additional projects
    ];

    return (
        <div className="w-[80%] justify-center text-center mx-[10%] flex flex-col gap-10">
            <div className="lg:text-4xl sm:text-2xl font-bold">Projects</div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {imageList.map((image, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-[2px] rounded-lg overflow-hidden"
                    >
                        <DirectionAwareHover className="rounded-lg" imageUrl={image[0]}>
                            <div className="font-semibold text-xl text-left mb-2">{image[1]}</div>
                            <div className="text-left text-base">{image[2]}</div>
                            {/* Render technologies with icons */}
                            {image[3] && (
                                <div className="flex flex-wrap mt-4 gap-4">
                                    {image[3].map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="flex items-center gap-2 px-1 rounded-md"
                                        >
                                            {techIcons[tech]} {/* Render the icon */}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </DirectionAwareHover>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
