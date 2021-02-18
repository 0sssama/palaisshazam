import React from 'react'
import './styles/FixedHeader.scss'
import icon from './../images/icon.png'

function FixedHeader(props) {
    const { toggleMenu } = props
    return (
        <header className="fixed hidden">
            <div className="ham-menu">
                <div className="actual-ham-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="icon" onClick={()=>window.location.replace('#')}>
                <img src={icon} alt="ICON" />
            </div>
            <div className="book-btn">
                <button className="gold primary" onClick={()=>window.location.replace('/book')}>
                    Book<span className="hide-for-mobile"> A Stay</span>
                </button>
            </div>
        </header>
    )
}

export default FixedHeader
