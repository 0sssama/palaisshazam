import React from 'react'
import './styles/BookingForm.scss'
import calendarIcon from './../images/calendar.png'

function BookingForm() {
    return (
        <div className="booking-form" 
            data-aos="fade-up"
            data-aos-duration="1500"
            >
            <div className="form-container">
                <div className="date-input">
                    <p className="placeholder-text">Arrival</p>
                    <span>
                        <img src={calendarIcon} alt="CALENDAR ICON" />
                    </span>
                </div>
                <div className="date-input">
                    <p className="placeholder-text">Departure</p>
                    <span>
                        <img src={calendarIcon} alt="CALENDAR ICON" />
                    </span>
                </div>
                <button>
                    Check Availability
                </button>
            </div>
        </div>
    )
}

export default BookingForm
