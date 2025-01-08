import React from 'react';
import openIcon from '../assets/open.svg';

function handleClick(link) {
    window.open(link, '_blank');
}

const OpenLink = ({ link }) => {
    return (
        <a onClick={() => handleClick(link)}>
            <img src={openIcon} />
        </a>
    );
};

export default OpenLink;