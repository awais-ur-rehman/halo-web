import Hero from '../sections/Hero/Hero';
import Features from '../sections/Features/Features';
import InvestmentOpportunities from '../sections/InvestmentOpportunities/InvestmentOpportunities';
import HowItWorks from '../sections/HowItWorks';
import Pricing from '../sections/Pricing/Pricing';
import Hiring from '../sections/Hiring/Hiring';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className="pt-20"> {/* Add top padding to offset fixed navbar */}
      <Hero />
      <Features />
      <InvestmentOpportunities />
      <HowItWorks />
      <Pricing />
    </div>
  </>
);

export default Home; 