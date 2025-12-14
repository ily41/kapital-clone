import { useState, useRef, useEffect } from 'react';
import '../css/SubNavbar.css';

const SubNavbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [dropdownTop, setDropdownTop] = useState(0);
    const navRef = useRef(null);
    const timeoutRef = useRef(null);

    const menuData = {
        'KARTLAR': {
            leftColumn: [
                'Birbank kartları',
                'Premium kartlar',
                'TələbəPlus',
                'Təhlükəsizlik qaydaları'
            ],
            rightColumn: [
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
            leftColumn: [
                'Nağd pul krediti',
                'Mikro Biznes Kreditləri',
                'Sif krediti',
                'AKİA kreditləri'
            ],
            rightColumn: [
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
        'ƏMANƏTLƏR': {
            leftColumn: [
                'Depozit',
                'Yığım hesabı',
                'Müddətsiz depozit',
                'Depozit seyfləri'
            ],
            rightColumn: [],
            promo: {
                title: 'Depozit',
                description: 'Yüksək faizlər əldə etməklə yanaşı, siz müqavilənin bitmə tarixinə 1 ay (30 təqvim günü) qalanadək depozit məbləğini artıra bilərsiniz.',
                buttonText: 'Daha ətraflı',
                image: '/depozit-2.png'
            }
        },
        'PUL KÖÇÜRMƏLƏRİ': {
            header: 'Birbank ilə istənilən karta pul köçürün!',
            leftColumn: [
                'Xəzri',
                'Zolotaya Korona',
                'Western Union'
            ],
            rightColumn: [],
            promo: {
                title: 'Birbank',
                description: 'Birbankla istənilən karta pul köçürün! Artıq Birbankla telefonunuzdan istənilən bank kartına asanlıqla pul göndərə bilərsiniz.',
                buttonText: 'Daha ətraflı',
                icon: '/kart.svg',
                isCircleIcon: true
            }
        },
        'ONLAYN XİDMƏTLƏR': {
            leftColumn: [
                'Kart sifarişi',
                'Kredit sifarişi',
                'Onlayn növbə',
                'Arayış və çıxarışların alınması'
            ],
            rightColumn: [],
            promo: {
                title: 'Birbank Cashback',
                description: '2 qat ƏDV, şəxsi vəsaitdən pulsuz köçürmə, 30%-dək keşbek, taksit kartı kimi istifadə isə əlavə olaraq 24 ayadək faizsiz taksit və 63 günədək güzəşt müddəti qazandıran unikal bir kartdır.',
                buttonText: 'Bir kliklə sifariş et',
                image: '/birbank-cashback-home.png'
            }
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

    useEffect(() => {
        if (navRef.current && activeDropdown) {
            const rect = navRef.current.getBoundingClientRect();
            setDropdownTop(rect.bottom);
        }
    }, [activeDropdown]);

    const handleMouseEnter = (item) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (menuData[item]) {
            setActiveDropdown(item);
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 100);
    };

    const handleDropdownEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    const renderDropdown = () => {
        const data = menuData[activeDropdown];
        if (!data) return null;

        return (
            <div 
                className="dropdown-menu"
                style={{ top: dropdownTop }}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
            >
                <div className="dropdown-content">
                    <div className="dropdown-links">
                        {data.header && (
                            <p className="dropdown-header">{data.header}</p>
                        )}
                        <div className="dropdown-columns">
                            {data.leftColumn && data.leftColumn.length > 0 && (
                                <ul className="dropdown-column">
                                    {data.leftColumn.map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {data.rightColumn && data.rightColumn.length > 0 && (
                                <ul className="dropdown-column">
                                    {data.rightColumn.map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {data.promo && (
                        <div className="dropdown-promo">
                            <div className="promo-text">
                                <h3 className="promo-title">{data.promo.title}</h3>
                                {data.promo.subtitle && (
                                    <p className="promo-subtitle">{data.promo.subtitle}</p>
                                )}
                                {data.promo.description && (
                                    <p className="promo-description">{data.promo.description}</p>
                                )}
                                <button className="promo-button">{data.promo.buttonText}</button>
                            </div>
                            <div className="promo-image">
                                {data.promo.isCircleIcon ? (
                                    <div className="promo-circle-icon">
                                        <img src={data.promo.icon} alt={data.promo.title} />
                                    </div>
                                ) : (
                                    <img src={data.promo.image} alt={data.promo.title} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <nav className="sub-navbar" ref={navRef}>
                <div className="sub-navbar-container">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className={`sub-nav-item ${activeDropdown === item ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className={`sub-nav-link ${activeDropdown === item ? 'active' : ''}`}>
                                {item}
                            </a>
                        </div>
                    ))}
                </div>
            </nav>
            {activeDropdown && renderDropdown()}
        </>
    );
};

export default SubNavbar;
