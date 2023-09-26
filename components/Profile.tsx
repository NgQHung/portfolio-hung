import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {CloseIcon} from './UI/Icons';
import {Portal} from './UI/Portal';
import Image from 'next/image';
import useDeviceSize from './hook/useDeviceSize';

interface IProfile {
    setProfileOpen: (state: Boolean) => void;
    profileOpen: Boolean;
}
const Profile: React.FC<IProfile> = (props) => {
    const [width] = useDeviceSize();
    useEffect(() => {
        if (width <= 350) {
            props.setProfileOpen(false);
        }
    }, [width]);
    return (
        <AnimatePresence mode="wait">
            {props.profileOpen && (
                <motion.div
                    className="hidden  z-[3] absolute w-[360px] xs:w-[500px] sm:w-[640px] md:w-[768px] lg:w-[800px]  
                    top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-primary
                    xss:flex justify-center overflow-hidden
                    "
                    initial={{x: '-50%', y: '-50%', scale: 0}}
                    animate={{x: '-50%', y: '-50%', scale: 1}}
                    exit={{
                        scale: 0,
                        opacity: 0,
                    }}>
                    <div className="noise " />
                    <div
                        onClick={() => props.setProfileOpen(false)}
                        className="absolute top-0 left-0 p-2">
                        <CloseIcon />
                    </div>
                    <Portal />
                    <div className="w-[300px] xs:w-[400px] flex justify-center flex-col items-center mx-5">
                        <div className="w-full">
                            <Image
                                src="/profilePicTransformed.png"
                                alt="profile"
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className=" text-center text-xs xs:text-sm my-2">
                            I am a front-end web developer. I like creating new things and explore
                            more about the world code. Currently I am moving towards the back-end
                            and becoming a full-stack developer. Hope you are interested. Thanks a
                            lot.
                        </p>
                        <div className="w-full my-2">
                            <button className="w-full bg-black text-primary rounded-md">
                                My CV
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Profile;
