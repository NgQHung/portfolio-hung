import React from "react";
import { AnimatedButtonHover } from "./UI/AnimatedButtonHover";
import TerminalTextEffect from "./TerminalTextEffect";

interface IIntroduce {
  setProfileOpen: (state: Boolean) => void;
}
const Introduce: React.FC<IIntroduce> = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" max-w-[450px] max-h-full lg:max-h-[280px] font-Montserrat tracking-wide relative z-[2]">
      <h1 className="h-[100px] text-4xl relative ">
        <TerminalTextEffect />
      </h1>
      <h2 className="mt-2 lg:mt-4 font-bold text-sm sm:text-xl text-black dark:text-primary">
        Frontend Developer
      </h2>
      <p className="mt-2 lg:mt-4 text-xs sm:text-base font-medium text-black dark:text-primary">
        Hi, I am Hung Nguyen Quang, {currentYear - 2000} years old. I build
        modern web applications with React and TypeScript/JavaScript. I focus on
        creating responsive, clean, and user-friendly interfaces that work well
        across different devices. I enjoy solving frontend problems, improving
        UI performance, and writing code that is easy to maintain and reuse.
      </p>

      <div
        onClick={() => props.setProfileOpen(true)}
        className="mt-2 lg:mt-4 cursor-pointer inline-block"
      >
        <AnimatedButtonHover title="View My Profile" />
      </div>
    </div>
  );
};

export default Introduce;
