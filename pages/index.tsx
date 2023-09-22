import About from '@/components/About';
import Projects from '@/components/Projects';
import styled from '@emotion/styled';

import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    TwitterIcon,
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
import BouncingBall from '@/components/UI/BouncingBall';
import Runaway from '@/components/UI/Runaway';
import AnimatedBackgroundText from '@/components/AnimatedBackgroundText';

interface IWrapper {
    children: ReactNode;
    className?: String;
}

interface ICustomLink {
    children?: ReactNode;
    href: string;
}
const MotionLink: React.FC<ICustomLink> = ({href, children}) => {
    return (
        <motion.a
            className="w-6 space-x-1 md:space-x-3"
            href={href}
            target={'_blank'}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}>
            {children}
        </motion.a>
    );
};

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
            {/* <div className="hidden md:block">
                <Grid />
            </div> */}
            <div className="hidden xs:block overflow-hidden max-h-screen max-w-screen ">
                <Layout>
                    <div className="py-16 flex flex-col justify-between h-full">
                        <Wrapper className="justify-between ">
                            <About />
                            <AnimatedBackgroundText />
                            {/* <div className="grow mx:0 lg:mx-40">
                                <BouncingBall />
                            </div> */}
                        </Wrapper>
                        <Wrapper className="justify-end md:justify-between ">
                            <WrapperIcons>
                                <MotionLink href="https://www.linkedin.com/in/hung-nguyen-quang-9046aa199/">
                                    <LinkedInIcon className="w-6" />
                                </MotionLink>
                                <MotionLink href="https://github.com/NgQHung">
                                    <GithubIcon />
                                </MotionLink>
                                <MotionLink href="mailto:hunghunghung273@gmail.com">
                                    <EmailIcon className="w-6" />
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
                <motion.div
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
                </motion.div>
            </div>
            <ErrorPageWithWidth />
        </Fragment>
    );
}

const ContainerButton = styled.div`
    height: 60px;
    position: relative;
    width: 100%;
    display: block;
`;

const Button = styled.button<{state: number}>`
    padding: 10px 20px;
    background-color: slateblue;
    color: white;
    font-size: 1rem;
    letter-spacing: 2px;
    border-radius: 2rem;
    margin-top: 20px;
    border: 1px slateblue solid;
    text-transform: capitalize;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    transition: all 0.7s ease;
    /* left: ${(props) =>
        props.state === 1 ? '0px' : props.state === 2 ? '200px' : props.state === 3 ? '450px' : ''};
    position: 'absolute'; */
`;
