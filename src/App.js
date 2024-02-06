import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme,lightTheme } from './utils/Themes';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Hsection from './Components/H_section';
import Skills from './Components/Skills Section';
import Education from './Components/Education';
import {BrowserRouter as Router } from 'react-router-dom';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useState } from 'react';


const Body = styled.div`
background-color:${({ theme }) => theme.bg};
width: 100%;
height:100%
overflow-x : hidden;
`;

const Wrapper = styled.div`
background : Linear-gradient(
  38.73deg,
  rgba(204, 0 ,187, 0.15) 0%,
  rgba(201, 32, 184, 0) 50%
), 
Linear-gradient(
  141.27deg,
  rgba(0, 70 ,209, 0) 50%,
  rgba(0, 70, 209, 0.15) 100%
);
width:100%;
clip-path : polygon(0 0, 100% 0, 100% 100%, 30% 100% , 0 100%);
  )`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />       
        <Body>
        <About/>
          <Hsection />
            <Wrapper>
              <Skills />
              <Experience/>
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal}/>
              <Wrapper>
              <Education />
              <Contact/>
              </Wrapper>   
            <Footer/>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
 