import '../css/ServiceCards.css';

const ServiceCards = () => {
  const services = [
    {
      icon: '/kredit.svg',
      text: 'Kredit sifariş et'
    },
    {
      icon: '/kart.svg',
      text: 'Kart sifariş et'
    },
    {
      icon: '/deposit.svg',
      text: 'Depozit sifariş et'
    },
    {
      icon: '/mikro.svg',
      text: 'Mikro kredit sifariş et'
    },
    {
      icon: '/kampaniya.svg',
      text: 'Kampaniyalara bax'
    }
  ];

  return (
    <div className="service-cards-container">
      <div className="service-cards">
        {services.map((service, index) => (
          <a key={index} href="#" className="service-card">
            <div className="service-card-icon">
              <img src={service.icon} alt={service.text} />
            </div>
            <span className="service-card-text">{service.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;

