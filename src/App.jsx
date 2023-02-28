import React from 'react'

import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx';
import Contact from './components/contact.jsx';

import './styles/contact.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
