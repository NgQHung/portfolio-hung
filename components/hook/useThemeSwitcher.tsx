import React, {useEffect, useState} from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = '(prefer-color-scheme: dark)';
    const [mode, setMode] = useState<String>('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem('theme');

        const changeHandler = () => {
            if (usePref) {
                let check = usePref === 'dark' ? 'dark' : 'light';
                setMode(check);
                if (check === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            } else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);
                if (check === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        };
        changeHandler();
        mediaQuery.addEventListener('change', changeHandler);
        return () => mediaQuery.removeEventListener('change', changeHandler);
    }, []);

    useEffect(() => {
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }
        if (mode === 'light') {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
        // console.log('document.documentElement.classList.:' + document.documentElement.classList);
    }, [mode]);
    return [mode, setMode] as const;
};

export default useThemeSwitcher;
