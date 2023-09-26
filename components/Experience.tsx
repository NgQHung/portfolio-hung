import React, {Fragment, useCallback, useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';
import {IExperienceData, experienceData} from './data/experience';
import {experienceActions} from '@/stores/Experience';
import {useAppDispatch} from './hook/useApp';

interface IExp {
    experience: IExperienceData;
    setData: (data: IExperienceData) => void;
    setDetailOpen: (state: Boolean) => void;
}

interface IExperience {
    setData: (data: IExperienceData) => void;
    setDetailOpen: (state: Boolean) => void;
}

const Exp: React.FC<IExp> = ({experience, setData, setDetailOpen}) => {
    const [stateMouse, setStateMouse] = React.useState<Boolean>(false);
    const [color, setColor] = React.useState<string>('');
    const [bgColor] = React.useState<string>('var(--primary)');

    const {job, time, company, about, position, technologiesUsed} = experience;
    const dispatch = useAppDispatch();
    const mouseEnterHandler = (id: String) => {
        setStateMouse(true);
        const selectedExperience = experienceData.filter((exp) => exp.id === id);
        dispatch(experienceActions.selectedExperience(selectedExperience));
    };
    const mouseLeaveHandler = () => {
        setStateMouse(false);
        dispatch(experienceActions.selectedExperience([]));
    };

    const clickHandler = (experience: IExperienceData) => {
        if (experience) {
            setData(experience);
            setDetailOpen(true);
        } else setDetailOpen(false);
    };

    useEffect(() => {
        const colorToShow = tinycolor(bgColor).getBrightness() > 30 ? '#fff ' : '#000';

        setColor(colorToShow);
    }, [color]);

    return (
        <ContainerExp
            color={color}
            bgColor={bgColor}
            className="flex relative max-h-[400px] group  cursor-pointer text-xs sm:text-base w-full h-full rounded"
            onMouseEnter={() => mouseEnterHandler(experience.id)}
            onMouseLeave={mouseLeaveHandler}
            onClick={() => clickHandler(experience)}>
            <ContainerContent
                color={color}
                className=" flex justify-between h-full w-full  flex-row text-left dark:text-primary ">
                <div className=" text-sm xl:text-base basis-1/3 text-black dark:text-primary p-2 transition-all">
                    {time}
                </div>
                <div className="flex space-y-1 pb-2 px-2 flex-col grow  text-left w-full dark:text-primary">
                    <h1 className=" group-hover:text-secondary font-bold transition-all">
                        {position} {job}
                    </h1>

                    <p className="text-sm xl:text-base">{about}</p>
                    <ul className="flex flex-wrap text-sm xl:text-base">
                        {technologiesUsed.map((tech, index) => (
                            <li
                                className="mr-1 font-medium px-2 mb-1 rounded-full bg-[#dfe0e0] dark:text-black py-1"
                                key={tech + '-' + index}>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </ContainerContent>
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
        </ContainerExp>
    );
};

const TitleExperience = () => {
    return (
        <h1
            className="text-xl xs:text-4xl text-bold text-left flex justify-end items-center
             border-b-2 border-solid border-black dark:border-primary dark:text-primary pl-4">
            <div className=" flex justify-start">
                <div className="w-4 h-4 bg-black dark:bg-primary mr-3 " />
            </div>
            <span className="grow">Experience</span>
        </h1>
    );
};

const Experience: React.FC<IExperience> = ({setData, setDetailOpen}) => {
    return (
        <div
            className=" w-full h-full font-Montserrat tracking-wide space-y-2  
            relative z-[1] ">
            <TitleExperience />
            <div className="flex flex-col h-full  space-y-4  ">
                {experienceData.map((exp, index) => (
                    <Fragment key={index}>
                        <Exp experience={exp} setData={setData} setDetailOpen={setDetailOpen} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

const ContainerExp = styled.div<{color: string; bgColor: string}>`
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

export default Experience;
