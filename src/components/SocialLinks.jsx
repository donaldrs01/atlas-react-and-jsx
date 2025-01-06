import React from 'react';
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a
                href="https://www.linkedin.com/in/ryandonaldson90/"
                target="_blank"
            >
                <img src={linkedinIcon} />
            </a>

            <a
                href="https://github.com/donaldrs01/atlas-react-and-jsx"
                target="_blank"
            >
                <img src={githubIcon} />
            </a>
        </div>
    );
};

export default SocialLinks;