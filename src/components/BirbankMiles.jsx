import './BirbankMiles.css';

const BirbankMiles = () => {
  const features = [
    {
      highlightedValue: '2 AZN = 1 Mil',
      value: 'Millərin toplanması'
    },
    {
      highlightedValue: 'pulsuz',
      value: 'Kartın qiyməti'
    },
    {
      highlightedValue: '63 günədək',
      value: 'Güzəşt müddəti'
    }
  ];

  return (
    <div className="birbank-miles-container">
      <div className="birbank-miles-content">
        {/* Top Section - White Background */}
        <div className="birbank-miles-top">
          <h2 className="birbank-miles-title">Birbank Miles</h2>
          <p className="birbank-miles-description">
            Minimum 2 AZN ödənişlə yerli ödənişlərdə 1 mil, xarici ödənişlərdə isə hər 1 AZN üçün 1 mil qazanın. Partnyorlardan daha çox mil qazanın. Qazanılan millər 2 il müddətində etibarlıdır. Yığılan millərin dəyərini "65 mil = 1 AZN" qaydası ilə hesablayın.
          </p>
        </div>

        {/* Bottom Section - Light Gray Background */}
        <div className="birbank-miles-bottom">
          <div className="birbank-miles-features">
            {features.map((feature, index) => (
              <div key={index} className="birbank-miles-feature">
                <p className="birbank-miles-feature-highlighted">{feature.highlightedValue}</p>
                <p className="birbank-miles-feature-value">{feature.value}</p>
              </div>
            ))}
          </div>
          <button className="birbank-miles-order-btn">Sifariş et</button>
        </div>
      </div>
    </div>
  );
};

export default BirbankMiles;

