import React from 'react'
import './styles/Instagram.scss'
import PFP from './../images/pfp.jpg'


function Instagram() {
    const images = ['./ig-1.jpg', './ig-2.jpg', './ig-3.jpg', './ig-4.jpg']
    return (
        <div className="instagram">
            <p className="title" data-aos="fade-up">Follow us on Instagram</p>
            <div onClick={()=>window.open('https://instagram.com/palaisshazam')} className="profile" data-aos="fade-up" data-aos-duration="800">
                <img className="profile-picture" src={PFP} alt="PROFILE PICTURE" />
                <p className="profile-username">@palaisshazam</p>
            </div>
            <div className="images-container" data-aos="fade-up" data-aos-duration="2000">
                {images.map(image => (
                    <div 
                        key={image} 
                        className="image" 
                        style={{backgroundImage: `url(${image})`}}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Instagram
