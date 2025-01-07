import React from 'react';
import Greeting from './components/Greeting';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is React?">
        <p>React is a library based in JavaScript that is built around components. These components are reusable pieces of an application's UI and are used to simplify the front-end development process. Instead of using straight JS, React uses JSX. This allows the user to use HTML-like structure within the JS code. As a whole, this makes the reading/writing process of the code easier and more intuitive.</p>
      </Section>
      <Section title="Benefits of React">
        <li>The reusable components make app development more streamlined and efficient</li>
        <li>React uses a virtual representation of the DOM which allows for faster rendering</li>
        <li>It doesn't reinvent the wheel - it utilizes languages that most programmers are already familiar with</li>
        <li>React is widely used across the programming community. This has allowed for the creations of thousands of libraries and tools to help its users.</li>
        <li>Components used in React are easily testable using a similar methodology to other programming languages.</li>
      </Section>
    </div>
  );
}

export default App;
