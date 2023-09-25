import Image from 'next/image';
import React from 'react';
import {CloseIcon} from '../UI/Icons';
import {Portal} from '../UI/Portal';
import {AnimatePresence, motion} from 'framer-motion';

interface IProjectMoreInfo {
    dataMoreInfo: string[];
    setMoreInfoOpen: (state: Boolean) => void;
    detailOpen: Boolean;
    moreInfoOpen: Boolean;
}

const ProjectMoreInfo: React.FC<IProjectMoreInfo> = (props) => {
    return (
        <AnimatePresence>
            {props.dataMoreInfo && props.moreInfoOpen && !props.detailOpen ? (
                <motion.div
                    className="relative z-[4]"
                    initial={{y: '-400vh', opacity: 0}}
                    animate={{
                        y: '-100vh',
                        opacity: 1,
                        transition: {
                            type: 'tween',
                        },
                    }}
                    exit={{
                        y: '-400vh',
                        opacity: '0',
                        transition: {
                            duration: 0.5,
                            type: 'tween',
                        },
                    }}>
                    <Portal />
                    <div
                        className="top-[49px] absolute h-[calc(100vh-74px)] left-1/2 translate-x-[-49%]
                w-[300px] xs:w-[500px] md:w-[810px] z-[3] rounded-[2.5rem] bg-black rounded-br-3xl
                dark:bg-primary"
                    />
                    <div
                        className="z-[3] fixed top-10 h-[calc(100vh-80px)] overflow-scroll left-1/2 translate-x-[-50%] 
                w-[290px] xs:w-[490px] md:w-[800px] scrollbar_hidden bg-primary dark:border dark:border-solid dark:border-primary 
                rounded-3xl rounded-br-2xl shadow-2xl dark:bg-dark ">
                        <div
                            className="hover:opacity-70 sticky top-0 left-0 z-[3]"
                            onClick={() => props.setMoreInfoOpen(false)}>
                            <CloseIcon />
                        </div>

                        <ul
                            className="flex flex-col justify-between items-center 
                space-y-4 xs:space-y-8 md:space-y-10 px-4 xs:px-8 md:px-16 lg:px-[100px]
                mb-10">
                            {props.dataMoreInfo.length > 1
                                ? props.dataMoreInfo.map((image, index) => (
                                      <li key={image + index}>
                                          {
                                              <Image
                                                  src={image}
                                                  alt="image"
                                                  width="0"
                                                  height="0"
                                                  sizes="100vw"
                                                  className="w-full h-auto"
                                              />
                                          }
                                      </li>
                                  ))
                                : null}
                        </ul>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default ProjectMoreInfo;
