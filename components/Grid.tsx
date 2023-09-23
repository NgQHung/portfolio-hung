import styled from '@emotion/styled';
import {animate, motion, useMotionTemplate, useMotionValue, useTransform} from 'framer-motion';
import {useEffect, useState} from 'react';
import Cell, {CELL_SIZE} from './Cell';
import useDeviceSize from './hook/useDeviceSize';

const Container = styled(motion.div)<{columns: number}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    z-index: 0;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    opacity: 0.1;
    /* mask-image: radial-gradient(300px 300px, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), transparent);
    mask-repeat: no-repeat; */
`;

function Grid() {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [width, height] = useDeviceSize();

    // // mouse position
    // const mouseX = useMotionValue(0);
    // const mouseY = useMotionValue(0);
    // // mouse position from center
    // const centerMouseX = useTransform<number, number>(mouseX, (newX) => {
    //     return newX - width / 2;
    // });
    // const centerMouseY = useTransform<number, number>(mouseY, (newY) => {
    //     return newY - height / 2;
    // });

    // determine rows and columns
    useEffect(() => {
        // possibly use a resize observer here instead
        if (typeof window === 'undefined') return;
        const calculateGrid = () => {
            const columnCount = Math.ceil(window.innerWidth / CELL_SIZE);
            setColumns(columnCount);
            const rowCount = Math.ceil(window.innerHeight / CELL_SIZE);
            setRows(rowCount);
        };
        // calculate the grid on load
        calculateGrid();
        // recalculate grid on resize
        window.addEventListener('resize', calculateGrid);
        // cleanup
        return () => {
            window.removeEventListener('resize', calculateGrid);
        };
    }, []);

    // handle mouse move on document
    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         // animate mouse x and y
    //         animate(mouseX, e.clientX);
    //         animate(mouseY, e.clientY);
    //     };
    //     // recalculate grid on resize
    //     window.addEventListener('mousemove', handleMouseMove);
    //     // cleanup
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

    // const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;

    return (
        // <Container columns={columns} style={{WebkitMaskPosition}}>
        //     {Array.from({length: columns * rows}).map((_, i) => (
        //         <Cell key={i} mouseX={mouseX} mouseY={mouseY} />
        //     ))}
        // </Container>
        <Container columns={columns}>
            {Array.from({length: columns * rows}).map((_, i) => (
                <Cell key={i} />
            ))}
        </Container>
    );
}

export default Grid;
