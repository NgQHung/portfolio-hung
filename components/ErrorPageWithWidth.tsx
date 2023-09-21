import Image from 'next/image';
import React from 'react';

// absolute h-full w-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]

const ErrorPageWithWidth = () => {
    return (
        <div className=" xs:hidden h-screen w-screen flex flex-col space-y-5 justify-center items-center ">
            <div className="w-[50px]">
                <Image
                    src="/repairing.png"
                    alt="zalando"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <p className="w-[400px] text-center">
                We only support on screens with a minimum width of <b>450px</b>, sorry for the
                inconvenience!
            </p>
        </div>
    );
};

export default ErrorPageWithWidth;
