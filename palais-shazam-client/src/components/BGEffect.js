import React from 'react'
import './styles/BGEffect.scss'

function BGEffect(props) {
    const {menuStatus, toggleMenu} = props
    return (
        <div className={`bg-effect${menuStatus?' visible':''}`} onClick={toggleMenu}></div>
    )
}

export default BGEffect
