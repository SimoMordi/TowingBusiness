


import CarCareSection from '../../Components/CarCareSection';
import Footer from '../../Components/Footer';
import HeroSection from '../../Components/HeroSection';
import HowItWorksSection from '../../Components/HowItWorksSection';
import PricingSection from '../../Components/PricingSection';
import ServiceAdvantage from '../../Components/ServiceAdvantage';
import ServicesSection from '../../Components/ServicesSection';
import './index.css';

function MainPage() {
  return (
    <div className="main-page">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ServiceAdvantage />
      <HowItWorksSection />
      <CarCareSection />
      <Footer />
    </div>
  );
}

export default MainPage;
