import './index.css';

const HeroSection = () => (
    <section className="hero-section">
        <div className="hero-content">
            <h1 className="hero-title">Roadside Assistance, Simplified</h1>
            <div className="call-action">
                <span>Call Us: 425 200 9200</span>
            </div>
        </div>
        <div className="service-options">
            <div className="service-option">
                <h2>Vehicle Trouble?</h2>
                <p>Breakdowns hurt. Getting help is easy.</p>
                <button>Get Help</button>
            </div>
            <div className="service-option">
                <h2>Industry Solutions</h2>
                <p>Elevate your Roadside Assistance.</p>
                <button>Learn More</button>
            </div>
        </div>
    </section>
);

export default HeroSection;
