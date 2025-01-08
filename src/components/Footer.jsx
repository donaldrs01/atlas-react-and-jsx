import React from 'react';
import links from '../assets/links.json';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} target="_blank">
                            {item.label}
                        </a>
                    </li> 
                ))}
            </ul>
            <p>&copy; {year} Atlas School</p>
        </footer>
    );
};

export default Footer;