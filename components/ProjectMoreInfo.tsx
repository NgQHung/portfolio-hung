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
            <div
                className="top-[49px] absolute h-[calc(100vh-74px)] left-1/2 translate-x-[-49%]
                w-[810px] z-[3] rounded-[2.5rem] bg-black rounded-br-3xl
                dark:bg-primary"
            />
            <div
                className="z-[3] fixed top-10 h-[calc(100vh-80px)] overflow-scroll left-1/2 translate-x-[-50%] 
                w-[800px] scrollbar_hidden bg-primary dark:border dark:border-solid dark:border-primary 
                rounded-3xl rounded-br-2xl shadow-2xl dark:bg-dark ">
                <div
                    className="hover:opacity-70 sticky top-0 left-0 z-[3]"
                    onClick={() => props.setMoreInfoOpen(false)}>
                    <CloseIcon />
                </div>

                <ul className="flex flex-col justify-between items-center space-y-10 px-[100px]">
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
