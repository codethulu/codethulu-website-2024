import ScrollAnimation from "react-animate-on-scroll";

import './aboutCard.css'
import './projectCard.css'
import { Masonry } from "@mui/lab";

let img1 = require('../images/about/1.jpg');
let img2 = require('../images/about/2.jpg');
let img3 = require('../images/about/3.jpg');
let img4 = require('../images/about/4.jpg');
// import photo from '../images/profile-pic.png'
interface AboutCardProps {
    title: string,
    text: string,
    img: any,
    orientation: string,
    background: string,
    foreground?: string
}

function AboutCard(props: AboutCardProps) {
    return (
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce >
            <div className={'skill-card ' + props.background}>
                {props.orientation === 't' ? <img className='skill-card-img' src={props.img} alt={props.title} /> : <></>}
                <h1>{props.title}</h1>
                {props.orientation === 'm' ? <img className='skill-card-img' src={props.img} alt={props.title} /> : <></>}
                <p>{props.text}</p>
                {props.orientation === 'b' ? <img className='skill-card-img' src={props.img} alt={props.title} /> : <></>}

            </div>
        </ScrollAnimation>
    )
}

function AboutCards() {
    return (

        <Masonry
            columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
            spacing={2}
            defaultHeight={50}
            defaultColumns={4}
            defaultSpacing={2}
        >
            <AboutCard title='System-Level Programming' text="I have experience in C, C++ and Rust. I'm proud of the range of system-level projects I've worked on, including my successful final year project at university which was written in Rust." img={img1} orientation='n' background='col-2024' />
            <AboutCard title='Warwick Alumni' text="I graduated from The University of Warwick with a Bsc in Computer Science, in 2023." img={img2} orientation='t' background='col-2024' />
            <AboutCard title='Web Engineer' text="I am a fully capable full stack web developer; with experience in both front-end and back-end web development, as well as in web deployment and maintenance." img={img4} orientation='b' background='col-2024' />

            <AboutCard title='Creative Design' text="In my spare time, I sometimes paint and draw. My creativity extends to my productive work, where I am proficient in industry-standard design tools and UI/UX design." img={img3} orientation='t' background='col-2024' />
            <AboutCard title='Passionate about games' text="I love making games in my spare time, and I have developed my graphics programming and 3D modelling skills. I managed to win the 'Outstanding Technical Achievement' award at the University of Warwick game jam." img={img1} orientation='m' background='col-2024' />
            {/* <AboutCard title='Programming Polyglot' text="I have experience working with: Java, C, C++, Haskell, Python, and Rust. I like to challenge myself by working with different programming paradigms and langauges, and from this I have become a flexible developer." img={img3} orientation='n' background='col-2024' /> */}



        </Masonry>

    )
}

export default AboutCards