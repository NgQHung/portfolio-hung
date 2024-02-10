import React, {useEffect, useRef} from 'react';
// import {useFollowPointer} from './hook/UseFollowPointer';
import {useAppSelector} from './hook/useApp';
// import useDeviceSize from './hook/useDeviceSize';

interface ILayout {
    children: React.ReactNode;
    className?: String;
}

const Layout: React.FC<ILayout> = ({children, className}) => {
    // const scrollRef = useRef<any>();
    // const isDark = useAppSelector((state) => state.themeSwitcher.isDark);
    // const [width] = useDeviceSize();

    // const onScrollHandler = () => {
    //     // const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    //     // const scrollTop = scrollRef.current.scrollTop;
    //     var aboutHtsHeader = document.getElementById('scrollHeaderProjects');
    //     console.log(window);
    //     // console.log(window);
    // };

    // useEffect(() => {
    //     if (!isDark) {
    //         document.getElementById('scrollHeaderProjects')?.classList.remove('darkHeaderSticky');
    //     }
    // }, [isDark]);
    return (
        <div className={`h-screen w-screen bg-primary p-6 sm:p-12  ${className} dark:bg-dark`}>
            <div
                className="border border-solid  h-full w-full relative border-black dark:border-primary
                overflow-hidden
            ">
                <div
                    // ref={scrollRef}
                    // onScroll={onScrollHandler}
                    className="h-full w-full sticky overflow-scroll scrollbar_hidden lg:relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
