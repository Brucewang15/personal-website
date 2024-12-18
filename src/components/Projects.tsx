import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Tune2keys from './pictures/Tune2keys.png';

const Projects = () => {
    const imageList =
        [
            [Tune2keys, 'Tune2Keys', 'TUNE2KEY is an innovative platform that transforms audio, MIDI, and PDF files into beautifully rendered sheet music.'],
            [Tune2keys],
            [Tune2keys],
        ];

    return (
        <div className="w-[80%] justify-center text-center mx-[10%] flex flex-col gap-10">

            <div className="lg:text-5xl text-4xl font-bold">Projects</div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {imageList.map((image, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-[2px] rounded-lg overflow-hidden">
                        <DirectionAwareHover className="rounded-lg" imageUrl={image[0]}>
                            <div className="">{image[1]}</div>
                        </DirectionAwareHover>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Projects;
