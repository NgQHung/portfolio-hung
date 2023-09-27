import React, {Fragment, useEffect} from 'react';
import {projectData} from '../data';
import {useAppDispatch, useAppSelector} from '../hook/useApp';
import {projectActions} from '@/stores/Project';
import styled from '@emotion/styled';
import {LinkArrow} from '../UI/Icons';
import {useRouter} from 'next/router';

interface IProject {
    project: IProjectData;
}

const Project: React.FC<IProject> = ({project}) => {
    const [bgColor, setBgColor] = React.useState<string>('var(--primary)');
    const isDark = useAppSelector((state) => state.themeSwitcher.isDark);
    const route = useRouter();

    const {title, year, type, about, technologies} = project;
    const dispatch = useAppDispatch();
    const mouseEnterHandler = (id: String) => {
        const selectedProject = projectData.filter((project) => project.id === id);
        dispatch(projectActions.selectedProject(selectedProject));
    };
    const mouseLeaveHandler = () => {
        dispatch(projectActions.selectedProject([]));
    };

    const clickHandler = (project: IProjectData) => {
        route.push(project.website);
    };

    useEffect(() => {
        setBgColor(isDark ? '#1a1a1a' : 'var(--primary)');
    }, [isDark]);
    return (
        <>
            <ContainerProject
                // style={{height: 'max-content'}}
                isDark={isDark}
                bgColor={bgColor}
                className="hidden shadow-lg dark:shadow-lightShadowMd lg:flex relative max-h-[250px] group  cursor-pointer text-xs sm:text-base w-full h-full rounded"
                onMouseEnter={() => mouseEnterHandler(project.id)}
                onMouseLeave={mouseLeaveHandler}
                onClick={() => clickHandler(project)}>
                <ContainerContent
                    isDark={isDark}
                    className=" flex justify-between h-full w-full flex-row text-left dark:text-primary ">
                    <div
                        // style={{height: 'max-content'}}
                        className="lg:p-2 dark:opacity-70 leading-6 text-sm basis-1/3 text-black dark:text-primary  transition-all">
                        {year}
                    </div>
                    <div
                        // style={{height: 'max-content'}}
                        className="flex space-y-1 py-2  flex-col grow  text-left w-full dark:text-primary">
                        <h1 className="flex group-hover:text-secondary font-bold transition-all">
                            <span className="pr-4">{title}</span>
                            <LinkArrow />
                        </h1>
                        {type === 'personal' && <h2> Personal Project</h2>}

                        <p className="text-sm">{about}</p>
                        <ul className="flex flex-wrap text-sm">
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
            </ContainerProject>
            <div
                style={{height: 'max-content'}}
                className="flex p-8 lg:hidden relative max-h-[400px] group  cursor-pointer text-base w-full h-full rounded"
                onMouseEnter={() => mouseEnterHandler(project.id)}
                onMouseLeave={mouseLeaveHandler}
                onClick={() => clickHandler(project)}>
                <div className=" flex justify-between h-full w-full  flex-col sm:flex-row text-left dark:text-primary ">
                    <div className="lg:p-2 dark:opacity-70 font-[600] text-xs lg:text-base pb-4 leading-6 sm:basis-1/3 text-black dark:text-primary  transition-all">
                        {year}
                    </div>
                    <div className="flex space-y-1 lg:py-2  flex-col grow  text-left w-full dark:text-primary">
                        <h1 className="flex group-hover:text-secondary font-bold transition-all">
                            <span className="pr-4">{title}</span>
                            <LinkArrow />
                        </h1>
                        {type === 'personal' && <h2> Personal Project</h2>}

                        <p className="text-sm xl:text-base pb-4">{about}</p>
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
                </div>
            </div>
        </>
    );
};

const TitleProjects = () => {
    return (
        <>
            <h1
                className="hidden text-xl pt-10 xs:text-4xl font-bold text-left lg:flex justify-end items-center
                 border-b-2 border-solid border-black dark:border-primary dark:text-primary pl-4">
                <div className=" flex justify-start">
                    <div className="w-4 h-4 bg-black dark:bg-primary mr-3 " />
                </div>
                <span className="grow">Projects</span>
            </h1>
            <div id="scrollHeaderProjects" className="lg:hidden  w-full ">
                <h1
                    className="px-8  py-[24px] lg:py-8  text-2xl sm:pt-10 font-bold text-left flex justify-end items-center
                      dark:text-primary">
                    <span className="grow">Projects</span>
                </h1>
            </div>
        </>
    );
};

const Projects = () => {
    return (
        <div
            id="projects"
            className=" lg:pr-8  lg:px-12 xl:px-16  w-full h-full font-Montserrat tracking-wide space-y-2  
            relative z-[1] ">
            <TitleProjects />
            {projectData.map((project, index) => (
                <Fragment key={index}>
                    <Project project={project} />
                </Fragment>
            ))}
            <div className="h-0 lg:h-10" />
        </div>
    );
};

const ContainerProject = styled.div<{bgColor: string; isDark: Boolean}>`
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => (props.isDark ? '#fff' : '#1a1a1a')};
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

const ContainerContent = styled.div<{isDark: Boolean}>`
    fill: ${(props) => (props.isDark ? '#fff' : '#1a1a1a')};
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
