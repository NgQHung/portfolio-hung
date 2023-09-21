import Image from 'next/image';
import React from 'react';
import {CloseIcon} from './UI/Icons';

interface IProjectMoreInfo {
    dataMoreInfo: string[];
    setMoreInfoOpen: (state: Boolean) => void;
}

const ProjectMoreInfo: React.FC<IProjectMoreInfo> = (props) => {
    return (
        <>
            <div onClick={() => props.setMoreInfoOpen(false)}>
                <CloseIcon />
            </div>
            <div
                className="z-[4] fixed top-0 h-screen overflow-scroll px-[100px] 
            left-1/2 translate-x-[-50%] w-[800px] scrollbar_hidden bg-[#f3f2f9] 
            ">
                <ul className="flex flex-col justify-between items-center space-y-10 ">
                    {props.dataMoreInfo.map((image, index) => (
                        <li key={image + index}>
                            {
                                <Image
                                    src={image}
                                    alt="image"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ProjectMoreInfo;
