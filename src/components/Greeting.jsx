import React from 'react';


// Create 'Greeting' component
const Greeting = () => {
    // Fetch current hour
    const currentHour = new Date().getHours();

    // Display greeting message based on time of day
    let image = "";
    let text = "";

    if (currentHour >= 6 && currentHour < 12) {
        image = 'src/assets/day.svg';
        text = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
        image = 'src/assets/day.svg';
        text = 'Good Afternoon!';
    } else if (currentHour >= 17 && currentHour < 20) {
        image = 'src/assets/evening.svg';
        text = 'Good Evening!';
    } else {
        image = 'src/assets/night.svg';
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