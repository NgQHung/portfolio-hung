import React from 'react';

const About = () => {
    return (
        <div className="  lg:py-16 xl:py-20 text-black dark:text-primary lg:pl-4 pb-16  lg:pb:0">
            <div
                id="scrollHeaderAbout"
                className="h-full sticky top-0 z-20 w-screen left-0 bg-primary opacity:0.9 dark:bg-[#1a1a1a] dark:shadow-lg dark:opacity-100   ">
                <h1 className="block lg:hidden font-bold py-6 text-2xl px-8 ">About</h1>
            </div>
            <div
                id="about"
                className="pr-8 p-8  lg:px-12 xl:px-16 text-sm sm:text-base  pt-8  lg:pt-16 ">
                <p className="mb-4">
                    I am a dedicated Frontend Developer with a strong passion for creating elegant
                    and responsive web applications. My expertise extends to a wide array of modern
                    web technologies, including HTML5, CSS3, and JavaScript, Typescript with a
                    particular focus on frameworks such as React and Next.js.
                </p>
                <p className="mb-4">
                    My main focus these days is creating web solutions that not only meet but exceed
                    user expectations.
                </p>
                <p>
                    Outside of work, I am an avid learner, always seeking to expand my knowledge and
                    skill set. I look forward to the challenges and opportunities that lie ahead in
                    the ever-evolving world of web development, and I am eager to continue making a
                    meaningful impact in this field.
                </p>
            </div>
        </div>
    );
};

export default About;
