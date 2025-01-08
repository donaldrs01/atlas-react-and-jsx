import React from 'react';
import copyIcon from '../assets/copy.svg';

function handleCopy(link) {
    navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
}

const CopyLink = ({ link }) => {
    return (
        <img
            src={copyIcon}
            className="copy"
            onClick={() => handleCopy(link)}
        />
    );
};

export default CopyLink;