import {Fragment, ReactNode, useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const DynamicIntroduce = dynamic(() => import('@/components/Introduce'));
const DynamicAbout = dynamic(() => import('@/components/about/About'));
const DynamicProjects = dynamic(() => import('@/components/project/Projects'));
const DynamicLayout = dynamic(() => import('@/components/Layout'));
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
    const [profileOpen, setProfileOpen] = useState<Boolean>(false);
    const [activeLinkName, setActiveLinkName] = useState<String>('');
    const scrollRef = useRef<any>(null);

    var prevId: any;
    const onScrollHandler = () => {
        document.getElementById('scrollItem')?.addEventListener('scroll', function () {
            var elementWidth = 400;
            var content = document.getElementById('content');
            if (!content) return;
            var offset = content.getBoundingClientRect();
            var positive = Math.abs(offset.top);
            var divided = positive / elementWidth;
            var round = Math.round(divided);

            var children = content.children;
            var currentElement = children[round];
            var id = currentElement.getAttribute('id');

            if (id !== prevId) {
                prevId = id;
                setActiveLinkName(id!);
            }
        });
    };

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
                        className="relative max-h-[400px] lg:h-full lg:absolute inline-block lg:flex lg:flex-col  top-0 left-0 lg:justify-between lg:items-start 
                        py-16 px-8 lg:px-12 xl:px-16 lg:py-16 max-w-full lg:max-w-[50%]">
                        <DynamicIntroduce setProfileOpen={setProfileOpen} />
                        <DynamicNavbar activeLinkName={activeLinkName} />
                        <DynamicLinks />
                    </div>
                    <div
                        ref={scrollRef}
                        onScroll={onScrollHandler}
                        id="scrollItem"
                        className="flex-col  h-full relative lg:sticky lg:overflow-scroll  scrollbar_hidden 
                    top-0 right-0 left-0 flex justify-end items-end w-full   ">
                        <div
                            id="content"
                            className="top-0 right-0 h-full  max-w-[100%] lg:max-w-[50%] ">
                            <DynamicAbout />
                            <DynamicExperience />
                            <DynamicProjects />
                        </div>
                    </div>
                </DynamicLayout>
            </div>
            <DynamicProfile setProfileOpen={setProfileOpen} profileOpen={profileOpen} />
            <DynamicErrorPageWithWidth />
        </Fragment>
    );
}

const Wrapper: React.FC<IWrapper> = ({children, className}) => {
    return <div className={`flex flex-col h-full   ${className}`}>{children}</div>;
};
