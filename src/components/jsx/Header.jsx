import { useState, useRef, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import '../css/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('fiziki');
    const [expandedItem, setExpandedItem] = useState(null);
    const [activeLang, setActiveLang] = useState('AZ');

    const menuData = {
        'KARTLAR': {
            hasDropdown: true,
            allLink: 'Bütün kartlar',
            links: [
                'Birbank kartları',
                'Premium kartlar',
                'TələbəPlus',
                'Təhlükəsizlik qaydaları',
                '3D secure',
                'Kart sifarişi',
                'Birbank kartının eyniləşdirilməsi'
            ],
            promo: {
                title: 'Birbank Star',
                description: '30 000 ₼-dək kredit xətti, limitsiz nağdlaşdırma və köçürmə imkanı, partnyorlardan keşbek və QR ödənişlərdə 2 qat ƏDV kimi çoxsaylı üstünlükləri olan, sadə və unikal bir kartdır.',
                buttonText: 'Bir kliklə sifariş et',
                image: '/birbank-star-home.png'
            }
        },
        'KREDİTLƏR': {
            hasDropdown: true,
            allLink: 'Bütün kreditlər',
            links: [
                'Nağd pul krediti',
                'Mikro Biznes Kreditləri',
                'Sif krediti',
                'AKİA kreditləri',
                'Avtomobil krediti',
                'Əmanət təminatlı kredit'
            ],
            promo: {
                title: 'Nağd pul krediti',
                subtitle: '50000 AZN dək Nağd pul krediti',
                buttonText: 'Bir kliklə sifariş et',
                image: '/money.png'
            }
        },
        'İPOTEKALAR': {
            hasDropdown: false
        },
        'ƏMANƏTLƏR': {
            hasDropdown: true,
            allLink: 'Bütün depozitlər',
            links: [
                'Depozit',
                'Yığım hesabı',
                'Müddətsiz depozit',
                'Depozit seyfləri'
            ],
            promo: {
                title: 'Depozit',
                description: 'Yüksək faizlər əldə etməklə yanaşı, siz müqavilənin bitmə tarixinə 1 ay (30 təqvim günü) qalanadək depozit məbləğini artıra bilərsiniz.',
                buttonText: 'Daha ətraflı',
                image: '/depozit-2.png'
            }
        },
        'İSTİQRAZ': {
            hasDropdown: false
        },
        'PUL KÖÇÜRMƏLƏRİ': {
            hasDropdown: true,
            header: 'Birbank ilə istənilən karta pul köçürün!',
            allLink: 'Bütün pul köçürmələri',
            links: [
                'Xəzri',
                'Zolotaya Korona',
                'Western Union'
            ],
            promo: {
                title: 'Birbank',
                description: 'Birbankla istənilən karta pul köçürün! Artıq Birbankla telefonunuzdan istənilən bank kartına asanlıqla pul göndərə bilərsiniz.',
                buttonText: 'Daha ətraflı',
                icon: '/kart.svg',
                isCircleIcon: true
            }
        },
        'ONLAYN XİDMƏTLƏR': {
            hasDropdown: true,
            allLink: 'Bütün online xidmətlər',
            links: [
                'Kart sifarişi',
                'Kredit sifarişi',
                'Onlayn növbə',
                'Arayış və çıxarışların alınması'
            ],
            promo: {
                title: 'Birbank Cashback',
                description: '2 qat ƏDV, şəxsi vəsaitdən pulsuz köçürmə, 30%-dək keşbek, taksit kartı kimi istifadə isə əlavə olaraq 24 ayadək faizsiz taksit və 63 günədək güzəşt müddəti qazandıran unikal bir kartdır.',
                buttonText: 'Bir kliklə sifariş et',
                image: '/birbank-cashback-home.png'
            }
        },
        'KAMPANİYALAR': {
            hasDropdown: false
        },
        'FƏRDİ BANKÇILIQ': {
            hasDropdown: false
        }
    };

    const menuItems = [
        'KARTLAR',
        'KREDİTLƏR',
        'İPOTEKALAR',
        'ƏMANƏTLƏR',
        'İSTİQRAZ',
        'PUL KÖÇÜRMƏLƏRİ',
        'ONLAYN XİDMƏTLƏR',
        'KAMPANİYALAR',
        'FƏRDİ BANKÇILIQ'
    ];

    const bottomLinks = [
        'Bank haqqında',
        'İnsan resursları',
        'Xidmət şəbəkəsi',
        'Birbank',
        'Xəbərlər',
        'Siğortalar',
        'Təklif və şikayətlər'
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setExpandedItem(null);
        }
    };

    const toggleExpand = (item) => {
        if (menuData[item]?.hasDropdown) {
            setExpandedItem(expandedItem === item ? null : item);
        }
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const renderDropdownContent = (item) => {
        const data = menuData[item];
        if (!data || !data.hasDropdown) return null;

        return (
            <div className={`mobile-dropdown-content ${expandedItem === item ? 'expanded' : ''}`}>
                {data.header && (
                    <p className="mobile-dropdown-header">{data.header}</p>
                )}
                {data.allLink && (
                    <a href="#" className="mobile-dropdown-link bold">{data.allLink}</a>
                )}
                {data.links.map((link, idx) => (
                    <a href="#" key={idx} className="mobile-dropdown-link">{link}</a>
                ))}
                {data.promo && (
                    <div className="mobile-promo-card">
                        <div className="mobile-promo-image">
                            {data.promo.isCircleIcon ? (
                                <div className="mobile-promo-circle">
                                    <img src={data.promo.icon} alt={data.promo.title} />
                                </div>
                            ) : (
                                <img src={data.promo.image} alt={data.promo.title} />
                            )}
                        </div>
                        <div className="mobile-promo-text">
                            <h4 className="mobile-promo-title">{data.promo.title}</h4>
                            {data.promo.subtitle && (
                                <p className="mobile-promo-subtitle">{data.promo.subtitle}</p>
                            )}
                            {data.promo.description && (
                                <p className="mobile-promo-desc">{data.promo.description}</p>
                            )}
                            <button className="mobile-promo-btn">{data.promo.buttonText}</button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

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

                    {/* Mobile Menu Button */}
                    <button 
                        className="mobile-menu-button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {/* Mobile Menu Header */}
                <div className="mobile-menu-header">
                    <div className="mobile-menu-top">
                        
                        <div className="mobile-lang-switcher">
                            {['AZ', 'EN', 'RU'].map((lang) => (
                                <button
                                    key={lang}
                                    className={`mobile-lang-btn ${activeLang === lang ? 'active' : ''}`}
                                    onClick={() => setActiveLang(lang)}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                        <div className="mobile-menu-actions">
                            <button className="mobile-action-btn">
                                <HiOutlineSearch size={20} />
                            </button>
                            <button className="mobile-action-btn close" onClick={toggleMenu}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Fiziki / Biznes Tabs */}
                    <div className="mobile-tabs">
                        <button 
                            className={`mobile-tab ${activeTab === 'fiziki' ? 'active' : ''}`}
                            onClick={() => setActiveTab('fiziki')}
                        >
                            Fiziki
                        </button>
                        <button 
                            className={`mobile-tab ${activeTab === 'biznes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('biznes')}
                        >
                            Biznes
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                <div className="mobile-menu-content">
                    <div className="mobile-menu-items">
                        {menuItems.map((item, index) => (
                            <div key={index} className="mobile-menu-item">
                                <div 
                                    className={`mobile-menu-item-header ${expandedItem === item ? 'expanded' : ''}`}
                                    onClick={() => toggleExpand(item)}
                                >
                                    {menuData[item]?.hasDropdown && (
                                        <span className="mobile-menu-icon">
                                            {expandedItem === item ? (
                                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
                                                    <path d="M0 1h16" stroke="#EF3E42" strokeWidth="2"/>
                                                </svg>
                                            ) : (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8 0v16M0 8h16" stroke="#333" strokeWidth="2"/>
                                                </svg>
                                            )}
                                        </span>
                                    )}
                                    <span className="mobile-menu-text">{item}</span>
                                </div>
                                {renderDropdownContent(item)}
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="mobile-menu-divider"></div>

                    {/* Bottom Links */}
                    <div className="mobile-bottom-links">
                        {bottomLinks.map((link, index) => (
                            <a href="#" key={index} className="mobile-bottom-link">{link}</a>
                        ))}
                    </div>
                </div>

                {/* Corner Logo */}
               
            </div>
        </>
    );
};

export default Header;
