import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    let {pathname} = useLocation();
    useEffect( () => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

export default ScrollToTop;