import React, { useState, useRef, useEffect } from 'react'


const Navbar = ({ data }) => {
    const navContainer = useRef(null);
    const [LowerScrollTrigger, setLowerScrollTrigger] = useState(true);
    const [ScrollMoved, setScrollMoved] = useState(false);


    /*    const [scrollTop, setScrollTop] = useState(document.navContainer.setScrollTop)
   */
    const getCurrentScrollPosition = () => {
        const currentScroll = navContainer.current.scrollTop;
        const navContainerBottom = navContainer.current.scrollTopMax;

        setScrollMoved(true);
        console.log(ScrollMoved)
        if (LowerScrollTrigger) {
            setLowerScrollTrigger(false)
            if (navContainerBottom == currentScroll) {
                navContainer.current.scrollTop = 0;

            }

        }

    }




    useEffect(() => {
        navContainer.current.addEventListener('scroll', getCurrentScrollPosition);


        return () => {
            navContainer.current.removeEventListener('scroll', getCurrentScrollPosition)

        }
    }, [])

    return (
        <nav className="navbar" ref={navContainer} >
            {

                data.map((data) => (
                    <a>
                        <i className="linkey">{data.key}</i>
                        <span data-content={data.name} className="linkName">{data.name}</span>

                    </a>
                ))
            }
        </nav>
    );
}
export default Navbar