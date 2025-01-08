import React from 'react';
import headshot from '../assets/headshot.jpg';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img
                src={headshot}
                className="pro-pic"
            />
            <p> Greetings! I'm Ryan Donaldson, a fifth-trimester student at Tulsa's Atlas School. I'm studying with the goal of transitioning into the world of software engineering with a specialization in full stack web development. My favorite languages to work in are Python and JavaScript, and I'm eager to deepen my understanding of frameworks like React. I've developed a strong foundation in building interactive front-end applications and working with back-end APIs, and I look forward to applying these skills in a professional setting after graduation. Outside of programming, I love to stay active at the gym, play golf, and spend time with my girlfriend and our very good dog Lucy.</p>
        </div>
    );
};

export default AboutMe;