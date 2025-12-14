import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    const footerLinks = {
        kapitalBank: {
            title: 'Kapital Bank',
            links: [
                'Bank haqqında',
                'İnsan resursları',
                'Xidmət şəbəkəsi',
                'Birbank',
                'Xəbərlər',
                'Təklif və şikayətlər',
                'Ekosistem'
            ]
        },
        mehsullar: {
            title: 'Məhsullar',
            links: [
                'Kartlar',
                'Kreditlər',
                'Depozitlər',
                'Sığorta',
                'Pul köçürmələri',
                'Fərdi bankçılıq',
                'Onlayn xidmətlər'
            ]
        },
        cevikKecidler: {
            title: 'Çevik keçidlər',
            links: [
                'Birbank kartı sifariş et',
                'Kredit sifariş et',
                'Debet kart sifariş et'
            ]
        },
        diger: {
            title: 'Digər',
            links: [
                'Onlayn növbə',
                'Tariflər və məlumatlar',
                'İnfokiosk',
                'Bloqlar',
                'Kiberhücumlardan necə qorunmalı?'
            ]
        }
    };

    return (
        <footer className="footer">
            {/* Top red line */}
            <div className="footer-top-line"></div>
            
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Links Columns */}
                    <div className="footer-links">
                        {/* Kapital Bank Column */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">{footerLinks.kapitalBank.title}</h4>
                            <ul className="footer-column-list">
                                {footerLinks.kapitalBank.links.map((link, index) => (
                                    <li key={index}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Məhsullar Column */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">{footerLinks.mehsullar.title}</h4>
                            <ul className="footer-column-list">
                                {footerLinks.mehsullar.links.map((link, index) => (
                                    <li key={index}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Çevik keçidlər Column */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">{footerLinks.cevikKecidler.title}</h4>
                            <ul className="footer-column-list">
                                {footerLinks.cevikKecidler.links.map((link, index) => (
                                    <li key={index}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Digər Column */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">{footerLinks.diger.title}</h4>
                            <ul className="footer-column-list">
                                {footerLinks.diger.links.map((link, index) => (
                                    <li key={index}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* QR Code & App Downloads */}
                    <div className="footer-app-section">
                        <p className="footer-app-title">
                            Birbank tətbiqini yükləmək üçün<br />QR-kodu oxudun.
                        </p>
                        <div className="footer-qr">
                            <img src="/footer/qr-code.svg" alt="QR Code" />
                        </div>
                        <div className="footer-app-buttons">
                            <a href="#" className="footer-app-btn">
                                <img src="/footer/play-store.svg" alt="Google Play" />
                                <div className="footer-app-btn-text">
                                    <span className="app-store-name">Google Play</span>
                                    <span className="app-store-subtitle">Mobil tətbiqi yüklə</span>
                                </div>
                            </a>
                            <a href="#" className="footer-app-btn">
                                <img src="/footer/app-store.svg" alt="App Store" />
                                <div className="footer-app-btn-text">
                                    <span className="app-store-name">App Store</span>
                                    <span className="app-store-subtitle">Mobil tətbiqi yüklə</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="footer-social">
                    <a href="tel:196" className="footer-phone">
                        <i className="fa fa-phone"></i>
                        <span>196</span>
                    </a>
                    <div className="footer-social-icons">
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="social-icon" aria-label="Twitter">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="social-icon" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" className="social-icon" aria-label="Telegram">
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>© 2025 «Kapital Bank» ASC. Bütün hüquqlar qorunur.</p>
                    </div>
                    <div className="footer-partners">
                        <a href="#" className="partner-logo">
                            <img src="/footer/93817465.png" alt="E-gov" />
                        </a>
                        <a href="#" className="partner-logo">
                            <img src="/footer/aesf-logo.png" alt="AESF" />
                        </a>
                        <a href="#" className="partner-logo">
                            <img src="/footer/info.png" alt="Infobank" />
                        </a>
                        <a href="#" className="partner-logo">
                            <img src="/footer/msp.png" alt="MSP" />
                        </a>
                        <a href="#" className="partner-logo">
                            <img src="/footer/esghub-white.svg" alt="ESG Hub" />
                        </a>
                    </div>
                </div>

                {/* License Text */}
                <div className="footer-license">
                    <p>"Kapital Bank" ASC (Bakı şəh., Nəsimi r-nu, Neftçilər pr. 153) 14 may 2025-ci il tarixli 244 nömrəli Bank Lisenziyası əsasında fəaliyyət göstərir.</p>
                </div>
            </div>

            {/* Fixed Corner Logo */}
            <div className="footer-fixed-logo">
                <img src="/logo-bottom.png" alt="Kapital Bank" />
            </div>
        </footer>
    );
};

export default Footer;

