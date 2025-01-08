import React from 'react';
import Greeting from './components/Greeting';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is React?">
        React is a library based in JavaScript that is built around components. These components are reusable pieces of an application's UI and are used to simplify the front-end development process. Instead of using straight JS, React uses JSX. This allows the user to use HTML-like structure within the JS code. As a whole, this makes the reading/writing process of the code easier and more intuitive.
      </Section>
      <Section title="Benefits of React">
        <li>The reusable components make app development more streamlined and efficient</li>
        <li>React uses a virtual representation of the DOM which allows for faster rendering</li>
        <li>It doesn't reinvent the wheel - it utilizes languages that most programmers are already familiar with</li>
        <li>React is widely used across the programming community. This has allowed for the creations of thousands of libraries and tools to help its users</li>
        <li>Components used in React are easily testable using a similar methodology to other programming</li>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          link="https://react.dev/learn"
          label="The 'Quick Start' guide from the React developers - great for an introduction to React concepts"
        />
        <HelpfulResource
          link="https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&ab_channel=NetNinja"
          label="A React video tutorial series by user 'Net Ninja' that walks through all of the fundamental React concepts"
        />
        <HelpfulResource
          link="https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/"
          label={
            <>
            Flavio Copes' <em>React Handbook</em> introduces the user to React with interactive examples and descriptions
            </>
          }
        />
      </Section>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
