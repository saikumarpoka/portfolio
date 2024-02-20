import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/exp';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )

}

export default App