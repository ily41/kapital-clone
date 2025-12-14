import { useState, useEffect } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import '../css/Slider.css';

const Slider = () => {
  const slides = [
    {
      image: '/slider1.png',
      title: 'Yığım hesabı artıq Birbank-da!',
      description: 'Hesabınızı indi açın, illik 7% gəlir əldə edin.',
      buttonText: 'Ətraflı'
    },
    {
      image: '/slider2.png',
      title: 'Həftəsonu iş rejimi',
      description: 'Bir çox filiallarımız şənbə və bazar günü də fəaliyyət göstərir.',
      buttonText: 'Daha ətraflı'
    },
    {
      image: '/slider3.png',
      title: 'Sea Breeze-də mənzil və minlərlə hədiyyə',
      description: 'Birbank kartları ilə ödəniş şans gətirir',
      buttonText: 'Ətraflı'
    },
    {
      image: '/slider4.png',
      title: 'İndi al, sonra ödə',
      description: 'Trendyolda rahatlıqla alış-veriş et',
      buttonText: 'Alış-veriş et'
    },
    {
      image: '/slider5.png',
      title: 'Nağd kreditin maksimal məbləğini artırdıq!',
      description: '',
      buttonText: 'Sifariş et'
    },
    {
      image: '/slider6.png',
      title: 'Birbank Star',
      description: 'Çətin hesablamalara son qoyun',
      buttonText: 'Ətraflı'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
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
    <div className="slider-container">
      <div
        className="slider-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
                <div className="slide-text">
                  <h2 className="slide-title">{slide.title}</h2>
                  {slide.description && (
                    <p className="slide-description">{slide.description}</p>
                  )}
                  <button className="slide-button">{slide.buttonText}</button>
                </div>
                <div className="slide-image">
                  <img className='slide-image-img' src={slide.image} alt={slide.title} />
                  <div className='slider-btn-container'>
                    <button className="slider-btn prev-btn" onClick={goToPrev} aria-label="Previous slide">
                      <HiOutlineChevronLeft size={24} />
                    </button>
                    <button className="slider-btn next-btn" onClick={goToNext} aria-label="Next slide">
                      <HiOutlineChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
        <button className="slider-btn prev-btn slider-btn-mobile" onClick={goToPrev} aria-label="Previous slide">
          <HiOutlineChevronLeft size={24} />
        </button>
        <button className="slider-btn next-btn slider-btn-mobile" onClick={goToNext} aria-label="Next slide">
          <HiOutlineChevronRight size={24} />
        </button>

        {/* Navigation Arrows */}
        
      </div>
    </div>
  );
};

export default Slider;

