import {Fragment, ReactNode, useRef, useState} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {useFollowPointer} from '@/components/hook/UseFollowPointer';

import DarkLightButton from '@/components/DarkLightButton';
// import Introduce from '@/components/Introduce';
const DynamicIntroduce = dynamic(() => import('@/components/Introduce'));

const DynamicAbout = dynamic(() => import('@/components/about/About'));
const DynamicProjects = dynamic(() => import('@/components/project/Projects'));
const DynamicProjectDetail = dynamic(() => import('@/components/project/ProjectDetail'));
const DynamicLayout = dynamic(() => import('@/components/Layout'));
const DynamicProjectMoreInfo = dynamic(() => import('@/components/project/ProjectMoreInfo'));
const DynamicErrorPageWithWidth = dynamic(() => import('@/components/ErrorPageWithWidth'));
const DynamicAnimatedBackgroundText = dynamic(() => import('@/components/AnimatedBackgroundText'));
const DynamicGrid = dynamic(() => import('@/components/Grid'));
const DynamicDarkLightButton = dynamic(() => import('@/components/DarkLightButton'));
const DynamicLinks = dynamic(() => import('@/components/links'));
const DynamicProfile = dynamic(() => import('@/components/Profile'));

interface IWrapper {
    children: ReactNode;
    className?: String;
}

export default function Home() {
    const [data, setData] = useState<IProjectData>();
    const [dataMoreInfo, setDataMoreInfo] = useState<string[]>();
    const [profileOpen, setProfileOpen] = useState<Boolean>(false);
    // const [modalActive, setModalActive] = useState<Boolean>(false);
    const [detailOpen, setDetailOpen] = useState<Boolean>(false);
    const [moreInfoOpen, setMoreInfoOpen] = useState<Boolean>(false);
    const ref = useRef<any>(null);
    const {x, y} = useFollowPointer(ref);
    console.log('profile: ' + profileOpen);

    return (
        <Fragment>
            <Head>
                <title>Hung Nguyen Quang Portfolio</title>
                <meta name="description" content="any description" />
            </Head>
            {/* <Grid /> */}
            {/* <Profile setProfileOpen={setProfileOpen} profileOpen={profileOpen} /> */}
            <DarkLightButton />
            <div className="hidden xss:block overflow-hidden max-h-screen max-w-screen ">
                <DynamicLayout>
                    <Wrapper className="justify-between items-start py-16 px-8 lg:px-12 xl:px-16 lg:py-28 basis-[50%]">
                        <DynamicIntroduce setProfileOpen={setProfileOpen} />
                        <DynamicLinks />
                    </Wrapper>
                    <Wrapper className=" grow pr-8 lg:px-12 xl:px-16  basis-[50%]">
                        <div className="sticky overflow-scroll pt-28 top-0 right-0 h-full w-full scrollbar_hidden  space-y-10">
                            {/* <DynamicAnimatedBackgroundText /> */}
                            <DynamicAbout />
                            <DynamicProjects
                                setDataMoreInfo={setDataMoreInfo}
                                setData={setData}
                                setDetailOpen={setDetailOpen}
                            />
                        </div>
                    </Wrapper>
                </DynamicLayout>
                {/* <DynamicProjectDetail
                    project={data!}
                    setDetailOpen={setDetailOpen}
                    detailOpen={detailOpen}
                    moreInfoOpen={moreInfoOpen}
                    setMoreInfoOpen={setMoreInfoOpen}
                /> */}

                <DynamicProjectMoreInfo
                    dataMoreInfo={dataMoreInfo!}
                    moreInfoOpen={moreInfoOpen}
                    detailOpen={detailOpen}
                    setMoreInfoOpen={setMoreInfoOpen}
                />
                {/* <ProjectDetailV2 /> */}
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
    return <div className={`flex flex-col h-full  ${className}`}>{children}</div>;
};
