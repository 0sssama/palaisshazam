import React from 'react'
import './styles/UnderMap.scss'

function UnderMap() {
    const mapLink = "https://www.google.com/maps/place/Palais+Shazam/@34.0643254,-4.9809732,21z/data=!4m11!1m2!3m1!2sPalais+Shazam!3m7!1s0xd9ff51d441d3263:0x70be2b4c78e96ddf!5m2!4m1!1i2!8m2!3d34.0643272!4d-4.9808554"
    return (
        <div className="under-map">
            <a href={mapLink}>Parking Ein Zliten, 41 Derb Bel Mouaz, Rue Talaa Kebira, 30000</a>
            <a href="tel:+212 6 61 51 90 14" id="gallery">+212 6 61 51 90 14</a>
        </div>
    )
}

export default UnderMap
