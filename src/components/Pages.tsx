import React, { useState, useEffect } from 'react';

import './Pages.css'
import './Colours.css'
import '../Typography.css'

import FlairTitle from './FlairTitle'
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import photo from '../images/profile-pic.png'
import paint from '../images/paint.png'
import lines from '../images/lines.svg'
import mh from '../images/mh.jpg'

import './projectCard.css'
import './aboutCard.css'

import AboutCards from './aboutCard';

import {
    Link,
    Element,
} from "react-scroll";

import projectsList from './projectsList';
import { Masonry } from '@mui/lab';

import twitter_logo from '../images/twitter_logo.svg';
import email_logo from '../images/message-logo.svg';
import linkedin_logo from '../images/linkedin-logo.svg';
import github_logo from '../images/github-logo.svg';
import ScrollAnimation from 'react-animate-on-scroll';


function Pages() {
    return (
        <div>
            <Intro />
            <About />
            <Projects />
            {/* <Cube /> */}
            <ContactPage />
            <Footer />

        </div>
    )
}



function Cube() {
    return (
        <div className='cube graphic'>

        </div>
    )
}

function Intro() {
    return (
        <div className='cube bg-colour-black'>
            <Element name="about" className="element"></Element>
            <ParallaxProvider>
                <FlairTitle text="HELLO, WORLD!" col="colour-white" bg="bg-colour-black" />
                <div className='content-box'>
                    <ParallaxBanner
                        className='parallax-banner'
                        layers={[

                            {
                                image: lines,
                                speed: -15,
                            },
                            {
                                image: photo,
                                speed: -20,
                            },
                        ]}
                        style={{ aspectRatio: '2 / 1', marginBottom: '30px', marginTop: '30px', borderRadius: '20px' }}

                    />
                    <div className='h-5'></div>
                    <h3>My name is Brendan<span className='subtext'>[He/Him]</span> and I am a Software Engineer and Computer Scientist.</h3>
                    <p>After completing my studies at the University of Warwick I have continued to undertake a broad range of exciting new challenges, and I can't wait to start the next one.</p>
                </div>

            </ParallaxProvider>
        </div>
    )
}



function About() {
    return (
        <div className='flex-cube bg-colour-black'>
            <ParallaxProvider>
                <h1 className='text-outline'>About Me</h1>
                <div className='content-box'>



                    {/* <Masonry
                        columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }}
                        spacing={2}
                        defaultHeight={50}
                        defaultColumns={4}
                        defaultSpacing={2}
                    >
                        <div className='skill-card'>Hello</div>
                        <div className='skill-card'>Hello</div>
                        <div className='skill-card'>Hello</div>
                        <div className='skill-card'>Hello</div>

                    </Masonry> */}

                    <AboutCards />


                </div>
                <div className='h-10'></div>

            </ParallaxProvider>
        </div>
    )
}

function Projects() {
    projectsList.reverse();
    const [projects, setProjects] = useState(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes("favourites")));
    const allProjects = () => {
        setProjects(projectsList);
    }
    const filterProjects = (e: string) => {
        setProjects(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes(e)));
        if (e === "c/c++") {
            setProjects(projectsList.filter((project: { tags: string | string[]; }) => project.tags.includes("c") || project.tags.includes("c++")));
        }


    }
    const filterProjectsTitle = (e: string) => {
        setProjects(projectsList.filter((project: { name: string; description: string; }) => project.name.toUpperCase().includes(e.toUpperCase()) || project.description.toUpperCase().includes(e.toUpperCase())));
    }
    return (
        <div className='flex-cube bg-colour-off-white'>

            <Element name="projects" className="element"></Element>
            <ParallaxProvider>



                <Parallax translateX={[0, -120]}>
                    <div className='cover bg-colour-black'></div>
                </Parallax>
                <div className='banner '>
                    <Parallax translateX={[-80, -30]}>
                        <h1 className='text-outline'>//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//PROJECTS//</h1>
                    </Parallax>

                </div>

                <div className='content-box'>

                    <p className='colour-black'>Here is a showcase of some of the projects that reflect my journey as a computer science engineer. I'm really proud of the breadth, technical expertise and creative implementations showcased here and I look forward to growing this repository as I continue to grow.</p>
                    <p className='colour-black'>By default here are a few of my favourite projects I've worked on; however you can view more by clicking on the tags below.</p>
                </div>

                <ProjectShowcase allProjects={allProjects} filterProjects={filterProjects} filterProjectsTitle={filterProjectsTitle} projects={projects} />
            </ParallaxProvider>

        </div>
    )
}

function ContactPage() {
    return (
        <div className='cube bg-colour-black'>
            <Element name="contact" className="element"></Element>
            <ParallaxProvider>
                <FlairTitle text="CONTACT" col="colour-white" bg="bg-colour-black" />
                <div className='content-box'>

                    <h3>Let's get in touch!</h3>
                    <p>If you would like to speak about any of my work, or connect on any platforms, I'm always looking to meet with people in the industry. </p>
                    <ScrollAnimation animateIn="animate__fadeIn" >
                        <a href='mailto: brendan@codethulu.dev'><button className='contact-button bg-colour-off-white'>
                            <h3>Email</h3>
                            <div className='contact-divider'></div>
                            <img src={email_logo} className='contact-logo' alt='email icon'></img>
                            <div className='contact-divider'></div>
                            brendan@codethulu.dev
                        </button></a>

                        <a href='https://github.com/codethulu'><button className='contact-button bg-colour-off-white'>
                            <h3>Github</h3>
                            <div className='contact-divider'></div>
                            <img src={github_logo} className='contact-logo' alt='github logo'></img>
                            <div className='contact-divider'></div>
                            github.com/codethulu
                        </button></a>

                        <a href='https://www.linkedin.com/in/brendan-bell-34b282202/'><button className='contact-button bg-colour-off-white'>
                            <h3>LinkedIn</h3>
                            <div className='contact-divider'></div>
                            <img src={linkedin_logo} className='contact-logo' alt='linked in logo'></img>
                            <div className='contact-divider'></div>
                            Brendan Bell
                        </button></a>

                        <a href='https://twitter.com/Codethulu_'><button className='contact-button bg-colour-off-white'>
                            <h3>Twitter</h3>
                            <div className='contact-divider'></div>
                            <img src={twitter_logo} className='contact-logo' alt='twitter logo'></img>
                            <div className='contact-divider'></div>
                            @Codethulu_
                        </button></a>
                    </ScrollAnimation>
                </div>

            </ParallaxProvider>
        </div>
    )

}

interface ProjectCardProps {
    name: string; year: string; description: string; tags: string[]; image: string; filterProjects: any;
}
const ProjectCard = (props: ProjectCardProps) => {
    return (

        <div className='project-card'>


            <div className={'image image-' + props.image}></div>
            <div className='card-divider'></div>
            <h1> {props.name} </h1>
            <h2> {"[ " + props.year + " ]"} </h2>
            <div className='card-divider'></div>
            <p> {props.description}</p>
            <div className='card-divider'></div>
            <div className='tag-container'>
                {props.tags.map((e) => {
                    return (
                        <Tag name={e} filterProjects={props.filterProjects} />
                    );
                })}

            </div>



        </div >
    )
}

function Footer() {
    return (
        <div className='footer'>

            © Brendan Bell 2023

        </div>
    )
}

const ProjectShowcase = (props: { allProjects: any; filterProjects: any; filterProjectsTitle: any; projects: any }) => {
    // const [searchTerm, setSearchTerm] = React.useState("");
    return (
        <>
            {/* <Element name="projects" className="element"></Element> */}
            {/* //if filterProjects not null */}
            {props.filterProjects != null ?
                <>


                    <div className='center m-top-50'>
                        <Tag name='favourites' filterProjects={props.filterProjects} />
                        <Tag name='rust' filterProjects={props.filterProjects} />
                        <Tag name='c/c++' filterProjects={props.filterProjects} />
                        <Tag name='python' filterProjects={props.filterProjects} />
                        <Tag name='java' filterProjects={props.filterProjects} />
                        <Tag name='haskell' filterProjects={props.filterProjects} />
                        <Tag name='games' filterProjects={props.filterProjects} />
                        <Tag name='web-dev' filterProjects={props.filterProjects} />
                        <Tag name='all' filterProjects={props.allProjects} />
                    </div>
                </>
                : <></>}

            <div className='h-2'></div>
            <div className='inner-container h-auto m-top-50'>
                <Masonry
                    columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
                    spacing={2}
                    defaultHeight={50}
                    defaultColumns={4}
                    defaultSpacing={2}
                >
                    {props.projects.map((e: { name: string; year: string; titleCard: boolean; description: string; tags: string[]; image: string; showcase: boolean; }) => {
                        return (
                            <ProjectCard name={e.name} year={e.year} description={e.description} tags={e.tags} image={e.image} filterProjects={props.filterProjects} />
                        );
                    })}
                </Masonry>
            </div>


        </>
    );
}


interface TagProps {
    name: string; filterProjects: any;
}
const Tag = (props: TagProps) => {
    let colour: string;
    if (props.name === "java" || props.name === "javascript") {
        colour = 'orange'
    } else if (props.name === "haskell" || props.name === "neural networks") {
        colour = 'purple'
    } else if (props.name === "rust") {
        colour = 'rust'
    } else if (props.name === "c") {
        colour = 'green'
    } else if (props.name === "c++") {
        colour = 'leonard'
    } else if (props.name === "c/c++") {
        colour = 'cppc'
    } else if (props.name === "php" || props.name === "web-dev" || props.name === "javacc") {
        colour = 'grass'
    } else if (props.name === "games") {
        colour = 'rose'
    } else if (props.name === "ai") {
        colour = 'pink'
    } else if (props.name === "sql") {
        colour = 'red'
    } else if (props.name === "postgresql" || props.name === "pathfinding" || props.name === "functional") {
        colour = 'cobalt'
    } else if (props.name === "html" || props.name === "swift" || props.name === "favourites" || props.name === "machine learning") {
        colour = 'fire'
    } else if (props.name === "css") {
        colour = 'blue'
    } else if (props.name === "typescript" || props.name === "react") {
        colour = 'ocean'
    } else if (props.name === "python") {
        colour = 'snake'
    } else {
        colour = "";
    }

    return (
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={750} >
            <button className={"tag " + colour} onClick={() => props.filterProjects(props.name)}>{props.name}</button>
        </Link>

    );
}

export default Pages