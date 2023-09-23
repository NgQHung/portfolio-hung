import React from 'react';
import styled from '@emotion/styled';

const Portfolio = 'Portfolio';

const Container = styled.span`
    width: 100vw;
    text-align: center;
    span {
        -webkit-text-stroke-width: 1.25px;
        -webkit-text-stroke-color: #000;
        /* font-size: 100px; */
        text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
        transform: translate(0, 100%) rotate(4deg);
        animation: jump 2s ease-in-out infinite;
        display: inline-block;
        font-family: 'Titan One', cursive;
        /* color: #fff; */
    }
`;

const AnimatedBackgroundText = () => {
    return (
        <Container
            className="text-[25px] xs:text-[40px] sm:text-[50px] md:text-[75px] lg:text-[100px] w-screen 
        absolute top-[20px] sm:top-[10px] md:top-auto right-[-50px] sm:right-[-40px] md:right-0 translate-x-[20%] 
        lg:translate-x-[30%] text-center ">
            {Portfolio.split('').map((word, index) => (
                <span
                    key={word + '-' + index}
                    style={{animationDelay: index / 5 + 's'}}
                    className="text-animation animate-jump text-secondary dark:text-primary">
                    {word}
                </span>
            ))}
        </Container>
    );
};

export default AnimatedBackgroundText;
