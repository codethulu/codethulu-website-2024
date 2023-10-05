import ScrollAnimation from "react-animate-on-scroll";

import careerList from './careerList';
import './careerTimeline.css'



interface TimelineCardProps {
    name: string,
    startYear: string,
    endYear: string,
    description: string,
}

function TimelineCard(props: TimelineCardProps) {
    return (
        <>
            <div className='career-card'>
                <div className="timeline-label">
                    <h2>{props.startYear}</h2>
                    <div className="timeline-line"></div>
                </div>

                <div className="timeline-card-container">
                    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce >
                        <div className="timeline-card">
                            <h1>{props.name}</h1>
                            <h3>{props.startYear + "-" + props.endYear}</h3>
                            <p>{props.description}</p>
                        </div>
                    </ScrollAnimation >
                </div>

            </div>

        </>
    )
}


function Timeline() {
    return (

        <>
            {careerList.map((e: { name: string; startYear: string; endYear: string; description: string; }) => {
                return (
                    <TimelineCard name={e.name} startYear={e.startYear} endYear={e.endYear} description={e.description} />
                );

            }
            )}
        </>

    )
}

export default Timeline