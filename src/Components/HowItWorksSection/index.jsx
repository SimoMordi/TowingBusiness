import './index.css';

const HowItWorksSection = () => {

  return (
    <div className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>

      <div className="steps-container">

        <div className="step">
          <span className="step-number one">1</span>
          <h3 className="step-title">Find and order help</h3>
          <p>Contact us to tell us your problem, pinpoint your location, and securely pay.</p>
        </div>

        <div className="step">
          <span className="step-number two">2</span>
          <h3 className="step-title">Professional arrives</h3>
          <p>One of our approved roadside professionals arrives quickly to expertly solve your problem.</p>
        </div>

        <div className="step">
          <span className="step-number three">3</span>
          <h3 className="step-title">Get back on the road</h3>
          <p>The small speed bump in your day is now in the rearview, and you can get back to your life.</p>
        </div>
        
      </div>
    </div>
  );
};

export default HowItWorksSection;
