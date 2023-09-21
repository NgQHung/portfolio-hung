import React, {useState} from 'react';
import styled from '@emotion/styled';
import {motion, MotionValue, useTransform} from 'framer-motion';

import {LeftArrow, LinkArrow, WebsiteIcon} from './UI/Icons';
import Image from 'next/image';
import Link from 'next/link';

interface IProjectDetail {
    project: IProjectData;
    setDetailOpen: (state: Boolean) => void;
    setMoreInfoOpen: (state: Boolean) => void;
    detailOpen: Boolean;
}

interface ITechnologies {
    field: String;
    technologies: String[];
}

const Technologies: React.FC<ITechnologies> = ({field, technologies}) => {
    const filteredTechnologies = [...technologies].slice(0, 3);

    return (
        <div className="flex justify-start items-center space-x-2">
            <span>{field}:</span>
            {filteredTechnologies.map((tech, index) => (
                <span key={index} className="inline-block p-2 bg-gray-400 rounded-md ">
                    {tech}
                </span>
            ))}
            <span className="inline-block p-2 bg-gray-400 rounded-md ">Other...</span>
        </div>
    );
};

const ProjectDetail: React.FC<IProjectDetail> = ({
    project,
    setDetailOpen,
    detailOpen,
    setMoreInfoOpen,
}) => {
    const {title, about, image, source, technologies, website, year, color} = project;
    const projectDetailOpenHandler = () => {};

    const moreInfoOpenHandler = () => {
        setDetailOpen(false);
        setMoreInfoOpen(true);
    };
    return (
        //
        <div
            className={`h-screen  top-0 right-0 w-[450px]  bg-primary absolute z-[3]  flex flex-col justify-between `}>
            <div className="p-4 h-full   ">
                <div
                    onClick={() => setDetailOpen(false)}
                    className="flex justify-start items-center space-x-3 pb-3 border-b border-black border-solid max-h-8 
                    cursor-pointer">
                    <span className="border border-solid border-black rounded-full p-1">
                        <LeftArrow />
                    </span>
                    <div className="underline-slide font-semibold">
                        <span>Go Back</span>
                    </div>
                </div>
                <div className="mt-4 space-y-4">
                    <div className="space-y-3">
                        <b>{title}</b>
                        <ContainerImage color={color}>
                            <div className="w-full h-auto rounded-xl overflow-hidden">
                                <Image
                                    src={image}
                                    alt="zalando"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                        </ContainerImage>
                    </div>
                    <div className="space-y-3 ">
                        <b>About</b>
                        <p className="text-[14px]">{about}</p>
                    </div>
                    <div className="space-y-3">
                        <b>Technologies</b>
                        <div className="space-y-3 text-[14px]">
                            <Technologies field="Front end" technologies={technologies.fe} />
                            <Technologies field="Back end" technologies={technologies.be} />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <WebsiteIcon className="w-6 h-auto" />
                            <b>Website</b>
                        </div>
                        <Link
                            href={website}
                            target="_blank"
                            className="text-[14px] underline hover:opacity-70">
                            <span>{website}</span>
                        </Link>
                    </div>
                    {/* <div className="space-y-3">
                        <div className="flex items-center">
                            <WebsiteIcon className="w-6 h-auto" />
                            <b>Website</b>
                        </div>
                        <Link href="">
                            <span>{source}</span>
                        </Link>
                    </div> */}
                </div>
            </div>
            <ContainerMoreInfo color={color} onClick={moreInfoOpenHandler}>
                <button>More Info</button>
                <LinkArrow className="w-6" />
            </ContainerMoreInfo>
        </div>
    );
};

export default ProjectDetail;

const ContainerImage = styled.div<{color: string}>`
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
    padding: 8px 16px;
    overflow: hidden;
    background-color: ${(props) => props.color};
`;

const ContainerMoreInfo = styled.div<{color: string}>`
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin: 1rem 0;
    background-color: ${(props) => props.color};
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;
