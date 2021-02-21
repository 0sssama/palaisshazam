import React, {useState, useEffect} from 'react'
import './styles/Banner.scss'
import bannerVideo from './../images/palais.mp4'
import BookingForm from './BookingForm'
import ScrollButton from './ScrollButton'

function Banner() {
    let currentPic = 1
    const picsNum = 4
    const nextPic = () => {
        if (currentPic === picsNum) {
            currentPic = 1
        } else {
            currentPic++
        }
        showImage(currentPic)
    }
    const showImage = (n) => {
        if (n>picsNum) {console.log('Warning: the image called for does not exist')}
        for (let i = 1; i <= picsNum; i++) {
            let imageElement = document.querySelector(`.pic.p-${i}`);
            if (i === n) {
                imageElement.classList.add('current')
            } else {
                imageElement.classList.remove('current')
            }
        }
    }
    const showVideo = () => {
        document.querySelector('.loading').classList.remove('hidden')
        setTimeout(() => {
            document.querySelector('.loading').classList.add('hidden')
            for (let i = 1; i <= picsNum; i++) {
                let imageElement = document.querySelector(`.pic.p-${i}`);
                imageElement.classList.add('video-initialized')
            }
            document.querySelector('#bg-video').classList.add('start')
            document.querySelector('#bg-video').play()
        }, 4000);
    }
    useEffect(() => {
        setInterval(()=>{nextPic()}, 10000)
    },[])
    return (
        <div className="banner">
            <div className="content">
                <BookingForm />
                <ScrollButton />
            </div>
            <div className="banner-video">
                <div className="loading hidden"></div>
                <video muted loop id="bg-video" onLoadedData={showVideo}>
                    <source src={bannerVideo} type="video/mp4" />
                </video>
            </div>
            <div className="header-effect"></div>
            <div className="pic p-1 current" style={{backgroundImage: "url('./pic-1.jpg')"}}></div>
            <div className="pic p-2" style={{backgroundImage: "url('./pic-2.jpg')"}}></div>
            <div className="pic p-3" style={{backgroundImage: "url('./pic-3.jpg')"}}></div>
            <div className="pic p-4" style={{backgroundImage: "url('./pic-4.jpg')"}}></div>
        </div>
    )
}

export default Banner
