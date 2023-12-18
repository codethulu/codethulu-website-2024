import React, { useState, useEffect } from 'react';
import { ReactComponent as TextLogo } from './images/text-logo.svg';
import { ReactComponent as Lines } from './images/lines.svg';
import logo from './logo.svg';
import './App.css';

// import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import NavBar from './components/NavBar';
import Pages from './components/Pages';
import {
  Link,
  Element,
} from "react-scroll";
import FlairTitle from './components/FlairTitle';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

let primaryColour = '#1a1a1a';
let textLogo = './images/text-logo.svg';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Main>
        <Welcome />
        <Pages />
      </Main>
    </>
  );
}

export default App;

function Welcome() {
  return (
    <div className='cube main-graphic'>
      <Element name="home" className="element"></Element>
      <div className='cover bg-colour-black cover-clear'></div>
      <TextLogo />
      <div className='welcome-lines'>

        <div className='display-block'>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={750}  >
            <div className='welcome-button'>about me</div>
          </Link>
        </div>
        <div className='display-block'>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={750}  >
            <div className='welcome-button'>Get in Touch</div>
          </Link>
        </div>



      </div>

      <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={750} >
        <div className='down-button'></div>
      </Link>
    </div>
  )
}



function Main(props: any) {
  return (
    <div className='main'>
      {props.children}
    </div>
  )
}