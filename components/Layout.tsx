import React, {useRef, useState} from 'react';
import {useFollowPointer} from './hook/UseFollowPointer';

interface ILayout {
    children: React.ReactNode;
    className?: String;
}

const Layout: React.FC<ILayout> = ({children, className}) => {
    const scrollRef = useRef<any>();
    const [scrollPosition, setScrollPosition] = useState(0);

    const onScrollHandler = () => {
        // const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
        const scrollTop = scrollRef.current.scrollTop;
        var aboutHeader = document.getElementById('scrollHeaderAbout');
        var experienceHeader = document.getElementById('scrollHeaderExperience');
        var projectsHeader = document.getElementById('scrollHeaderProjects');
        setScrollPosition(scrollTop);
        if (scrollTop >= 400 && scrollTop <= 888) {
            aboutHeader?.classList.add('headerSticky');
        } else aboutHeader?.classList.remove('headerSticky');
        if (scrollTop >= 888 && scrollTop <= 1226) {
            experienceHeader?.classList.add('headerSticky');
        } else experienceHeader?.classList.remove('headerSticky');

        if (scrollTop >= 1226 || scrollTop < 888) {
            projectsHeader?.classList.add('headerSticky');
        } else projectsHeader?.classList.remove('headerSticky');

        // scrollTop >= 400 && scrollTop <= 888 ? aboutHeader?.classList.add('headerSticky') : aboutHeader?.classList.remove('headerSticky');
    };
    return (
        <div className={`h-screen w-screen bg-primary p-12 ${className} dark:bg-dark`}>
            <div
                className="border border-solid  h-full w-full relative border-black dark:border-primary
                overflow-hidden
            ">
                <div
                    ref={scrollRef}
                    onScroll={onScrollHandler}
                    className="h-full w-full sticky overflow-scroll scrollbar_hidden lg:relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
