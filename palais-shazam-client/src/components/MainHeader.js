import React from 'react'
import './styles/MainHeader.scss'
import logo from './../images/logo.png'

function MainHeader(props) {
    const { toggleMenu } = props
    return (
        <header className="main">
            <div className="ham-menu">
                <div className="actual-ham-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="logo" onClick={() => window.location.replace('#')}>
                <img src={logo} alt="LOGO" />
            </div>
            <div className="book-btn">
                <button className="gold primary" onClick={() => window.location.replace('')}>
                    Book<span className="hide-for-mobile"> A Stay</span>
                </button>
            </div>
        </header>
    )
}

export default MainHeader
