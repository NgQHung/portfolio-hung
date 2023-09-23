import React, {useEffect} from 'react';
import {MoonIcon, SunIcon} from './UI/Icons';
import useThemeSwitcher from './hook/useThemeSwitcher';
import {themeSwitcherActions} from '@/stores/ThemeSwitcher';
import {useAppDispatch} from './hook/useApp';

const DarkLightButton = () => {
    const [mode, setMode] = useThemeSwitcher();

    const dispatch = useAppDispatch();

    useEffect(() => {
        const isDark = document.querySelector('html')?.classList.contains('dark');

        dispatch(themeSwitcherActions.themeSwitcher(isDark));
    }, [mode]);

    return (
        <div
            className="flex flex-col h-auto w-8 absolute bottom-20 left-4 dark:bg-primary z-[3] 
        dark:rounded-l-xl py-2">
            <button className="inline-block mb-5" onClick={() => setMode('dark')}>
                <span
                    className={`h-3 w-3 inline-block border border-solid border-black p-1
                    bg-transparent dark:bg-dark dark:border-dark
                    `}
                />
                <SunIcon className={'fill-black'} />
            </button>
            <button className="inline-block" onClick={() => setMode('light')}>
                <span
                    className={`h-3 w-3 inline-block border border-solid border-black p-1
                    bg-dark dark:bg-transparent dark:border-dark
                    }`}
                />
                <MoonIcon className={'fill-black'} />
            </button>
        </div>
    );
};

export default DarkLightButton;
