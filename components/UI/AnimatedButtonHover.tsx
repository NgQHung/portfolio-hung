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
            <ContainerButton className="text-sm lg:text-base font-bold sm:font-[900] text-black dark:text-primary">
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
    text-transform: uppercase;
    vertical-align: middle;
`;
