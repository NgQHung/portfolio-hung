import React from 'react';

const Portfolio = 'Portfolio';

const AnimatedBackgroundText = () => {
    return (
        <div
            className="text-[25px] xs:text-[40px] sm:text-[50px] md:text-[75px] lg:text-[100px] w-screen 
        absolute top-[20px] sm:top-[10px] md:top-auto right-[-50px] sm:right-[-40px] md:right-0 translate-x-[20%] 
        lg:translate-x-[30%] text-center font-bold opacity-70">
            {Portfolio.split('').map((word, index) => (
                <span
                    key={word + '-' + index}
                    style={{animationDelay: index / 5 + 's'}}
                    className=" text-animation inline-block text-transparent dark:text-primary font-Montserrat">
                    {word}
                </span>
            ))}
        </div>
    );
};

export default AnimatedBackgroundText;
