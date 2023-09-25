import React, { useState, useEffect } from 'react';
import '../Typography.css'
import './Colours.css'
import ScrollAnimation from 'react-animate-on-scroll';


interface FlairTitleProps {
    text: string,
    col: string,
    bg: string,
}

function FlairTitle(props: FlairTitleProps) {
    const handleAfterAnimation = (): {} => {

        let elements = document.querySelectorAll('.flair-text') as NodeListOf<HTMLElement>;

        elements.forEach(element => {
            if (element.getAttribute('data-content') === props.text) {
                element.classList.add('animate-before', 'animate-after');
            }
        });

        return {};
    };
    return (
        <div className='flair-text-container'>


            <ScrollAnimation animateIn="animate__fadeIn" afterAnimatedIn={() => handleAfterAnimation()} animateOnce>
                <h1 className={props.bg + ' flair-text text-size-large ' + props.col} data-content={props.text} title-col={props.col}>

                    {props.text}
                </h1>



            </ScrollAnimation>


        </div>
    )
}

export default FlairTitle