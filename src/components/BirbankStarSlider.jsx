import { useState, useEffect } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import './BirbankStarSlider.css';

const BirbankStarSlider = () => {
  const slides = [
    {
      features: [
        { title: 'Alış-verişdə komissiya', value: 'Yoxdur' },
        { title: 'Çətin hesablamalar', value: 'Yoxdur' },
        { title: 'İllik faiz', value: 'Yoxdur' }
      ]
    },
    {
      features: [
        { 
          title: '2 AZN = 1 Mil', 
          value: 'Millərin toplanması', 
          highlightedValue: 'pulsuz'
        },
        { 
          title: 'Kartın qiyməti', 
          highlightedValue: '63 günədək', 
          value: 'Güzəşt müddəti' 
        }
      ]
    },
    {
      features: [
        { 
          title: 'Partnyorlardan bonuslar və 2 qat ƏDV imkanı', 
          value: 'Bonus', 
          highlightedValue: '63 günədək', 
          subValue: 'Güzəşt müddəti' 
        }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [fadeClass, setFadeClass] = useState('fade-in');

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFadeClass('fade-in');
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFadeClass('fade-in');
    }, 300);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFadeClass('fade-in');
    }, 300);
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
  };

  return (
    <div className="birbank-star-slider-container">
      <div className="birbank-star-content">
        {/* Top Section - White Background */}
        <div className="birbank-star-top">
          <h2 className="birbank-star-title">Birbank Star</h2>
          <p className="birbank-star-description">
            30 000 m-dək kredit xətti, limitsiz nağdlaşdırma və köçürmə imkanı, partnyorlardan bonuslar və QR ödənişlərdə 2 qat ƏDV kimi çoxsaylı üstünlükləri olan, sadə və unikal bir kartdır.
          </p>
        </div>

        {/* Bottom Section - Light Gray Background with Slider */}
        <div 
          className="birbank-star-bottom"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button 
            className="birbank-star-nav-btn birbank-star-nav-left" 
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <HiOutlineChevronLeft size={24} />
          </button>

          <div className={`birbank-star-slide-content ${fadeClass}`}>
            <div className="birbank-star-features">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="birbank-star-feature">
                  <h3 className="birbank-star-feature-title">{feature.title}</h3>
                  {feature.highlightedValue && (
                    <p className="birbank-star-feature-highlighted">{feature.highlightedValue}</p>
                  )}
                  {feature.value && (
                    <p className="birbank-star-feature-value">{feature.value}</p>
                  )}
                  {feature.subValue && (
                    <p className="birbank-star-feature-subvalue">{feature.subValue}</p>
                  )}
                  {feature.subSubValue && (
                    <p className="birbank-star-feature-subvalue">{feature.subSubValue}</p>
                  )}
                </div>
              ))}
            </div>
            <button className="birbank-star-order-btn">Sifariş et</button>
          </div>

          <button 
            className="birbank-star-nav-btn birbank-star-nav-right" 
            onClick={goToNext}
            aria-label="Next slide"
          >
            <HiOutlineChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirbankStarSlider;

