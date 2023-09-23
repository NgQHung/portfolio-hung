import React, {Fragment, useCallback, useEffect, useRef} from 'react';
import {LeftArrow} from './UI/Icons';
import {projectData} from './data';
import {motion} from 'framer-motion';

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
    const {title, year} = project;

    const mouseEnterHandler = () => {
        setStateMouse(true);
    };
    const mouseLeaveHandler = () => {
        setStateMouse(false);
    };

    const clickHandler = (project: IProjectData) => {
        if (project) {
            setData(project);
            setDetailOpen(true);
            setDataMoreInfo(project.listImages);
        } else setDetailOpen(false);
    };

    return (
        <li
            className="flex items-center cursor-pointer text-xs sm:text-base"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={() => clickHandler(project)}>
            <motion.span
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
            </motion.span>
            <motion.span
                className="dark:text-primary"
                initial={{opacity: 1}}
                whileHover={{opacity: 0.7}}>
                {title} <b>({year})</b>
            </motion.span>
        </li>
    );
};

const TitleProjects = () => {
    return (
        <h1
            className="text-xl xs:text-4xl text-bold text-right flex justify-end items-center
             border-b-2 border-solid border-black dark:border-primary dark:text-primary">
            <div className="grow flex justify-end">
                <div className="w-4 h-4 bg-black dark:bg-primary mr-3 " />
            </div>
            <span>Projects</span>
        </h1>
    );
};

const Projects: React.FC<IProjects> = ({setData, setDetailOpen, setDataMoreInfo}) => {
    return (
        <div className=" max-h-[225px] font-Montserrat tracking-wide space-y-2  relative z-[1]">
            <TitleProjects />
            <ul className="flex flex-col justify-center items-end space-y-1">
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
            </ul>
        </div>
    );
};

export default Projects;
