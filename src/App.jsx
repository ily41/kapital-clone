import Header from './components/jsx/Header'
import SubNavbar from './components/jsx/SubNavbar'
import Slider from './components/jsx/Slider'
import ServiceCards from './components/jsx/ServiceCards'
import CardsSlider from './components/jsx/CardsSlider'
import CashCredit from './components/jsx/CashCredit'
import InfoCards from './components/jsx/InfoCards'
import NewsSlider from './components/jsx/NewsSlider'
import CurrencyCalculator from './components/jsx/CurrencyCalculator'
import Footer from './components/jsx/Footer'
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
        <InfoCards />
        <NewsSlider />
        <CurrencyCalculator />
      </main>
      <Footer />
    </>
  )
}

export default App
