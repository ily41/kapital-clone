import React from 'react';
import CreditCalculator from './CreditCalculator';
import '../css/CashCredit.css';

const CashCredit = () => {
    const data = {
        title: 'Nağd kredit',
        description: '50000 AZN-dək, arzularınızı reallaşdırmaq və ya ehtiyaclarınızı ödəmək üçün nağd kredit təklif edirik.',
        image: '/money.png',
        features: [
            { value: '50 000 AZN-dək', label: 'Kredit məbləği' },
            { value: '59 ayadək', label: 'Kredit müddəti' },
            { value: '10.9%-dən', label: 'İllik faiz dərəcəsi' }
        ],
        buttonText: 'Sifariş et',
        colorTheme: '#ff4b60'
    };

    return (
        <section className="cash-credit-section">
            <div className="cash-credit-content-wrapper">

                {/* Top Text Container */}
                <div className='cash-credit-top-text-container'>
                    <div className="cash-credit-top-text">
                        <h2 style={{display: 'inline-block'}}>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
                
                <div className='cash-credit-top-text-dessktop'>
                    <div className="cash-credit-top-text">
                        <h2 style={{display: 'inline-block'}}>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="cash-credit-image-mobile">
                    <img src={data.image} alt="Banknotes" />
                </div>

                {/* Gray Container */}
                <div className="cash-credit-gray-full-width">
                    
                    <div className="cash-credit-gray-inner">


                        {/* Container 2: Features & Button (Right) */}
                        <div className="cash-credit-right-container">
                        
                            <div className='cash-credit-right-container-inner'>
                                <div className="cash-credit-image-inner-gray">
                                        <img src={data.image} alt="Banknotes" />
                                </div>
                                <div className="cash-credit-features-wrapper">
                                    {data.features.map((feature, idx) => (
                                        <div key={idx} className="cash-credit-feature-block">
                                            <h4 style={{ color: data.colorTheme }}>{feature.value}</h4>
                                            <span>{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="cash-credit-button-wrapper">
                                    <button className="cash-credit-order-btn" style={{ backgroundColor: data.colorTheme }}>
                                        {data.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
            {/* Credit Calculator Section */}
            <CreditCalculator />
        </section>
    );
};

export default CashCredit;

