import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="main-header">
        <div className="header-top-bar"></div>
        <div className="header-container">
          <div className="header-logo">
            <img src="/logo.svg" alt="Kapital Bank" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <a href="#" className="nav-link">Fiziki</a>
            <a href="#" className="nav-link">Biznes</a>
            <a href="#" className="nav-link">Invest</a>
            
            <div className="nav-item-with-icon">
              <svg className="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C4.7 0 2 2.7 2 6c0 4.4 6 10 6 10s6-5.6 6-10c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 3.5 8 3.5s2.5 1.1 2.5 2.5S9.4 8.5 8 8.5z" fill="#EF3E42"/>
              </svg>
              <a href="#" className="nav-link">Xidmət şəbəkəsi</a>
            </div>
            
            <div className="language-switcher">
              <a href="#" className="lang-link">EN</a>
              <a href="#" className="lang-link">RU</a>
            </div>
            
            <button className="search-button">
              <HiOutlineSearch size={20} />
            </button>
          </nav>

          {/* Mobile Navigation */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

