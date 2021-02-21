import {useState} from 'react'
import './components/styles/main.scss'
import FixedHeader from './components/FixedHeader'
import MainHeader from './components/MainHeader'
import MobileMenu from './components/MobileMenu'
import BGEffect from './components/BGEffect'
import Banner from './components/Banner'
import About from './components/About'
import Rooms from './components/Rooms'

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
    </div>
  );
}

export default App;
