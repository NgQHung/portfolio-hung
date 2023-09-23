import About from '@/components/About';
import Projects from '@/components/Projects';
import styled from '@emotion/styled';

import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    // PinterestIcon,
    // TwitterIcon,
} from '@/components/UI/Icons';
import Head from 'next/head';
import {Fragment, ReactNode, useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import ProjectDetail from '@/components/ProjectDetail';
import {Portal} from '@/components/UI/Portal';
import Layout from '@/components/Layout';
import {useFollowPointer} from '@/components/hook/UseFollowPointer';
import ProjectMoreInfo from '@/components/ProjectMoreInfo';
import ErrorPageWithWidth from '@/components/ErrorPageWithWidth';
import AnimatedBackgroundText from '@/components/AnimatedBackgroundText';
import Grid from '@/components/Grid';
import DarkLightButton from '@/components/DarkLightButton';

interface IWrapper {
    children: ReactNode;
    className?: String;
}

interface ICustomLink {
    children?: ReactNode;
    href: string;
    className?: string;
}

const Wrapper: React.FC<IWrapper> = ({children, className}) => {
    return <div className={`flex items-start p-8 lg:p-12 ${className}`}>{children}</div>;
};
const WrapperIcons: React.FC<IWrapper> = ({children, className}) => {
    return (
        <div
            className={`absolute bottom-0 left-0 items-end m-8 h-full flex justify-between  space-x-3 md:relative md:items-center md:m-0 z-[1] ${className}`}>
            {children}
        </div>
    );
};
export default function Home() {
    const [data, setData] = useState<IProjectData>();
    const [dataMoreInfo, setDataMoreInfo] = useState<string[]>();
    const [detailOpen, setDetailOpen] = useState<Boolean>(false);
    const [moreInfoOpen, setMoreInfoOpen] = useState<Boolean>(false);
    const ref = useRef<any>(null);
    const {x, y} = useFollowPointer(ref);

    return (
        <Fragment>
            <Head>
                <title>Hung Nguyen Quang Portfolio</title>
                <meta name="description" content="any description" />
            </Head>
            <div className="hidden md:block">
                <Grid />
            </div>
            <DarkLightButton />
            {/* hidden xs:block */}
            <div className=" overflow-hidden max-h-screen max-w-screen ">
                <Layout>
                    <div className="py-16 flex flex-col justify-between h-full">
                        <Wrapper className="justify-between ">
                            <About />
                            <AnimatedBackgroundText />
                        </Wrapper>
                        <Wrapper className="justify-end md:justify-between ">
                            <WrapperIcons className="hidden dark:flex">
                                <ContainerLink href="https://www.linkedin.com/in/hung-nguyen-quang-9046aa199/">
                                    <LinkedInIcon color="none" className="w-6" />
                                </ContainerLink>
                                <ContainerLink href="https://github.com/NgQHung">
                                    <GithubIcon color="#fff" className=" w-6 " />
                                </ContainerLink>
                                <ContainerLink href="mailto:hunghunghung273@gmail.com">
                                    <EmailIcon color="#fff" className="w-6" />
                                </ContainerLink>
                            </WrapperIcons>
                            <WrapperIcons className="block dark:hidden">
                                <MotionLink href="https://www.linkedin.com/in/hung-nguyen-quang-9046aa199/">
                                    <LinkedInIcon color="#0A66C2" className="w-6" />
                                </MotionLink>
                                <MotionLink href="https://github.com/NgQHung">
                                    <GithubIcon color="currentColor" className=" w-6 " />
                                </MotionLink>
                                <MotionLink href="mailto:hunghunghung273@gmail.com">
                                    <EmailIcon
                                        color="#1a1a1a"
                                        className="w-6 border border-solid"
                                    />
                                </MotionLink>
                            </WrapperIcons>
                            <Projects
                                setDataMoreInfo={setDataMoreInfo}
                                setData={setData}
                                setDetailOpen={setDetailOpen}
                            />
                        </Wrapper>
                    </div>
                </Layout>
                <AnimatePresence>
                    {data && detailOpen && !moreInfoOpen ? (
                        <div className="relative z-[3]">
                            <motion.div
                                initial={{x: 450, y: '-100vh', opacity: 0}}
                                animate={{
                                    x: 0,
                                    y: '-100vh',
                                    opacity: 1,
                                    transition: {
                                        type: 'tween',
                                    },
                                }}
                                exit={{
                                    x: '100vw',
                                    opacity: 0,
                                    transition: {
                                        duration: 0.7,
                                    },
                                }}>
                                <Portal />
                                <ProjectDetail
                                    project={data}
                                    setDetailOpen={setDetailOpen}
                                    detailOpen={detailOpen}
                                    setMoreInfoOpen={setMoreInfoOpen}
                                />
                            </motion.div>
                        </div>
                    ) : null}
                </AnimatePresence>
                <AnimatePresence>
                    {dataMoreInfo && moreInfoOpen && !detailOpen ? (
                        <div className="relative z-[4]">
                            <motion.div
                                initial={{y: '-400vh', opacity: 0}}
                                animate={{
                                    y: '-100vh',
                                    opacity: 1,
                                    transition: {
                                        type: 'tween',
                                    },
                                }}
                                exit={{
                                    y: '-400vh',
                                    opacity: '0',
                                    transition: {
                                        duration: 0.5,
                                        type: 'tween',
                                    },
                                }}>
                                <Portal />
                                <ProjectMoreInfo
                                    dataMoreInfo={dataMoreInfo!}
                                    setMoreInfoOpen={setMoreInfoOpen}
                                />
                            </motion.div>
                        </div>
                    ) : null}
                </AnimatePresence>
                {/* <motion.div
                    ref={ref}
                    className="w-4 h-4 rounded-full border border-secondary flex justify-center items-center"
                    animate={{x, y}}
                    transition={{
                        type: 'spring',
                        mass: 0.1,
                        stiffness: 500,
                        damping: 10,
                    }}>
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                </motion.div> */}
            </div>
            {/* <ErrorPageWithWidth /> */}
        </Fragment>
    );
}
const ContainerLink = styled.a`
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 63px;
    background: #333;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: 0.5s;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #ffee10;
        transition: 0.5s;
        transform: scale(0.9);
        z-index: -1;
    }
    &:hover::before {
        transform: scale(1.1);
        box-shadow: 0 0 15px #ffee10;
    }
    &:hover {
        color: #ffee10;
        box-shadow: 0 0 5px #ffee10;
        text-shadow: 0 0 5px #ffee10;
    }
`;

const MotionLink: React.FC<ICustomLink> = ({href, children, className}) => {
    //  hover:animate-flip
    return (
        <motion.a
            className={`w-6 space-x-1 md:space-x-3 ${className}`}
            href={href}
            target={'_blank'}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}>
            {children}
        </motion.a>
    );
};
