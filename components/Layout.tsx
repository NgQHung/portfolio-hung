import React from 'react';

interface ILayout {
    children: React.ReactNode;
    className?: String;
}

const Layout: React.FC<ILayout> = ({children, className}) => {
    return (
        <div className={`h-screen w-screen bg-primary p-12 ${className} dark:bg-dark`}>
            <div
                className="border border-solid  h-full w-full relative border-black dark:border-primary
                overflow-hidden
            ">
                <div className="h-full w-full sticky overflow-scroll scrollbar_hidden lg:relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
