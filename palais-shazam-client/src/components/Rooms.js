import React, {useEffect} from 'react'
import './styles/Rooms.scss'

function Rooms() {
    let currentImage = 1
    const imgCount = 2
    const nextImage = () => {
        if (currentImage === imgCount) {
            currentImage = 1
        } else {
            currentImage++
        }
        showImage(currentImage)
    }
    const previousImage = () => {
        if (currentImage === 1) {
            currentImage = imgCount
        } else {
            currentImage--
        }
        showImage(currentImage)
    }
    const showImage = (n) => {
        if (n>imgCount) {console.log('img called for does not exist')}
        for (let i = 1; i <= imgCount; i++) {
            let imgElement = document.querySelector(`.room-pic.pic-${i}`)
            if (i === n) {
                if (!imgElement.classList.contains('current')) {
                    imgElement.classList.add('current')
                }
            } else {
                imgElement.classList.remove('current')
            }
        }
    }
    return (
        <div className="rooms-container" id="rooms">
            <div className="text-container">
                <div className="title" data-aos="fade-up" data-aos-duration="600">
                    <p>OUR ROOMS</p>
                    <span></span>
                </div>
                <div className="content" data-aos="fade-up" data-aos-duration="800">
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Sed dapibus, lacus sed rutrum posuere, lorem 
                        ex varius dui, eleifend mollis lectus enim sit amet 
                        mauris. Pellentesque habitant morbi tristique senectus 
                        et netus et malesuada fames ac turpis egestas. Donec 
                        augue ante, congue ut tristique id, iaculis eu arcu.
                    </p>
                    <div className="explore-btn" data-aos="fade-up" data-aos-duration="1000">
                        <p>Explore More</p>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="picture-container" data-aos="fade-up">
                <div className="btn previous" onClick={previousImage}>
                    <span className="previous"></span>
                </div>
                <div className="btn next" onClick={nextImage}>
                    <span className="next"></span>
                </div>
                <div className="room-pic pic-1 current" style={{backgroundImage: 'url(./pic-3.jpg)'}}></div>
                <div className="room-pic pic-2" style={{backgroundImage: 'url(./pic-4.jpg)'}}></div>
            </div>
        </div>
    )
}

export default Rooms
