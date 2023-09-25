import {Fragment, ReactNode, useRef, useState} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {useFollowPointer} from '@/components/hook/UseFollowPointer';

import DarkLightButton from '@/components/DarkLightButton';
const DynamicAbout = dynamic(() => import('@/components/About'));
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

interface ICustomLink {
    children?: ReactNode;
    href: string;
    className?: string;
}

const Wrapper: React.FC<IWrapper> = ({children, className}) => {
    return <div className={`flex items-start p-8 lg:p-12 ${className}`}>{children}</div>;
};
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
                    <Wrapper className="justify-between ">
                        <DynamicAbout setProfileOpen={setProfileOpen} />
                        <DynamicAnimatedBackgroundText />
                    </Wrapper>
                    <Wrapper className="justify-end items-end md:justify-between ">
                        <DynamicLinks />
                        <DynamicProjects
                            setDataMoreInfo={setDataMoreInfo}
                            setData={setData}
                            setDetailOpen={setDetailOpen}
                        />
                    </Wrapper>
                </DynamicLayout>
                <DynamicProjectDetail
                    project={data!}
                    setDetailOpen={setDetailOpen}
                    detailOpen={detailOpen}
                    moreInfoOpen={moreInfoOpen}
                    setMoreInfoOpen={setMoreInfoOpen}
                />

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
