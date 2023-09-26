import React, {ReactNode} from 'react';
import {EmailIcon, GithubIcon, LinkedInIcon} from '../UI/Icons';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';

interface IWrapper {
    children: ReactNode;
    className?: String;
}

interface ICustomLink {
    children?: ReactNode;
    href: string;
    className?: string;
}

const Links = () => {
    return (
        <div className="flex mt-8">
            <WrapperIcons className="hidden dark:flex">
                <ContainerLink href="https://www.linkedin.com/in/hung-nguyen-quang-9046aa199/">
                    <LinkedInIcon color="none" className="w-6" />
                </ContainerLink>
                <ContainerLink href="https://github.com/NgQHung">
                    <GithubIcon color="#fff" className=" w-6 " />
                </ContainerLink>
                <ContainerLink href="mailto:hunghunghung273@gmail.com">
                    <EmailIcon color="#fff" className="w-6" />
                </ContainerLink>
            </WrapperIcons>
            <WrapperIcons className="block dark:hidden">
                <MotionLink href="https://www.linkedin.com/in/hung-nguyen-quang-9046aa199/">
                    <LinkedInIcon color="#0A66C2" className="w-6" />
                </MotionLink>
                <MotionLink href="https://github.com/NgQHung">
                    <GithubIcon color="currentColor" className=" w-6 " />
                </MotionLink>
                <MotionLink href="mailto:hunghunghung273@gmail.com">
                    <EmailIcon color="#1a1a1a" className="w-6 border border-solid" />
                </MotionLink>
            </WrapperIcons>
        </div>
    );
};

const WrapperIcons: React.FC<IWrapper> = ({children, className}) => {
    return (
        <div
            className={`absolute bottom-0 left-0 items-end m-8  flex justify-between  space-x-3 md:relative md:items-center md:m-0 z-[1] ${className}`}>
            {children}
        </div>
    );
};

const ContainerLink = styled.a`
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 63px;
    background: #333;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: 0.5s;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #ffee10;
        transition: 0.5s;
        transform: scale(0.9);
        z-index: -1;
    }
    &:hover::before {
        transform: scale(1.1);
        box-shadow: 0 0 15px #ffee10;
    }
    &:hover {
        color: #ffee10;
        box-shadow: 0 0 5px #ffee10;
        text-shadow: 0 0 5px #ffee10;
    }
`;

const MotionLink: React.FC<ICustomLink> = ({href, children, className}) => {
    //  hover:animate-flip
    return (
        <motion.a
            className={`w-6 space-x-1 md:space-x-3 ${className}`}
            href={href}
            target={'_blank'}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}>
            {children}
        </motion.a>
    );
};

export default Links;
