import React from 'react';
import styled from '@emotion/styled';

const Portfolio = 'Portfolio';

const Container = styled.div`
    width: 100vw;
    text-align: center;
    span {
        -webkit-text-stroke-width: 1.25px;
        -webkit-text-stroke-color: #000;
        font-size: 100px;
        text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
        transform: translate(0, 100%) rotate(4deg);
        animation: jump 2s ease-in-out infinite;
        display: inline-block;
        font-family: 'Titan One', cursive;
        color: #fff;

        @for $i from 1 through 7 {
            &:nth-child(#{$i}) {
                animation-delay: 120ms * $i;
            }
        }
    }
`;

const AnimatedBackgroundText = () => {
    return (
        <div className="w-screen  text-center">
            {Portfolio.split('').map((word, index) => (
                <span
                    key={word + '-' + index}
                    style={{animationDelay: index / 5 + 's'}}
                    className="text-animation animate-jump">
                    {word}
                </span>
            ))}
        </div>
    );
};

export default AnimatedBackgroundText;
