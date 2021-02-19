import React from 'react'
import './styles/ScrollButton.scss'

function ScrollButton() {
    return (
        <div className="scroll-button" onClick={()=>window.location.replace('#about')}>
            <div className="mouse">
                <span></span>
            </div>
            <div className="arrow">
                <span></span>
            </div>
        </div>
    )
}

export default ScrollButton
