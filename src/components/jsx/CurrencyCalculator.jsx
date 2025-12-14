import React, { useState, useRef, useEffect } from 'react';
import '../css/CurrencyCalculator.css';

const CurrencyCalculator = () => {
    const [activeMode, setActiveMode] = useState('sell'); // 'sell' or 'buy'
    const [amount, setAmount] = useState(100);
    const [currency, setCurrency] = useState('AZN');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currencies = ['AZN', 'USD', 'EUR'];

    const rates = {
        USD: { buy: 1.697, sell: 1.702 },
        EUR: { buy: 1.9695, sell: 2.0195 }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const calculateConversion = (targetCurrency) => {
        if (currency === targetCurrency) {
            return amount.toFixed(2);
        }
        
        if (currency === 'AZN') {
            const rate = activeMode === 'sell' ? rates[targetCurrency].buy : rates[targetCurrency].sell;
            return (amount / rate).toFixed(2);
        } else if (targetCurrency === 'AZN') {
            const rate = activeMode === 'sell' ? rates[currency].sell : rates[currency].buy;
            return (amount * rate).toFixed(2);
        } else {
            // Convert from one foreign currency to another via AZN
            const toAZN = activeMode === 'sell' ? rates[currency].sell : rates[currency].buy;
            const fromAZN = activeMode === 'sell' ? rates[targetCurrency].buy : rates[targetCurrency].sell;
            return ((amount * toAZN) / fromAZN).toFixed(2);
        }
    };

    const handleCurrencySelect = (selectedCurrency) => {
        setCurrency(selectedCurrency);
        setIsDropdownOpen(false);
    };

    const getDisplayCurrencies = () => {
        // Show currencies that are not the selected one
        return currencies.filter(c => c !== currency);
    };

    return (
        <section className="currency-section">
            <div className="currency-container">
                {/* Left Side - Rates Table */}
                <div className="currency-left">
                    <h2 className="currency-title">
                        <span className="currency-title-italic">Valyuta</span> kalkulyatoru
                    </h2>
                    <p className="currency-description">
                        Bəzi filiallar üzrə fərqli məzənnələr təyin edilə bilər
                    </p>

                    <div className="currency-table">
                        <div className="currency-table-header">
                            <span>Valyuta</span>
                            <span>Alış</span>
                            <span>Satış</span>
                        </div>
                        <div className="currency-table-divider"></div>
                        <div className="currency-table-row">
                            <span className="currency-name">USD</span>
                            <span className="currency-rate">{rates.USD.buy}</span>
                            <span className="currency-rate currency-rate-bold">{rates.USD.sell}</span>
                        </div>
                        <div className="currency-table-row">
                            <span className="currency-name">EUR</span>
                            <span className="currency-rate">{rates.EUR.buy}</span>
                            <span className="currency-rate currency-rate-bold">{rates.EUR.sell}</span>
                        </div>
                    </div>

                    <a href="#" className="currency-more-link">
                        Daha ətraflı
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>

                {/* Right Side - Calculator */}
                <div className="currency-right">
                    <div className="currency-calculator-card">
                        {/* Mode Toggle */}
                        <div className="currency-mode-toggle">
                            <button 
                                className={`currency-mode-btn ${activeMode === 'sell' ? 'active' : ''}`}
                                onClick={() => setActiveMode('sell')}
                            >
                                Mən satıram
                            </button>
                            <button 
                                className={`currency-mode-btn ${activeMode === 'buy' ? 'active' : ''}`}
                                onClick={() => setActiveMode('buy')}
                            >
                                Mən alıram
                            </button>
                        </div>

                        {/* Amount Input */}
                        <div className="currency-input-wrapper">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="currency-input"
                            />
                            <div className="currency-dropdown-container" ref={dropdownRef}>
                                <button 
                                    className={`currency-dropdown-btn ${isDropdownOpen ? 'open' : ''}`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    {currency}
                                    <svg 
                                        width="16" 
                                        height="16" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                
                                {isDropdownOpen && (
                                    <div className="currency-dropdown-menu">
                                        {getDisplayCurrencies().map((curr) => (
                                            <div 
                                                key={curr}
                                                className="currency-dropdown-item"
                                                onClick={() => handleCurrencySelect(curr)}
                                            >
                                                {curr}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="currency-input-label">Məbləği daxil edin</p>

                        {/* Conversion Results */}
                        <div className="currency-results">
                            {getDisplayCurrencies().map((curr) => (
                                <div key={curr} className="currency-result-row">
                                    <span className="currency-result-value">{calculateConversion(curr)}</span>
                                    <span className="currency-result-name">{curr}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrencyCalculator;
