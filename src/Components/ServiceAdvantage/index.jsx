
import './index.css';
import ClockImage from '../../assets/Clock2.png'; 

const ServiceAdvantage = () => {

  return (
    <div className="service-advantage-section">
      <div className="service-advantage-image">
        <img src={ClockImage} alt="Clock representing quick ETA" />
      </div>
      <div className="service-advantage-content">
        <h2>30-45 minute ETAs. 24/7 service.</h2>
        <p>Service vehicles arrive quickly to expertly solve the problem and get you back on the road fast. Stay in the know, estimated time of arrival, receive updates and even rate your level of service.</p>
      </div>
    </div>
  );
};

export default ServiceAdvantage;
