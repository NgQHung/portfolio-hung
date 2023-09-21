import React from 'react';

interface ILayout {
    children: React.ReactNode;
    className?: String;
}

const Layout: React.FC<ILayout> = ({children, className}) => {
    return (
        <div className={` h-screen w-screen bg-primary p-8 lg:p-12 ${className} `}>
            <div className="border border-solid border-black h-full w-full relative">
                {children}
            </div>
        </div>
    );
};

export default Layout;
