import React, { useState } from 'react';
import '../css/NewsSlider.css';

const NewsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const news = [
        {
            day: 20,
            month: 'Oktyabr',
            title: 'Kartınızı heç kimə verməyin: pulunuzu itirə, cinayətin qurbanı ola bilərsiniz'
        },
        {
            day: 17,
            month: 'Oktyabr',
            title: 'Regionlarda idmanın inkişafı üçün sosial tərəfdaşlıq: Qırmızı Ürəklər Fondu və Cüdo Federasiyası əməkdaşlığa başladı'
        },
        {
            day: 16,
            month: 'Oktyabr',
            title: 'Kibertəhlükəsizlik üzrə maarifləndirmə ayında - Dayan, Düşün, Dəqiqləşdir!'
        },
        {
            day: 16,
            month: 'Oktyabr',
            title: '10 000 AZN kredit götür, aylıq cəmi 350 manat ödə – Birbank Biznes-dən sərfəli kredit kampaniyası'
        },
        {
            day: 15,
            month: 'Oktyabr',
            title: 'Kapital Bank-ın İnformasiya təhlükəsizliyi komandası ölkənin ən güclü mütəxəssisləri sırasında'
        },
        {
            day: 14,
            month: 'Oktyabr',
            title: 'Kapital Bank 2025-ci ilin III rübü üzrə maliyyə nəticələrini elan edib'
        }
    ];

    const itemsPerSlide = {
        desktop: 3,
        mobile: 1
    };

    const getItemsPerSlide = () => {
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            return itemsPerSlide.mobile;
        }
        return itemsPerSlide.desktop;
    };

    const maxSlide = Math.ceil(news.length / getItemsPerSlide()) - 1;

    const goToNext = () => {
        if (currentSlide < maxSlide) {
            setCurrentSlide(prev => prev + 1);
        } else {
            setCurrentSlide(0);
        }
    };

    return (
        <section className="news-slider-section">
            <div className="news-slider-container">
                {/* Header */}
                <div className="news-header">
                    <h2 className="news-title">Xəbərlər</h2>
                    <a href="#" className="news-all-link">
                        Bütün xəbərlər
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>

                <div className="news-header-line"></div>

                {/* News Items */}
                <div className="news-slider-wrapper">
                    <div 
                        className="news-slider-track"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {/* Desktop view - groups of 3 */}
                        {Array.from({ length: Math.ceil(news.length / 3) }).map((_, groupIndex) => (
                            <div key={groupIndex} className="news-slide-group">
                                {news.slice(groupIndex * 3, groupIndex * 3 + 3).map((item, index) => (
                                    <div key={index} className="news-item">
                                        <div className="news-date">
                                            <div className="news-day">{item.day}</div>
                                            <div className="news-month">{item.month}</div>
                                        </div>
                                        <p className="news-item-title">{item.title}</p>
                                        
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Mobile view - one at a time */}
                    <div 
                        className="news-slider-track-mobile"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {news.map((item, index) => (
                            <div key={index} className="news-slide-mobile">
                                <div className="news-item">
                                    <div className="news-date">
                                        <div className="news-day">{item.day}</div>
                                        <div className="news-month">{item.month}</div>
                                    </div>
                                    <p className="news-item-title">{item.title}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Arrow */}
                    <button className="news-arrow" onClick={goToNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsSlider;

