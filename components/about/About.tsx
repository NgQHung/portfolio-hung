import React from 'react';

const About = () => {
    return (
        <div className="  lg:py-16 xl:py-20 text-black dark:text-primary lg:pl-4 pb-16  lg:pb:0">
            <div
                id="scrollHeaderAbout"
                className="h-full sticky top-0 z-20 w-screen left-0 bg-primary opacity:0.9 dark:bg-[#1a1a1a] dark:shadow-lg dark:opacity-100   ">
                <h1 className="block lg:hidden font-bold py-6 text-2xl px-8 ">About</h1>
            </div>
            <p
                id="about"
                className="pr-8 p-8  lg:px-12 xl:px-16 text-sm sm:text-base  pt-8  lg:pt-16 ">
                Hi, I am Hung Nguyen Quang, 23 years old. I am currently a student of Unicorn
                University, I am very confident in my knowledge of Software Development.
                <br />
                Although I have no formal work experience in the IT field, I have been involved in
                several personal projects recently that have allowed me to develop my skills and
                gain practical knowledge of the field. During this work, I focused on website
                development, mainly using HTML, CSS, JavaScript, Typescript and React. I believe
                these are valuable foundations that can help me understand and well meet the needs
                of your company`s customers.
                <br />I am open to entry-level opportunities, internships, or projects where I can
                apply my skills and continue to grow as an IT professional. I am confident that my
                passion, determination, and hands-on experience make me a valuable asset to any
                team.
            </p>
        </div>
    );
};

export default About;
