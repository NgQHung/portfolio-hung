import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {useAppSelector} from './hook/useApp';

const TerminalTextEffect = () => {
    const isDark = useAppSelector((state) => state.themeSwitcher.isDark);

    useEffect(() => {
        let interval1: any;
        let interval2: any;
        let timeout1: any;
        let timeout2: any;
        function consoleText(words: string[], id: string, colors: string[]) {
            if (colors === undefined) colors = ['#fff'];
            let visible = true;
            let con = document.getElementById('console');
            let letterCount = 1;
            let x = 1;
            let waiting = false;
            let target = document.getElementById(id);
            if (!target) return;
            target.setAttribute('style', 'color:' + colors[0]);
            interval1 = window.setInterval(function () {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    if (!target) return;
                    target.innerHTML = words[0].substring(0, letterCount);
                    timeout1 = window.setTimeout(function () {
                        let usedColor = colors.shift()!;
                        colors.push(usedColor);
                        let usedWord = words.shift()!;
                        words.push(usedWord);
                        x = 1;
                        if (!target) return;
                        target.setAttribute('style', 'color:' + colors[0]);
                        letterCount += x;
                        waiting = false;
                    }, 1000);
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    timeout2 = window.setTimeout(function () {
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
            interval2 = window.setInterval(function () {
                if (!con) return;
                if (visible === true) {
                    con.className = 'console-underscore hidden';
                    visible = false;
                } else {
                    con.className = 'console-underscore dark:text-primary';
                    visible = true;
                }
            }, 400);
        }
        if (isDark === undefined) return;
        if (!isDark) {
            consoleText(['Hello World.', "I'm Hung Nguyen Quang", 'Made with Love.'], 'text', [
                '#2c6ccd',
                '#5C2D91',
                '#f0122d',
            ]);
        } else {
            consoleText(['Hello World.', "I'm Hung Nguyen Quang", 'Made with Love.'], 'text', [
                '#fdf8f0',
                '#bbddff',
                '#f0122d',
            ]);
        }

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, [isDark]);

    return (
        <div>
            <ConsoleContainer>
                <span id="text"></span>
                <ConsoleUnderscore className="" id="console">
                    &#95;
                </ConsoleUnderscore>
            </ConsoleContainer>
        </div>
    );
};

export default TerminalTextEffect;
const ConsoleContainer = styled.div`
    font-family: Khula;
    height: 100px;
`;

const ConsoleUnderscore = styled.div`
    display: inline-block;
    position: relative;
    top: -0.14em;
    left: 10px;
`;
