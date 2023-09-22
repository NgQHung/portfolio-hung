import React, {Fragment, useEffect, useState} from 'react';
import {AnimatedButtonHover} from './UI/AnimatedButtonHover';
import TerminalTextEffect from './TerminalTextEffect';

const text = 'Hung Nguyen Quang';

const About = () => {
    return (
        <div className="max-w-[450px] max-h-[225px] font-Montserrat tracking-wide space-y-3 relative z-[1]">
            <h1 className="text-4xl relative">
                {/* {text.split(' ').map((word, index) => (
                    <Fragment key={word + '-' + index}>
                        {word.split('').map((wrd, index) => (
                            <span
                                style={{animationDelay: index / 5 + 's'}}
                                className={`relative inline-block uppercase animate-wiggle wiggle `}
                                key={wrd + '-' + index}>
                                {wrd}
                            </span>
                        ))}
                        &nbsp;
                    </Fragment>
                ))} */}
                <TerminalTextEffect />
            </h1>
            <h2 className="font-bold">Developer</h2>
            {/* <div className="sm:text-[10px] md:text-xs font-medium"> */}
            <p className="text-xs font-medium">
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

            <div className="mt-4 cursor-pointer">
                <AnimatedButtonHover title="View My Profile" />
            </div>
        </div>
    );
};

export default About;
