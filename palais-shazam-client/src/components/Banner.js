import React, {useState, useEffect} from 'react'
import './styles/Banner.scss'
import bannerVideo from './../images/palais.mp4'

function Banner() {
    const [currentPic, setCurrentPic] = useState(2)
    const picsNum = 4
    const nextPic = () => {
        if (currentPic === picsNum) {
            setCurrentPic(1)
        } else {
            setCurrentPic(currentPic+1)
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
        for (let i = 1; i <= picsNum; i++) {
            let imageElement = document.querySelector(`.pic.p-${i}`);
            imageElement.style.display = 'none'
            imageElement.style.animation = 'none'
        }
        document.querySelector('#bg-video').play()
    }
    useEffect(() => {
        setInterval(()=>{
            nextPic()
        }, 10000)
    },[])
    return (
        <div className="banner">
            <div className="content">
                hellow
            </div>
            <div className="header-effect"></div>
            <div className="banner-video">
                <video muted loop id="bg-video" onLoadedData={showVideo}>
                    <source src={bannerVideo} type="video/mp4" />
                </video>
            </div>
            <div className="pic p-1 current"></div>
            <div className="pic p-2"></div>
            <div className="pic p-3"></div>
            <div className="pic p-4"></div>
        </div>
    )
}

export default Banner
