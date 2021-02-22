import {useState} from 'react'
import './components/styles/main.scss'
import FixedHeader from './components/FixedHeader'
import MainHeader from './components/MainHeader'
import MobileMenu from './components/MobileMenu'
import BGEffect from './components/BGEffect'
import Banner from './components/Banner'
import About from './components/About'
import Rooms from './components/Rooms'
import Restaurant from './components/Restaurant'
import Pool from './components/Pool'
import Events from './components/Events'
import Map from './components/Map'
import UnderMap from './components/UnderMap'
import Instagram from './components/Instagram'
import Footer from './components/Footer'

function App() {
  const [ menuStatus, setMenuStatus ] = useState(false)
  const toggleMenu = () => {
    setMenuStatus(!menuStatus)
  }
  return (
    <div className="App">
      <BGEffect menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <MobileMenu menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <FixedHeader menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <MainHeader menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <Banner />
      <div id="scroll"></div>
      <About />
      <Rooms />
      <Restaurant />
      <Pool />
      <Events />
      <Map 
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB_NW3Q5uXAAXd2zI_A0mfNMSliQdrNNOg`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className="map-element" id="map" data-aos="fade-up" data-aos-duration="800" />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <UnderMap />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
