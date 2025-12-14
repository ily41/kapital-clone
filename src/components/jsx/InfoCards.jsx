import React from 'react';
import '../css/InfoCards.css';

const InfoCards = () => {
    return (
        <section className="info-cards-section">
            <div className="info-cards-container">
                {/* Onlayn kredit Card */}
                <div className="info-card info-card-gray">
                    <div className="info-card-content">
                        <h2 className="info-card-title">Onlayn kredit</h2>
                        <p className="info-card-description">
                            Banka gəlmədən və növbələrdə vaxt itirmədən kredit əldə et.
                        </p>
                        <a href="#" className="info-card-link">
                            Sifariş et
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                    <div className="info-card-image">
                        <img src="/section1.webp" alt="Online kredit" />
                    </div>
                </div>

                {/* İnsan resursları Card */}
                <div className="info-card info-card-red">
                    <div className="info-card-content">
                        <h2 className="info-card-title">İnsan resursları</h2>
                        <p className="info-card-description">
                            Kapital Bankın peşəkarlar komandasına qoşulmaq istəyirsinizsə, Sizi müvafiq vakansiyaya müraciət etməyə dəvət edirik. Biz sizə dinamik mühitdə maraqlı və perspektivli iş təklif edirik.
                        </p>
                        <a href="#" className="info-card-link">
                            Daha ətraflı
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                    <div className="info-card-image">
                        <img src="/section2.webp" alt="İnsan resursları" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoCards;

