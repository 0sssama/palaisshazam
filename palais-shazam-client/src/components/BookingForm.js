import React, {useState} from 'react'
import './styles/BookingForm.scss'
import calendarIcon from './../images/calendar.png'

function BookingForm() {
    const [arrival, setArrival] = useState(false)
    const [arrivalDate, setArrivalDate] = useState(new Date())
    const [departure, setDeparture] = useState(false)
    const [departureDate, setDepartureDate] = useState(undefined)
    /*if (arrival || departure) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'scroll';
        document.querySelector('body').style.overflowX = 'hidden';
    }*/
    const toggleArrival = () => {
        setArrival(!arrival)
    }
    const toggleDeparture = () => {
        setDeparture(!departure)
    }
    const updateArrival = date => {
        let selectedDate = new Date(date)
        let arrivalPH = document.querySelector('.placeholder-text.arrival')
        arrivalPH.textContent = selectedDate
        setArrival(false)
        setArrivalDate(date)
        
    }
    const updateDeparture = date => {
        let selectedDate = new Date(date)
        let departurePH = document.querySelector('.placeholder-text.departure')
        departurePH.textContent = selectedDate
        setDeparture(false)
        setDepartureDate(date)
        
    }
    /*
    <div className={`calendar arrival${arrival?' show':''}`}>
        <div className="close" onClick={toggleArrival}>
            <button>X</button>
        </div>
        <div className="content">
            <p className="title">Arrival Date</p>
            <div className="actual-calendar">
                <Calendar onChange={updateArrival} value={arrivalDate} />
            </div>
        </div>
    </div>
    <div className={`calendar departure${departure?' show':''}`}>
        <div className="close" onClick={toggleDeparture}>
            <button>X</button>
        </div>
        <div className="content">
            <p className="title">Departure Date</p>
            <div className="actual-calendar">
                <Calendar onChange={updateDeparture} value={departureDate} />
            </div>
        </div>
    </div>
    */
    return (
        <>
            <div className="booking-form" 
                data-aos="fade-up"
                data-aos-duration="1500"
                >
                <div className="form-container">
                    <div className="date-input" onClick={toggleArrival}>
                        <p className="placeholder-text arrival">Arrival</p>
                        <span>
                            <img src={calendarIcon} alt="CALENDAR ICON" />
                        </span>
                    </div>
                    <div className="date-input" onClick={toggleDeparture}>
                        <p className="placeholder-text departure">Departure</p>
                        <span>
                            <img src={calendarIcon} alt="CALENDAR ICON" />
                        </span>
                    </div>
                    <button>
                        Check Availability
                    </button>
                </div>
            </div>
        </>
    )
}

export default BookingForm
