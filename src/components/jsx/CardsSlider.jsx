import React, { useState } from 'react';
import '../css/CardsSlider.css';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const cards = [
    {
        title: { regular: 'Birbank', bold: 'Star' },
        description: '30 000 ₼-dək kredit xətti, limitsiz nağdlaşdırma və köçürmə imkanı, partnyorlardan bonuslar və QR ödənişlərdə 2 qat ƏDV kimi çoxsaylı üstünlükləri olan, sadə və unikal bir kartdır.',
        image: '/birbank-star-home.png',
        features: [
            { title: 'Alış-verişdə komissiya', value: 'Yoxdur' },
            { title: 'Çətin hesablamalar', value: 'Yoxdur' },
            { title: 'İllik faiz', value: 'Yoxdur' }
        ],
        buttonText: 'Sifariş et',
        colorTheme: '#ff4b60'
    },
    {
        title: { regular: 'Birbank', bold: 'Cashback' },
        description: 'Bu kart sizə bol-bol bonus, sürətli, rahat ödəniş imkanları, pulsuz köçürmə və nağdlaşdırma kimi bir-birindən dəyərli digər üstünlüklər qazandıracaq.',
        image: '/birbank-cashback-home.png',
        features: [
            { title: 'Partnyorlardan bonuslar, və 2 qat ƏDV imkanı', value: 'Bonus' },
            { title: '63 günədək', value: 'Güzəşt müddəti' }
        ],
        buttonText: 'Sifariş et',
        colorTheme: '#ff4b60'
    },
    {
        title: { regular: 'Birbank', bold: 'Miles' },
        description: 'Ölkədaxili ödənişlər zamanı minimum 1 mil qazanmaq üçün 2 AZN ödəniş etmək lazımdır. Ölkəxarici ödənişlərdə isə hər 1 AZN 1 mil qazandıracaq. Partnyorlarımızda alış-verişlər edərək daha çox mil əldə edə bilərsiniz. Qazandığınız millər 2 il ərzində qüvvədə qalır. Topladığınız millərin dəyərini “65 mil = 1 AZN” qaydası ilə hesablaya bilərsiniz.',
        image: '/birbank-miles-home.png',
        features: [
            { title: '2 AZN = 1 Mil', value: 'Millərin toplanması' },
            { title: 'pulsuz', value: 'Kartın qiyməti' },
            { title: '63 günədək', value: 'Güzəşt müddəti' }
        ],
        buttonText: 'Sifariş et',
        colorTheme: '#ff4b60'
    }
];

const CardsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Set to 1 to match the Cashback example initially for checking

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const card = cards[currentIndex];

    return (
        <section className="cards-slider-section">
            <div className="slider-content-wrapper">

                {/* 1. Top Text Container */}
                <div className="slider-top-text fade-in" key={`text-${currentIndex}`}>
                    <h2>{card.title.regular} <strong>{card.title.bold}</strong></h2>
                    <p className='card-text-q'>{card.description}</p>
                </div>

                {/* 2. Gap is handled by margin/padding */}

                {/* 3. Gray Container */}
                <div className="slider-gray-full-width">
                    <div className="slider-gray-inner">

                        {/* Container 1: Texts (Features) & Button */}
                        <div className="gray-left-container fade-in" key={`left-${currentIndex}`}>
                            <div className="features-wrapper">
                                {card.features.map((feature, idx) => (
                                    <div key={idx} className="feature-block">
                                        <h4 style={{ color: card.colorTheme }}>{feature.title}</h4>
                                        <span>{feature.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="button-wrapper">
                                <button className="order-btn" style={{ backgroundColor: card.colorTheme }}>
                                    {card.buttonText}
                                </button>
                            </div>
                        </div>

                        {/* Container 2: Image (Transformed Y) */}
                        <div className="gray-image-container fade-in-img" key={`img-${currentIndex}`}>
                            <img src={card.image} alt={card.title.bold} />
                        </div>

                        {/* Container 3: Buttons of the slider */}
                        <div className="gray-buttons-container">
                            <button className="nav-btn left" onClick={prevSlide}>
                                <BiChevronLeft size={24} />
                            </button>
                            <button className="nav-btn right" onClick={nextSlide}>
                                <BiChevronRight size={24} />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CardsSlider;
