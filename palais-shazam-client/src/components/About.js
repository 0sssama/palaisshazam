import React from 'react'
import './styles/About.scss'

function About() {
    return (
        <div className="About" id="about" data-aos="fade-up">
            <div className="top">
                <p className="title smoll">Welcome to Palais Shazam,</p>
                <p className="title big">
                    A LUXURY HOTEL IN THE HEART OF FES MEDINA
                    <span></span>
                </p>
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-duration="1000">
                <p>
                    Praesent luctus viverra felis quis efficitur. Suspendisse potenti. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada 
                    fames ac turpis egestas. Suspendisse facilisis venenatis purus in tincidunt. 
                    Fusce mauris augue, gravida eu aliquet eget, congue vel urna. Fusce rutrum 
                    sapien in ullamcorper euismod. Donec dolor ex, elementum a sem ut, ultricies 
                    feugiat tellus.
                </p>
                <p>
                    Praesent faucibus at ante sit amet commodo. Aliquam erat volutpat. Nunc 
                    tempor accumsan massa, ut laoreet tellus bibendum eget.
                </p>
                <button className="gold primary">Book Now</button>
            </div>
        </div>
    )
}

export default About
