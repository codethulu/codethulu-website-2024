import React, { useState, useEffect } from 'react';
import './NavBar.css'
import './Colours.css'

import {
    Link,
    Element,
} from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

function NavBar() {
    return (

        <div className='bg-colour-black navbar' >
            <ul className='navbar-list'>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={750} >
                    <li className='navbar-item'>Home</li>
                </Link>

                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={750} >
                    <li className='navbar-item'>About</li>
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={750} >
                    <li className='navbar-item'>Projects</li>
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={750} >
                    <li className='navbar-item'>Contact</li>
                </Link>
            </ul>

        </div>

    )
}

export default NavBar