import Header from './components/Header'
import SubNavbar from './components/SubNavbar'
import Slider from './components/Slider'
import ServiceCards from './components/ServiceCards'
import BirbankStarSlider from './components/BirbankStarSlider'
import BirbankMiles from './components/BirbankMiles'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <SubNavbar />
      
      <main>
        <div className="slider-section">
          <Slider />
          <ServiceCards />
        </div>
        <BirbankStarSlider />
        <BirbankMiles />
      </main>
    </>
  )
}

export default App
