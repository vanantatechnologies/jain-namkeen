import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Scroll to section when hash exists
            const targetId = hash.replace("#", "");
            const element = document.getElementById(targetId);

            if (element) {
                // Delay ensures DOM is ready after route change
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 0);
            }
        } else {
            // Default behavior: scroll to top
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
