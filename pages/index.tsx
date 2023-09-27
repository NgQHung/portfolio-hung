import {Fragment, ReactNode, useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {useFollowPointer} from '@/components/hook/UseFollowPointer';
import useDeviceSize from '@/components/hook/useDeviceSize';
import useWindowPosition from '@/components/hook/useWindowScrollPositions';
// const DynamicAnimatedBackgroundText = dynamic(() => import('@/components/AnimatedBackgroundText'));

const DynamicIntroduce = dynamic(() => import('@/components/Introduce'));
const DynamicAbout = dynamic(() => import('@/components/about/About'));
const DynamicProjects = dynamic(() => import('@/components/project/Projects'));
const DynamicLayout = dynamic(() => import('@/components/Layout'));
const DynamicProjectMoreInfo = dynamic(() => import('@/components/project/ProjectMoreInfo'));
const DynamicErrorPageWithWidth = dynamic(() => import('@/components/ErrorPageWithWidth'));
const DynamicGrid = dynamic(() => import('@/components/Grid'));
const DynamicDarkLightButton = dynamic(() => import('@/components/DarkLightButton'));
const DynamicLinks = dynamic(() => import('@/components/links'));
const DynamicProfile = dynamic(() => import('@/components/Profile'));
const DynamicExperience = dynamic(() => import('@/components/Experience'));
const DynamicNavbar = dynamic(() => import('@/components/Navbar'));
interface IWrapper {
    children: ReactNode;
    className?: String;
}

export default function Home() {
    const [data, setData] = useState<IProjectData>();
    const [experience, setExperience] = useState<IExperienceData>();
    const [dataMoreInfo, setDataMoreInfo] = useState<string[]>();
    const [profileOpen, setProfileOpen] = useState<Boolean>(false);
    const [detailOpen, setDetailOpen] = useState<Boolean>(false);
    const [moreInfoOpen, setMoreInfoOpen] = useState<Boolean>(false);
    const ref = useRef<any>(null);
    const {x, y} = useFollowPointer(ref);
    const [width] = useDeviceSize();
    const scrollRef = useRef<any>(null);

    return (
        <Fragment>
            <Head>
                <title>Hung Nguyen Quang Portfolio</title>
                <meta name="description" content="any description" />
            </Head>
            <DynamicGrid />
            <DynamicDarkLightButton />
            <div className="hidden xss:block  max-h-screen max-w-screen">
                <DynamicLayout>
                    <div
                        // style={{height: `${width < 1024 ? 'max-content' : ''}`}}
                        className="relative max-h-[400px] lg:h-full lg:absolute inline-block lg:flex lg:flex-col  top-0 left-0 lg:justify-between lg:items-start 
                        py-16 px-8 lg:px-12 xl:px-16 lg:py-16 max-w-full lg:max-w-[50%]">
                        <DynamicIntroduce setProfileOpen={setProfileOpen} />
                        <DynamicNavbar />
                        <DynamicLinks />
                    </div>
                    <div
                        ref={scrollRef}
                        className="flex-col  h-full relative lg:sticky lg:overflow-scroll  scrollbar_hidden 
                    top-0 right-0 left-0 flex justify-end items-end w-full   ">
                        <div className="top-0 right-0 h-full  max-w-[100%] lg:max-w-[50%] ">
                            {/* <DynamicAnimatedBackgroundText /> */}
                            <DynamicAbout />
                            <DynamicExperience setExperience={setExperience} />
                            <DynamicProjects setData={setData} />
                        </div>
                    </div>
                </DynamicLayout>

                <DynamicProjectMoreInfo
                    dataMoreInfo={dataMoreInfo!}
                    moreInfoOpen={moreInfoOpen}
                    detailOpen={detailOpen}
                    setMoreInfoOpen={setMoreInfoOpen}
                />
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
            <DynamicProfile setProfileOpen={setProfileOpen} profileOpen={profileOpen} />
            <DynamicErrorPageWithWidth />
        </Fragment>
    );
}

const Wrapper: React.FC<IWrapper> = ({children, className}) => {
    return <div className={`flex flex-col h-full   ${className}`}>{children}</div>;
};
