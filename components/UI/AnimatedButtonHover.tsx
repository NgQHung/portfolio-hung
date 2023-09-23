import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

interface IAnimatedButtonHover {
    title: string;
}

export const AnimatedButtonHover: React.FC<IAnimatedButtonHover> = (props) => {
    const [firstText, setFirstText] = useState<string[]>([]);
    const [restText, setRestText] = useState<string[]>([]);

    useEffect(() => {
        const filterRestText = async () => {
            const dividedText = props.title.split(' ').map((word) => {
                return word;
            });

            const [first, ...rest] = dividedText;
            setFirstText(first.split('').map((word) => word));
            setRestText([...rest]);
        };

        filterRestText();
    }, []);

    return (
        <ContainerLink>
            <ContainerButton>
                {/* {props.title.split(" ").} */}
                {firstText
                    ? firstText.map((word, index) => {
                          return (
                              <span
                                  key={word + '-' + index}
                                  className="inline-block  first:text-primary second_child dark:text-primary ">
                                  {word}
                              </span>
                          );
                      })
                    : null}
                {restText
                    ? restText.map((word, index) => {
                          return (
                              <span
                                  key={word + '-' + index}
                                  className="inline-block dark:text-primary">
                                  &nbsp;{word}
                              </span>
                          );
                      })
                    : null}
            </ContainerButton>
            {/* <ContainerSvg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </ContainerSvg> */}
        </ContainerLink>
    );
};

const ContainerLink = styled.a`
    position: relative;
    margin: auto;
    padding: 0 10px;
    transition: all 0.2s ease;
    &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: 0;
        display: block;
        border-radius: 28px;
        background-color: #f96c7d;
        width: 30px;
        height: 30px;
        transition: all 0.7s ease;
    }
    &:hover {
        &:before {
            width: 100%;
            background-color: #f0122d;
        }
        svg {
            transform: translateX(0);
        }
        span {
            color: #fdf8f0;
            transition: all 0.7s ease;
        }
    }
    &:active {
        transform: scale(0.96);
    }
`;
const ContainerButton = styled.span`
    position: relative;
    font-size: 12px;
    line-height: 12px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;
`;
// const ContainerSvg = styled.svg`
//     position: relative;
//     top: 0;
//     margin-left: 10px;
//     fill: none;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke: #111;
//     stroke-width: 2;
//     transform: translateX(-5px);
//     transition: all 0.3s ease;
// `;
// export const AnimatedButtonSlide = () => {
//     return (
//         <button
//             className="border border-solid border-secondary rounded-md
//             text-secondary background-gradient-slide-color
//             ">
//             <span className="p-2">View My Profile</span>
//         </button>
//     );
// };
