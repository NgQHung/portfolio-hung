import React, {Fragment, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {experienceData} from './data/experience';
import {experienceActions} from '@/stores/Experience';
import {useAppDispatch, useAppSelector} from './hook/useApp';
import {LinkArrow} from './UI/Icons';
import {useRouter} from 'next/router';

interface IExp {
    experience: IExperienceData;
}

const Exp: React.FC<IExp> = ({experience}) => {
    const [stateMouse, setStateMouse] = useState<Boolean>(false);
    const isDark = useAppSelector((state) => state.themeSwitcher.isDark);
    const [bgColor, setBgColor] = useState<string>('var(--primary)');
    const route = useRouter();

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
        route.push(experience.web);
    };

    useEffect(() => {
        setBgColor(isDark ? '#1a1a1a' : 'var(--primary)');
    }, [isDark]);

    return (
        <>
            <ContainerExp
                bgColor={bgColor}
                isDark={isDark}
                className="hidden shadow-lg dark:shadow-lightShadowMd lg:flex mb-10  relative group cursor-pointer text-xs sm:text-base w-full h-full rounded"
                onMouseEnter={() => mouseEnterHandler(experience.id)}
                onMouseLeave={mouseLeaveHandler}
                onClick={() => clickHandler(experience)}>
                <ContainerContent
                    isDark={isDark}
                    className=" flex justify-between h-full w-full  text-left dark:text-primary ">
                    <div className=" dark:opacity-70 text-sm xl:text-base basis-1/3 uppercase text-black dark:text-primary p-2 transition-all">
                        {time}
                    </div>
                    <div className="flex space-y-1 self-start py-2 flex-col  text-left w-full dark:text-primary">
                        <h1 className=" flex group-hover:text-secondary font-bold transition-all">
                            {position !== '' ? <span>{position}·</span> : null}{' '}
                            <span className="pr-4">{company}</span>
                            <LinkArrow />
                        </h1>
                        <p className="text-sm ">{about}</p>
                        <ul className="flex flex-wrap text-sm ">
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
            </ContainerExp>
            <div
                className="flex p-4 sm:p-8 lg:hidden  self-start relative group cursor-pointer text-base w-full h-full rounded"
                onMouseEnter={() => mouseEnterHandler(experience.id)}
                onMouseLeave={mouseLeaveHandler}
                onClick={() => clickHandler(experience)}>
                <div className=" flex justify-between h-full w-full flex-col sm:flex-row  text-left dark:text-primary ">
                    <div className="dark:opacity-70 leading-6 text-xs font-[600] lg:text-base basis-1/3 uppercase text-black dark:text-primary lg:p-2 transition-all">
                        {time}
                    </div>
                    <div className="flex space-y-1 self-start flex-col  text-left w-full dark:text-primary">
                        <h1 className=" flex group-hover:text-secondary font-bold transition-all">
                            {position !== '' ? <span>{position}·</span> : null}{' '}
                            {/* <span>{`${position}`}</span> */}
                            <span className="pr-4">{company}</span>
                            <LinkArrow />
                        </h1>
                        <p className="text-sm xl:text-base pb-4">{about}</p>
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
                </div>
            </div>
        </>
    );
};

const TitleExperience = () => {
    return (
        <>
            <h1
                className="hidden text-xl pt-10 xs:text-4xl font-bold text-left lg:flex justify-end items-center
                 border-b-2 border-solid border-black dark:border-primary dark:text-primary pl-4">
                <div className=" flex justify-start">
                    <div className="w-4 h-4 bg-black dark:bg-primary mr-3 " />
                </div>
                <span className="grow">Experience</span>
            </h1>
            <div
                id="scrollHeaderExperience"
                className="lg:hidden h-full sticky top-0 z-20 w-full left-0 bg-primary opacity:0.9  dark:bg-[#1a1a1a] dark:shadow-lg dark:opacity-100   ">
                <h1
                    className="px-4 sm:px-8  py-[24px] lg:py-8 text-2xl lg:pt-10 font-bold text-left flex justify-end items-center
                  dark:text-primary">
                    <span className="grow">Experience</span>
                </h1>
            </div>
        </>
    );
};

const Experience = () => {
    return (
        <div
            id="experience"
            className="lg:pr-8 lg:px-12 xl:px-16  w-full h-full font-Montserrat tracking-wide lg:space-y-2  
            relative z-[1] lg:pb-0"
            style={{height: 'max-content'}}>
            <TitleExperience />
            {experienceData.map((exp, index) => (
                <Fragment key={index}>
                    <Exp experience={exp} />
                </Fragment>
            ))}
        </div>
    );
};

const ContainerExp = styled.div<{bgColor: string; isDark: Boolean}>`
    position: relative;
    width: 100%;
    height: 100px;
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

export default Experience;
