import React from "react";
import FooterStyles from "./footer.module.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.linksContainer}>
                <div className={FooterStyles.links}>
                    <a href="https://www.linkedin.com/in/mouha-diouf/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/moudio" target="_blank">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <p>
                &copy; <span id="year">{year}</span>
            </p>
        </footer>
    );
}

export default Footer;
