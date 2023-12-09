import ScrollAnimation from "react-animate-on-scroll";

import careerList from './careerList';
import './careerTimeline.css'


interface TimelineCardProps {
    name: string,
    startYear: string,
    endYear: string,
    role: string,
    description: string,
}

function TimelineCard(props: TimelineCardProps) {
    return (
        <div className="timeline-container">
            <div className="timeline-label">
                <h2>{props.startYear}</h2>

            </div>
            <div className="timeline-line">
                <div className="timeline-stop-container">
                    <ScrollAnimation animateIn="animate__bounceIn" animateOnce >
                        <div className="timeline-stop"></div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className='career-card'>
                {/*  */}

                <div className="timeline-card-container">
                    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce >
                        <div className="timeline-card">
                            <h1>{props.name}</h1>
                            <h3>{props.role}</h3>
                            <h3>{props.startYear + "-" + props.endYear}</h3>
                            <p>{props.description}</p>
                        </div>
                    </ScrollAnimation >
                </div>

            </div>

        </div>
    )
}


function Timeline() {
    return (

        <>
            {careerList.map((e: { name: string; startYear: string; endYear: string; role: string; description: string; }) => {
                return (
                    <TimelineCard name={e.name} startYear={e.startYear} endYear={e.endYear} role={e.role} description={e.description} />
                );

            }
            )}
        </>

    )
}

export default Timeline