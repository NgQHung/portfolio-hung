import React, {useEffect} from 'react';
import styled from '@emotion/styled';

// .hidden {
//   opacity:0;
// }
const ConsoleContainer = styled.div`
    font-family: Khula;
    /* font-size: 4em; */
    /* text-align: center; */
    height: 100px;
    /* width: 600px; */
    /* display: block; */
    /* position: absolute; */
    /* color: white; */
    /* top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    /* margin: auto; */
`;

const ConsoleUnderscore = styled.div`
    display: inline-block;
    position: relative;
    top: -0.14em;
    left: 10px;
`;

const TerminalTextEffect = () => {
    // function([string1, string2],target id,[color1,color2])

    useEffect(() => {
        function consoleText(words: string[], id: string, colors: string[]) {
            if (colors === undefined) colors = ['#fff'];
            var visible = true;
            var con = document.getElementById('console');
            var letterCount = 1;
            var x = 1;
            var waiting = false;
            var target = document.getElementById(id);
            if (!target) return;
            target.setAttribute('style', 'color:' + colors[0]);
            window.setInterval(function () {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    if (!target) return;
                    target.innerHTML = words[0].substring(0, letterCount);
                    window.setTimeout(function () {
                        var usedColor = colors.shift()!;
                        colors.push(usedColor);
                        var usedWord = words.shift()!;
                        words.push(usedWord);
                        x = 1;
                        if (!target) return;
                        target.setAttribute('style', 'color:' + colors[0]);
                        letterCount += x;
                        waiting = false;
                    }, 1000);
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    window.setTimeout(function () {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1000);
                } else if (waiting === false) {
                    if (!target) return;
                    target.innerHTML = words[0].substring(0, letterCount);
                    letterCount += x;
                }
            }, 120);
            window.setInterval(function () {
                if (!con) return;
                if (visible === true) {
                    con.className = 'console-underscore hidden';
                    visible = false;
                } else {
                    con.className = 'console-underscore';

                    visible = true;
                }
            }, 400);
        }
        consoleText(['Hello World.', 'Hung Nguyen Quang', 'Made with Love.'], 'text', [
            '#2c6ccd',
            '#5C2D91',
            '#f0122d',
        ]);
    }, []);

    return (
        <div>
            <ConsoleContainer>
                <span id="text"></span>
                <ConsoleUnderscore id="console">&#95;</ConsoleUnderscore>
            </ConsoleContainer>
        </div>
    );
};

export default TerminalTextEffect;
