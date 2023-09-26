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
            {/* <p className="my-4">
                    Although I have no formal work experience in the IT field, I have been involved
                    in several personal projects recently that have allowed me to develop my skills
                    and gain practical knowledge of the field. During this work, I focused on
                    website development, mainly using HTML, CSS, JavaScript, Typescript and React. I
                    believe these are valuable foundations that can help me understand and well meet
                    the needs of your company`s customers.
                </p>
                <p className="">
                    I am open to entry-level opportunities, internships, or projects where I can
                    apply my skills and continue to grow as an IT professional. I am confident that
                    my passion, determination, and hands-on experience make me a valuable asset to
                    any team.
                </p> */}
            {/* </div> */}

            <div
                onClick={() => props.setProfileOpen(true)}
                className="mt-4 cursor-pointer inline-block">
                <AnimatedButtonHover title="View My Profile" />
            </div>
        </div>
    );
};

export default Introduce;
