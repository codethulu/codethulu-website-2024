import ScrollAnimation from "react-animate-on-scroll";

import careerList from './careerList';
import './careerTimeline.css'
import './Colours.css'

enum CardType {
    HEAD,
    TAIL,
    NORMAL
}


interface TimelineCardProps {
    name: string,
    startYear: string,
    endYear: string,
    role: string,
    description: string,
    type: CardType,
}

function TimelineCard(props: TimelineCardProps) {
    let lineDecoration = (function () {
        switch (props.type) {
            case CardType.HEAD:
                return "bg-gradient-black-fire";
            case CardType.TAIL:
                return "bg-gradient-fire-black";
            default:
                return "bg-colour-fire";
        }
    })();


    return (
        <div className="timeline-container">
            <div className="timeline-label">
                <h2>{props.startYear}</h2>

            </div>

            <div className={lineDecoration + " timeline-line"}>
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
                        <div className="timeline-card bg-colour-off-white">
                            <h1 className="colour-black">{props.name}</h1>
                            <h3 className="colour-ash">{props.role}</h3>
                            <h3 className="colour-ash">{props.startYear + "-" + props.endYear}</h3>
                            <p className="colour-black">{props.description}</p>
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
            {careerList.map((e: { name: string; startYear: string; endYear: string; role: string; description: string; }, index) => {
                let type = (function () {
                    switch (index) {
                        case 0:
                            return CardType.HEAD
                        case (careerList.length - 1):
                            return CardType.TAIL
                        default:
                            return CardType.NORMAL
                    }
                })();

                return (
                    <TimelineCard name={e.name} startYear={e.startYear} endYear={e.endYear} role={e.role} description={e.description} type={type} />
                );

            }
            )}
        </>

    )
}

export default Timeline