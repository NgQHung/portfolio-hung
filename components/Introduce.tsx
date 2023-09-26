import React from 'react';
import {AnimatedButtonHover} from './UI/AnimatedButtonHover';
import TerminalTextEffect from './TerminalTextEffect';

interface IIntroduce {
    setProfileOpen: (state: Boolean) => void;
}
const Introduce: React.FC<IIntroduce> = (props) => {
    return (
        <div className="max-w-[450px] max-h-[225px] font-Montserrat tracking-wide space-y-3 relative z-[1]">
            <h1 className="text-xl h-[50px] xs:h-[100px] xs:text-4xl relative ">
                <TerminalTextEffect />
            </h1>
            <h2 className="font-bold text-sm sm:text-xl text-black dark:text-primary">Developer</h2>
            <p className="text-xs sm:text-base font-medium text-black dark:text-primary">
                Hi, I am Hung Nguyen Quang, 23 years old. I am currently a student of Unicorn
                University, I am very confident in my knowledge of Software Development.
            </p>

            <div
                onClick={() => props.setProfileOpen(true)}
                className="mt-4 cursor-pointer inline-block">
                <AnimatedButtonHover title="View My Profile" />
            </div>
        </div>
    );
};

export default Introduce;
