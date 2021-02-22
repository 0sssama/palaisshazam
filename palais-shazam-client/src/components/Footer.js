import React from 'react'
import './styles/Footer.scss'

function Footer() {
    const links = [
        {
            name: 'Jobs',
            link: '/jobs',
        },
        {
            name: 'Privacy Policy',
            link: '/privary-policy',
        },
        {
            name: 'Terms & Conditions',
            link: '/tos',
        },
        {
            name: 'Cookie Policy',
            link: '/cookie-policy',
        },
        {
            name: 'F.A.Q',
            link: '/faq',
        },
        {
            name: 'Feedback',
            link: '/feedback',
        }
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
        <div className="footer">
            <section className="cool-section">
                <p className="title" data-aos="fade-up" data-aos-duration="800">
                    So, what're you waiting for?
                </p>
                <button 
                    className="blue primary" 
                    onClick={()=>window.location.replace('/book')}
                >
                    Book Now
                </button>
            </section>
            <section className="links-section">
                <ul className="links" data-aos="fade-up">
                    {links.map(link => (
                        <li key={link.name}>
                            <a href={link.link}>
                                {link.name}
                                <span></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="another-very-cool-section">
                <div className="biden">
                    <ul className="social-media">
                        {socMedia.map(link => (
                            <li key={link.name}>
                                <a href={link.url} target="_blank">
                                    <ion-icon name={link.icon}></ion-icon>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="trump">
                    <p>
                        Made with {'<'}3 from Fes, Morocco. <br />
                        &copy; All rights reserved. Palais Shazam 2021
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Footer
