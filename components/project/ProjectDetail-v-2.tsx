import React from 'react';
import {useAppSelector} from '../hook/useApp';
import Image from 'next/image';

const ProjectDetailV2 = () => {
    const selectedProject = useAppSelector((state) => state.project.selectedProject);
    return (
        <div className="mr-5">
            {selectedProject.length !== 0 ? (
                <div className="w-[500px] order-1">
                    <Image
                        src={selectedProject[0].image}
                        alt="project"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
            ) : null}
        </div>
    );
};

export default ProjectDetailV2;
