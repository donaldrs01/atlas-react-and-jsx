import React from 'react';
import dayImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';


// Create 'Greeting' component
const Greeting = () => {
    // Fetch current hour
    const currentHour = new Date().getHours();

    // Display greeting message based on time of day
    let image = "";
    let text = "";

    if (currentHour >= 6 && currentHour < 12) {
        image = dayImage;
        text = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
        image = dayImage;
        text = 'Good Afternoon!';
    } else if (currentHour >= 17 && currentHour < 20) {
        image = eveningImage;
        text = 'Good Evening!';
    } else {
        image = nightImage;
        text = 'Good Night!'
    }

    // Return JSX

    return (
        <h1 className="greeting">
            <img src={image} /> {text}
        </h1>
    );
};

// Export component 
export default Greeting; 