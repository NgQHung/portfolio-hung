import React, {useState} from 'react';
import Link from 'next/link';
const Navbar = () => {
    const [activeLink, setActiveLink] = useState<String>('');

    const activeLinkHandler = (item: String) => {};

    // active link and scroll handler
    const handler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: String) => {
        if (item !== activeLink) {
            setActiveLink(item);
        }

        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, '');
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <ul className="z-[1] pt-20 hidden lg:flex flex-col justify-between font-bold text-black dark:text-primary">
            <Link
                href="#about"
                onClick={(e) => handler(e, 'about')}
                className="flex items-center cursor-pointer group ">
                <span
                    className={`pr-8 ${
                        activeLink === 'about' ? 'scale-110' : ''
                    } group-hover:scale-110 w-[120px]`}>
                    About
                </span>
                <span
                    className={`inline-block ${
                        activeLink === 'about' ? 'scale-x-[2]' : ''
                    }  group-hover:scale-x-[2] transition-all h-[2px] w-10 bg-black dark:bg-primary`}
                />
            </Link>
            <Link
                onClick={(e) => handler(e, 'experience')}
                href="#experience"
                className="flex items-center cursor-pointer group">
                <span
                    className={`pr-8 ${
                        activeLink === 'experience' ? 'scale-110' : ''
                    } group-hover:scale-110 w-[120px]`}>
                    Experience
                </span>
                <span
                    className={`inline-block ${
                        activeLink === 'experience' ? 'scale-x-[2]' : ''
                    }  group-hover:scale-x-[2] transition-all h-[2px] w-10 bg-black dark:bg-primary`}
                />
            </Link>
            <Link
                onClick={(e) => handler(e, 'projects')}
                href="#projects"
                className="flex items-center cursor-pointer group">
                <span
                    className={`pr-8 ${
                        activeLink === 'projects' ? 'scale-110' : ''
                    } group-hover:scale-110 w-[120px]`}>
                    Projects
                </span>
                <span
                    className={`inline-block ${
                        activeLink === 'projects' ? 'scale-x-[2]' : ''
                    }  group-hover:scale-x-[2] transition-all h-[2px] w-10 bg-black dark:bg-primary`}
                />
            </Link>
        </ul>
    );
};

export default Navbar;
