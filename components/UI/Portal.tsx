import {useRef, useEffect, useState, ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
    children?: ReactNode;
}

export const Portal: React.FC<PortalProps> = (props) => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#portal');
        setMounted(true);
    }, []);

    return mounted && ref.current
        ? createPortal(
              <div className="fixed top-0 z-[2] left-0 w-full h-full overflow-auto bg-backdrop" />,
              ref.current
          )
        : null;
};
