import React, {Fragment, useCallback, useEffect, useRef} from 'react';
import {LeftArrow} from '../UI/Icons';
import {projectData} from '../data';
import {motion} from 'framer-motion';
import {useAppDispatch} from '../hook/useApp';
import {projectActions} from '@/stores/Project';
import ProjectDetailV2 from './ProjectDetail-v-2';
import styled from '@emotion/styled';
// import tinycolor from 'tinycolor2'
import tinycolor from 'tinycolor2';

interface IProject {
    project: IProjectData;
    // key: Key;
    setDataMoreInfo: (data: string[]) => void;
    setData: (data: IProjectData) => void;
    setDetailOpen: (state: Boolean) => void;
}

interface IProjects {
    setData: (data: IProjectData) => void;
    setDetailOpen: (state: Boolean) => void;
    setDataMoreInfo: (data: string[]) => void;
}

const Project: React.FC<IProject> = ({project, setData, setDetailOpen, setDataMoreInfo}) => {
    const [stateMouse, setStateMouse] = React.useState<Boolean>(false);
    const [color, setColor] = React.useState<string>('');
    const [bgColor] = React.useState<string>('var(--primary)');

    // const [projectOnHover, setProjectOnHover] = React.useState<IProjectData[]>();
    const {title, year, type, about, technologies} = project;
    const dispatch = useAppDispatch();
    const mouseEnterHandler = (id: String) => {
        setStateMouse(true);
        const selectedProject = projectData.filter((project) => project.id === id);
        dispatch(projectActions.selectedProject(selectedProject));
    };
    const mouseLeaveHandler = () => {
        setStateMouse(false);
        dispatch(projectActions.selectedProject([]));
    };

    const clickHandler = (project: IProjectData) => {
        if (project) {
            setData(project);
            setDetailOpen(true);
            setDataMoreInfo(project.listImages);
        } else setDetailOpen(false);
    };

    useEffect(() => {
        // function setColor(bgColor: string): string {
        //     if (tinycolor(bgColor).getBrightness() > 30) {
        //         return '#000';
        //     } else {
        //         return '#FFF';
        //     }
        // }
        const colorToShow = tinycolor(bgColor).getBrightness() > 30 ? '#fff ' : '#000';

        setColor(colorToShow);
        // console.log('getBrightness', tinycolor('#fdf8f0').getBrightness());
    }, [color]);

    return (
        <ContainerProject
            color={color}
            bgColor={bgColor}
            className="flex relative max-h-[400px] group  cursor-pointer text-xs sm:text-base w-full h-full rounded"
            onMouseEnter={() => mouseEnterHandler(project.id)}
            onMouseLeave={mouseLeaveHandler}
            onClick={() => clickHandler(project)}>
            {/* <ContainerProject  className="  "> */}
            <ContainerContent
                color={color}
                className=" flex justify-between h-full w-full  flex-row text-left dark:text-primary ">
                <div className=" text-sm xl:text-base basis-1/3 text-black dark:text-primary p-2 transition-all">
                    {year}
                </div>
                <div className="flex space-y-1 pb-2  flex-col grow  text-left w-full dark:text-primary">
                    <h1 className=" group-hover:text-secondary font-bold transition-all">
                        {title}
                    </h1>
                    {type === 'personal' && <h2> Personal Project</h2>}

                    <p className="text-sm xl:text-base">{about}</p>
                    <ul className="flex flex-wrap text-sm xl:text-base">
                        {technologies.primary.map((tech, index) => (
                            <li
                                className="mr-1 font-medium px-2 mb-1 rounded-full bg-[#dfe0e0] dark:text-black py-1"
                                key={tech + '-' + index}>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </ContainerContent>
            {/* </ContainerProject> */}
            {/* <motion.span
                initial={{opacity: 0, x: 0}}
                animate={{opacity: stateMouse ? 1 : 0, x: stateMouse ? -10 : 0}}
                whileHover={{
                    opacity: stateMouse ? 1 : 0,
                    x: stateMouse ? -10 : 0,
                    transition: {
                        type: 'spring',
                    },
                }}
                className="hidden lg:inline">
                <LeftArrow className="w-5 mr-5 inline-block font-bold dark:text-primary" />
            </motion.span> */}
        </ContainerProject>
    );
};

const TitleProjects = () => {
    return (
        <h1
            className="text-xl xs:text-4xl text-bold text-left flex justify-end items-center
             border-b-2 border-solid border-black dark:border-primary dark:text-primary pl-4">
            <div className=" flex justify-start">
                <div className="w-4 h-4 bg-black dark:bg-primary mr-3 " />
            </div>
            <span className="grow">Projects</span>
        </h1>
    );
};

const Projects: React.FC<IProjects> = ({setData, setDetailOpen, setDataMoreInfo}) => {
    return (
        <div
            className=" w-full h-full font-Montserrat tracking-wide space-y-2  
            relative z-[1] ">
            <TitleProjects />
            <div className="flex flex-col h-full  space-y-4  ">
                {projectData.map((project, index) => (
                    <Fragment key={index}>
                        <Project
                            // key={index}
                            setDataMoreInfo={setDataMoreInfo}
                            project={project}
                            setData={setData}
                            setDetailOpen={setDetailOpen}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
        // {/* <ProjectDetailV2 /> */}
    );
};

const ContainerProject = styled.div<{color: string; bgColor: string}>`
    display: inline-block;
    /* float: left; */
    /* width: 160px; */
    position: relative;
    width: 100%;
    height: 100%;
    /* height: 160px; */
    border: 1px solid ${(props) => props.color};
    z-index: 0;
    transition: all 0.3s ease;
    opacity: 1;
    margin-right: -1px;
    &:hover {
        z-index: 10;
    }

    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        background: ${(props) => props.bgColor};
        top: calc(50% - 0.1px);
        left: calc(50% - 0.1px);
        transform: translate(-50%, -50%);
        animation-iteration-count: 1;
        transform-origin: 50% 50%;
        opacity: 1;
    }
    &:before {
        width: calc(100% + 2px);
        height: 100%;
        z-index: 1;
        transition: height 1s ease, opacity 0.8s ease;
    }

    &:after {
        height: calc(100% + 2px);
        width: 100%;
        z-index: 1;
        transition: width 1s ease, opacity 0.8s ease;
    }

    &:hover,
    &:focus {
        &:before {
            transition: height 0.2s ease, opacity 0.3s ease;
            height: 85%;
            opacity: 0.7;
        }

        &:after {
            transition: width 0.2s ease, opacity 0.3s ease;
            width: 85%;
            opacity: 0.8;
        }
    }
`;

const ContainerContent = styled.div<{color: string}>`
    fill: ${(props) => props.color};
    width: 100%;
    position: absolute;
    will-change: width;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.5s ease;
    z-index: 4;
`;

export default Projects;
