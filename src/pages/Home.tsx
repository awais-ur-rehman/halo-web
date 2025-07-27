import Hero from '../sections/Hero/Hero';
import Features from '../sections/Features/Features';
import InvestmentOpportunities from '../sections/InvestmentOpportunities/InvestmentOpportunities';
import HowItWorks from '../sections/HowItWorks';
import CustomerExperienceFramework from '../sections/CustomerExperienceFramework';

// import Pricing from '../sections/Pricing/Pricing';

import Navbar from '../components/Navbar';
import ContactForPricing from '../sections/ContactForPricing';

const Home = () => (
  <>
    <Navbar />
    <div className="pt-10"> {/* Add top padding to offset fixed navbar */}
      <Hero />
      <Features />
      <InvestmentOpportunities />
      <HowItWorks />
      <CustomerExperienceFramework />
      <ContactForPricing />

    </div>
  </>
);

export default Home; 