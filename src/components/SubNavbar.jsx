import './SubNavbar.css';

const SubNavbar = () => {
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

  return (
    <nav className="sub-navbar">
      <div className="sub-navbar-container">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="sub-nav-link">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SubNavbar;

