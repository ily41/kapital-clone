import Header from './components/Header'
import SubNavbar from './components/SubNavbar'
import Slider from './components/Slider'
import ServiceCards from './components/ServiceCards'
import CardsSlider from './components/CardsSlider'
import CashCredit from './components/CashCredit'
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
        <CardsSlider />
        <CashCredit />
        <div className='h-100'></div>
      </main>
    </>
  )
}

export default App
