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
             flex justify-between 
            ">
                {children}
            </div>
        </div>
    );
};

export default Layout;
