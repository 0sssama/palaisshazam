import React from 'react'
import './styles/MobileMenu.scss'

function MobileMenu(props) {
    const { menuStatus, toggleMenu } = props
    const menu = [
        {
            name: 'About',
            link: '#about',
        },
        {
            name: 'Our Rooms',
            link: '#rooms',
        },
        {
            name: 'Restaurant',
            link: '#menu',
        },
        {
            name: 'Swimming Pool',
            link: '#pool',
        },
        {
            name: 'Events',
            link: '#events',
        },
        {
            name: 'Map',
            link: '#map',
        },
        {
            name: 'Gallery',
            link: '#gallery',
        },
    ]
    const socMedia = [
        {
            name: 'ig',
            icon: 'logo-instagram',
            url: 'https://instagram.com/palaisshazam'
        },
        {
            name: 'fb',
            icon: 'logo-facebook',
            url: 'https://facebook.com/palaisshazam'
        },
        {
            name: 'wts',
            icon: 'logo-whatsapp',
            url: 'https://wa.me/212661519014'
        },
        {
            name: 'mail',
            icon: 'mail',
            url: 'emailto:palaisshazam@gmail.com'
        },
    ]
    return (
        <section className={`mobile-menu${menuStatus?' open':''}`}>
            <div className="close" onClick={toggleMenu}>
                <span></span>
                <span></span>
            </div>
            <div className="menu__content">
                <p className="title">Feel Home.</p>
                <ul className="links">
                    {menu.map(link => (
                        <li key={link.name}>
                            <a href={link.link}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <span className="line"></span>
                <ul className="social-media">
                    {socMedia.map(link => (
                        <li key={link.name}>
                            <a href={link.url} target="_blank">
                                <ion-icon name={link.icon}></ion-icon>
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="copyright">&copy; All rights reserved. Palais Shazam 2021</p>
                <p className="links">
                    <a href="/privacy-policy">Privacy Policy</a><span>|</span>
                    <a href="/tos">Terms of Service</a><span>|</span>
                    <a href="/feedback">Feedback</a>
                </p>
            </div>

        </section>
    )
}

export default MobileMenu
