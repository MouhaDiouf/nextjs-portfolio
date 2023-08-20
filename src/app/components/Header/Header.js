import React from "react";
import headerStyles from "./header.module.scss";
import Link from "next/link";
import MenuStyles from "./Menu.module.scss";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [changeScroll, setchangeScroll] = useState(false);
    const handleNav = () => {
        const element = document.querySelector(".navIcon");
        element.classList.contains("open") ? element.classList.remove("open") : element.classList.add("open");
        setShowMobileNav(!showMobileNav);
    };

    const handleScroll = () => {
        if (window.scrollY > 5) {
            setchangeScroll(true);
        } else {
            setchangeScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={` ${MenuStyles.iconContainer} ${changeScroll ? "navScroll" : ""}`} onClick={handleNav}>
                <div className={headerStyles.navIcon}></div>
            </div>
            <nav className={headerStyles.nav}>
                <h1>
                    <Link href="/">Mouha Diouf</Link>
                </h1>
                <ul className={headerStyles.leftNavigation}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        {" "}
                        <a href="https://mouhadiouf.medium.com/" target="_blank">
                            Blog
                        </a>{" "}
                    </li>
                    {/* <li className={HeaderStyles.resumeLink}>
                        <a href={resume} target="_blank">
                            Resume
                        </a>{" "}
                    </li> */}
                </ul>
            </nav>
            <ul className={`mobileNav ${showMobileNav ? "show" : "hide"} ${changeScroll && "navScroll"}`}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    {" "}
                    <a href="https://mouhadiouf.medium.com/" target="_blank">
                        Blog
                    </a>{" "}
                </li>
                <li>
                    {" "}
                    {/* <a href={resume} className={HeaderStyles.resumeLink} target="_blank">
                        Resume
                    </a> */}
                </li>
            </ul>
        </>
    );
}

export default Header;
