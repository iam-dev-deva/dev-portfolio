import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
// import aos from 'aos';
// import 'aos/dist/aos.css';
// aos.init({
//     easing: 'ease-in-sine',
// })


const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setVisible(true);
        } else if (scrolled <= 50) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        

        <div className={`ScrollToTop  ${visible? `active-btn` : ''}`} onClick={scrollToTop}>
            <FaArrowUp />
        </div>
    );
};

export default ScrollToTop;