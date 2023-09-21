import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    TwitterIcon,
} from '@/components/UI/Icons';
import Head from 'next/head';
import {ReactNode, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import ProjectDetail from '@/components/ProjectDetail';
import {Portal} from '@/components/UI/Portal';
import Layout from '@/components/Layout';
import {useFollowPointer} from '@/components/hook/UseFollowPointer';
import Grid from '@/components/Grid';
import useDeviceSize from '@/components/hook/useDeviceSize';
import ProjectMoreInfo from '@/components/ProjectMoreInfo';
// import {InferGetServerSidePropsType} from 'next';

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
            className="w-6 mx-3 sm:mx-1"
            href={href}
            target={'_blank'}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}>
            {children}
        </motion.a>
    );
};

const Wrapper: React.FC<IWrapper> = ({children, className}) => {
    return <div className="flex justify-between items-center p-8 lg:p-12">{children}</div>;
};
const WrapperIcons: React.FC<IWrapper> = ({children, className}) => {
    return (
        <div className="hidden md:flex md:items-center md:justify-between md:space-x-3 relative z-[1]">
            {children}
        </div>
    );
};
// {
//     dataFromServer,
// }: InferGetServerSidePropsType<typeof getServerSideProps>
export default function Home() {
    const [data, setData] = useState<IProjectData>();
    const [dataMoreInfo, setDataMoreInfo] = useState<string[]>();
    const [detailOpen, setDetailOpen] = useState<Boolean>(false);
    const [moreInfoOpen, setMoreInfoOpen] = useState<Boolean>(false);
    const ref = useRef<any>(null);
    const {x, y} = useFollowPointer(ref);
    const [width, height] = useDeviceSize();
    console.log('detailOpen: ' + detailOpen);

    return (
        <>
            {/* {!detailOpen && width > 820 ? <Grid /> : null} */}

            <div className="overflow-hidden max-h-screen max-w-screen">
                <Layout>
                    <div className="py-16">
                        <Head>
                            <title>Hung Nguyen Quang Portfolio</title>
                            <meta name="description" content="any description" />
                        </Head>
                        <Wrapper>
                            <About />
                            <WrapperIcons>
                                <MotionLink href="">
                                    <GithubIcon />
                                </MotionLink>
                                <MotionLink href="">
                                    <EmailIcon className="w-6" />
                                </MotionLink>
                            </WrapperIcons>
                        </Wrapper>
                        <Wrapper>
                            <WrapperIcons>
                                <MotionLink href="">
                                    <TwitterIcon className="w-6" />
                                </MotionLink>
                                <MotionLink href="">
                                    <LinkedInIcon className="w-6" />
                                </MotionLink>
                                <MotionLink href="">
                                    <PinterestIcon className="w-6" />
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
        </>
    );
}

// export async function getServerSideProps() {
//     return {
//         dataFromServer: {}, // will be passed to the page component as props
//     };
// }
