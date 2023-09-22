import React, {useEffect, useState} from 'react';
import BouncingBall from './BouncingBall';

const getRandomNumber = (num: number) => {
    return Math.floor(Math.random() * (num + 1));
};

// -3 , 697
function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

const Runaway = () => {
    const [cursorX, setCursorX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [point, setPoint] = useState({randX: 0, randY: 0});

    const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        var randX = randomNumber(-1, window.innerWidth - 153);
        var randY = randomNumber(289, -322);
        // console.log('randX: ' + randX);
        // console.log('randY: ' + randY);
        // console.log('window.innerWidth: ' + (window.innerWidth - 53));
        // console.log('window.innerHeight: ' + (window.innerWidth - 100));

        setPoint({randX, randY});
    };

    useEffect(() => {
        if (cursorX < 400) {
            setTranslateX(translateX + (cursorX - translateX) / 3);
        } else {
            setTranslateX(translateX - (cursorX - translateX) / 3);
        }
    }, [cursorX]);

    const style = {
        transform: `translate(${point.randX}px,${point.randY}px)`,
    };

    return (
        <div>
            <button
                onClick={(e) => e.preventDefault()}
                onMouseOver={(e) => handleMouseOver(e)}
                style={style}
                className={`border absolute top-1/2 transition-all ease-linear duration-200 px-5 py-1 bg-green-600 text-white drop-shadow rounded hover:opacity-80 active:opacity-50`}>
                <BouncingBall />
            </button>
        </div>
    );
};

export default Runaway;
