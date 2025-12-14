import React, { useState, useCallback } from 'react';
import '../css/CreditCalculator.css';

const CreditCalculator = () => {
    const [activeTab, setActiveTab] = useState('kredit');
    
    // Kredit states
    const [amount, setAmount] = useState(10000);
    const [interest, setInterest] = useState(13);
    const [duration, setDuration] = useState(5);

    // Birbank states
    const [birbankAmount, setBirbankAmount] = useState(2000);
    const [birbankDuration, setBirbankDuration] = useState(8);
    const [isTaksit, setIsTaksit] = useState(true);

    // Depozit states
    const [depozitAmount, setDepozitAmount] = useState(100000000);
    const [depozitDuration, setDepozitDuration] = useState(6);
    const [isAylik, setIsAylik] = useState(false);
    const [currency, setCurrency] = useState('AZN');

    // Calculate monthly payment for Kredit
    const calculateKreditPayment = useCallback(() => {
        const principal = amount;
        const monthlyRate = interest / 100 / 12;
        const numPayments = duration;

        if (monthlyRate === 0) {
            return principal / numPayments;
        }

        const monthlyPayment = 
            principal * 
            (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
            (Math.pow(1 + monthlyRate, numPayments) - 1);

        return monthlyPayment;
    }, [amount, interest, duration]);

    // Calculate monthly payment for Birbank
    const calculateBirbankPayment = useCallback(() => {
        return birbankAmount / birbankDuration;
    }, [birbankAmount, birbankDuration]);

    // Calculate depozit returns
    const calculateDepozitReturns = useCallback(() => {
        const rate = 0.09; // 9% annual
        const totalInterest = depozitAmount * rate * (depozitDuration / 12);
        const monthlyInterest = totalInterest / depozitDuration;
        return {
            rate: 9,
            totalInterest: Math.round(totalInterest),
            monthlyInterest: Math.round(monthlyInterest)
        };
    }, [depozitAmount, depozitDuration]);

    const formatNumber = (num) => {
        return Math.round(num).toLocaleString('en-US');
    };

    const formatNumberWithDecimals = (num) => {
        return num.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    };

    // Render Kredit Content
    const renderKreditContent = () => (
        <>
            <div className="calculator-inputs">
                <h3 className="loan-title">Nağd pul krediti</h3>
                <p className="loan-description">
                    Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit təklif edirik. % dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq
                </p>

                {/* Amount Slider */}
                <div className="slider-group">
                    <div className="slider-input-wrapper">
                        <label className="slider-label">Məbləğ</label>
                        <div className="slider-value-display">{amount.toLocaleString()}</div>
                    </div>
                    <div className="slider-container-wrapper">
                        <div 
                            className="slider-track-wrapper"
                            style={{
                                '--fill-percent': `${((amount - 300) / (50000 - 300)) * 100}%`
                            }}
                        >
                            <input
                                type="range"
                                min="300"
                                max="50000"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="range-slider"
                            />
                        </div>
                        <div className="slider-range-labels">
                            <span>300</span>
                            <span>50 000</span>
                        </div>
                    </div>
                </div>

                {/* Interest Slider */}
                <div className="slider-group">
                    <div className="slider-input-wrapper">
                        <label className="slider-label">Faiz</label>
                        <div className="slider-value-display">{interest}</div>
                    </div>
                    <div className="slider-container-wrapper">
                        <div 
                            className="slider-track-wrapper"
                            style={{
                                '--fill-percent': `${((interest - 10.9) / (39.8 - 10.9)) * 100}%`
                            }}
                        >
                            <input
                                type="range"
                                min="10.9"
                                max="39.8"
                                step="0.1"
                                value={interest}
                                onChange={(e) => setInterest(Number(e.target.value))}
                                className="range-slider"
                            />
                        </div>
                        <div className="slider-range-labels">
                            <span>10.9 %</span>
                            <span>39.8 %</span>
                        </div>
                    </div>
                </div>

                {/* Duration Slider */}
                <div className="slider-group">
                    <div className="slider-input-wrapper">
                        <label className="slider-label">Müddət</label>
                        <div className="slider-value-display">{duration}</div>
                    </div>
                    <div className="slider-container-wrapper">
                        <div 
                            className="slider-track-wrapper"
                            style={{
                                '--fill-percent': `${((duration - 3) / (59 - 3)) * 100}%`
                            }}
                        >
                            <input
                                type="range"
                                min="3"
                                max="59"
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="range-slider"
                            />
                        </div>
                        <div className="slider-range-labels">
                            <span>3 ay</span>
                            <span>59 ay</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Result */}
            <div className="calculator-result">
                <div className="result-card">
                    <h4 className="result-title">
                        Nağd pul krediti üçün<br />aylıq ödəniş
                    </h4>
                    <div className="result-amount">
                        {formatNumberWithDecimals(calculateKreditPayment())}<span className="currency">₼</span>
                    </div>
                    <button className="order-button">
                        Sifariş et
                    </button>
                </div>
            </div>
        </>
    );

    // Render Birbank Content
    const renderBirbankContent = () => (
        <>
            <div className="calculator-inputs">
                <h3 className="loan-title">Birbank kartı</h3>
                <p className="loan-description">
                    Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı təklif edirik.
                </p>

                {/* Toggle Switch */}
                <div className="toggle-container">
                    <span className={`toggle-label ${!isTaksit ? 'active' : ''}`}>Nağdlaşdırma</span>
                    <button 
                        className={`toggle-switch ${isTaksit ? 'active' : ''}`}
                        onClick={() => setIsTaksit(!isTaksit)}
                    >
                        <span className="toggle-knob"></span>
                    </button>
                    <span className={`toggle-label ${isTaksit ? 'active' : ''}`}>Taksit</span>
                </div>

                {/* Amount Slider */}
                <div className="slider-group">
                    <div className="slider-input-wrapper">
                        <label className="slider-label">Məbləğ</label>
                        <div className="slider-value-display">{birbankAmount.toLocaleString()}</div>
                    </div>
                    <div className="slider-container-wrapper">
                        <div 
                            className="slider-track-wrapper"
                            style={{
                                '--fill-percent': `${((birbankAmount - 500) / (10000 - 500)) * 100}%`
                            }}
                        >
                            <input
                                type="range"
                                min="500"
                                max="10000"
                                value={birbankAmount}
                                onChange={(e) => setBirbankAmount(Number(e.target.value))}
                                className="range-slider"
                            />
                        </div>
                        <div className="slider-range-labels">
                            <span>500</span>
                            <span>10 000</span>
                        </div>
                    </div>
                </div>

                {/* Duration Slider */}
                <div className="slider-group">
                    <div className="slider-input-wrapper">
                        <label className="slider-label">Müddət</label>
                        <div className="slider-value-display">{birbankDuration}</div>
                    </div>
                    <div className="slider-container-wrapper">
                        <div 
                            className="slider-track-wrapper"
                            style={{
                                '--fill-percent': `${((birbankDuration - 3) / (24 - 3)) * 100}%`
                            }}
                        >
                            <input
                                type="range"
                                min="3"
                                max="24"
                                value={birbankDuration}
                                onChange={(e) => setBirbankDuration(Number(e.target.value))}
                                className="range-slider"
                            />
                        </div>
                        <div className="slider-range-labels">
                            <span>3 ay</span>
                            <span>24 ay</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Result */}
            <div className="calculator-result">
                <div className="result-card result-card-simple">
                    <h4 className="result-title-simple">Aylıq ödəniş</h4>
                    <div className="result-amount-simple">
                        {formatNumber(calculateBirbankPayment())}<span className="currency">₼</span>
                    </div>
                </div>
            </div>
        </>
    );

    // Render Depozit Content
    const renderDepozitContent = () => {
        const depozitReturns = calculateDepozitReturns();
        
        return (
            <>
                <div className="calculator-inputs">
                    <h3 className="loan-title">Depozit kalkulyatoru</h3>
                    <p className="loan-description">
                        Yüksək faizlər əldə etməklə yanaşı, siz müqavilənin bitmə tarixinə 1 ay (30 təqvim günü) qalanədək depozit məbləğini artıra bilərsiniz.
                    </p>

                    {/* Toggle and Currency Row */}
                    <div className="toggle-row">
                        <div className="toggle-container">
                            <span className={`toggle-label ${!isAylik ? 'active' : ''}`}>Aylıq</span>
                            <button 
                                className={`toggle-switch ${isAylik ? 'active' : ''}`}
                                onClick={() => setIsAylik(!isAylik)}
                            >
                                <span className="toggle-knob"></span>
                            </button>
                            <span className={`toggle-label ${isAylik ? 'active' : ''}`}>Müddətin sonu</span>
                        </div>
                        <div className="currency-dropdown">
                            <span>{currency}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>

                    {/* Amount Input */}
                    <div className="slider-group">
                        <div className="slider-input-wrapper">
                            <label className="slider-label">Minimum500AZN/USD</label>
                            <div className="slider-value-display">{depozitAmount.toLocaleString()}</div>
                        </div>
                    </div>

                    {/* Duration Slider */}
                    <div className="slider-group">
                        <div className="slider-input-wrapper">
                            <label className="slider-label">Müddət</label>
                            <div className="slider-value-display">{depozitDuration}</div>
                        </div>
                        <div className="slider-container-wrapper">
                            <div 
                                className="slider-track-wrapper"
                                style={{
                                    '--fill-percent': `${((depozitDuration - 3) / (36 - 3)) * 100}%`
                                }}
                            >
                                <input
                                    type="range"
                                    min="3"
                                    max="36"
                                    step="1"
                                    value={depozitDuration}
                                    onChange={(e) => setDepozitDuration(Number(e.target.value))}
                                    className="range-slider"
                                />
                            </div>
                            <div className="slider-markers">
                                <span>3 ay</span>
                                <span>6 ay</span>
                                <span>12 ay</span>
                                <span>18 ay</span>
                                <span>24 ay</span>
                                <span>36 ay</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Result */}
                <div className="calculator-result">
                    <div className="result-card result-card-depozit">
                        <div className="result-percent">{depozitReturns.rate} %</div>
                        
                        <div className="result-row">
                            <div className="result-row-label">Ümumi faiz gəliri</div>
                            <div className="result-row-value">
                                {formatNumber(depozitReturns.totalInterest)}<span className="currency">₼</span>
                            </div>
                        </div>
                        
                        <div className="result-row">
                            <div className="result-row-label">Aylıq faiz gəliri</div>
                            <div className="result-row-value">
                                {formatNumber(depozitReturns.monthlyInterest)}<span className="currency">₼</span>
                            </div>
                        </div>

                        <div className="result-info">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <span>Hesablamada faiz gəlirlərinə 10% vergi ilə bağlı şərtlər nəzərə alınmayıb.</span>
                        </div>
                        
                        <button className="order-button">
                            Daha ətraflı
                        </button>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="credit-calculator-container">
            <div className="credit-calculator-wrapper">
                <h2 className="calculator-title">Kalkulyator</h2>
                
                {/* Tabs */}
                <div className="calculator-tabs">
                    <button 
                        className={`calculator-tab ${activeTab === 'kredit' ? 'active' : ''}`}
                        onClick={() => setActiveTab('kredit')}
                    >
                        Kredit
                    </button>
                    <button 
                        className={`calculator-tab ${activeTab === 'birbank' ? 'active' : ''}`}
                        onClick={() => setActiveTab('birbank')}
                    >
                        Birbank kartı
                    </button>
                    <button 
                        className={`calculator-tab ${activeTab === 'depozit' ? 'active' : ''}`}
                        onClick={() => setActiveTab('depozit')}
                    >
                        Depozit
                    </button>
                </div>

                <div className="calculator-content">
                    {activeTab === 'kredit' && renderKreditContent()}
                    {activeTab === 'birbank' && renderBirbankContent()}
                    {activeTab === 'depozit' && renderDepozitContent()}
                </div>
            </div>
        </div>
    );
};

export default CreditCalculator;
