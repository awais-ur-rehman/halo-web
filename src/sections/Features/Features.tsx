import { Globe, BarChart2, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <Globe size={36} className="text-black" />, // Globe/Network
    title: 'Nationwide Branch Intelligence',
    description:
      'Monitor customer experience performance across your entire branch network in real-time. Get granular insights for every location, service, and customer touchpoint.',
  },
  {
    icon: <BarChart2 size={36} className="text-black" />, // Analytics/Chart
    title: 'Strategic Intelligence Platform',
    description:
      'Convert scattered complaints and feedback into strategic insights. Make data-driven decisions that improve customer retention and reduce operational inefficiencies.',
  },
  {
    icon: <Target size={36} className="text-black" />, // Target/Precision
    title: 'Competitive Market Analysis',
    description:
      'Track competitor performance in your catchment areas. Identify service gaps, capitalize on weaknesses, and defend market share with precision targeting.',
  },
  {
    icon: <Zap size={36} className="text-black" />, // Lightning/Speed
    title: 'Proactive Risk Management',
    description:
      'Predict and prevent issues before they escalate to regulatory scrutiny or viral social media crises. Transform reactive management into proactive leadership.',
  },
];

const trustIndicators = [
  'First-of-its-kind platform in Pakistan',
  'Purpose-built for multi-branch banking operations',
  'AI-powered geo-listening technology',
];

const Features = () => (
  <section className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-50/40 to-white pt-0 pb-16 px-2">
    <div className="relative w-full max-w-[98vw] rounded-[40px] bg-gradient-to-br from-blue-50/60 via-white to-blue-100/40 border border-gray-100 px-2 md:px-12 py-16 mx-auto overflow-hidden flex flex-col items-center min-h-[320px]">
      {/* Top semi-circle and Keep Scrolling (inside container) */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-64 h-32 overflow-hidden flex justify-center z-20 rotate-180">
        <svg width="100%" height="100%" viewBox="0 0 512 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M0 256C0 114.615 114.615 0 256 0C397.385 0 512 114.615 512 256" stroke="#E5EAF2" strokeWidth="2" />
            <path d="M-32 256C-32 82.615 82.615 -32 256 -32C429.385 -32 544 82.615 544 256" stroke="#E5EAF2" strokeWidth="1.5" opacity="0.5" />
            <path d="M-64 256C-64 50.615 50.615 -64 256 -64C561.385 -64 676 50.615 676 256" stroke="#E5EAF2" strokeWidth="1" opacity="0.3" />
          </g>
        </svg>
      </div>
      <div className="absolute left-1/2 top-8 -translate-x-1/2 flex flex-col items-center z-30">
        <span className="text-gray-400 text-sm flex items-center gap-1"><span className="inline-block w-4 h-4"><svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 2v12M8 14l3-3M8 14l-3-3" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Keep Scrolling</span>
      </div>
      {/* Main Heading and Subtitle */}
      <div className="flex flex-col items-center justify-center z-10 pt-20 pb-8 px-2 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-4">What is HAL0?</h2>
        <h3 className="text-lg md:text-2xl font-semibold text-center text-gray-800 mb-2">Pakistan's First AI-Powered Geo-Intelligence Platform for the Banking Sector</h3>
        <p className="text-center text-gray-700 text-lg max-w-2xl mb-8">
          Transform scattered customer voices into strategic advantage. HAL0 provides complete visibility across your entire branch network, turning feedback into competitive intelligence and complaints into actionable insights.
        </p>
      </div>
      {/* Feature Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-2">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-2xl border border-black/10 p-8 min-w-[260px] transition-transform duration-200 hover:-translate-y-2 group"
          >
            <span className="mb-4 group-hover:scale-110 transition-transform duration-200 text-black">
              {f.icon}
            </span>
            <h4 className="text-lg font-bold text-black mb-2 text-center">{f.title}</h4>
            <p className="text-gray-700 text-center text-base">{f.description}</p>
          </div>
        ))}
      </div>
      {/* Trust Indicators */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {trustIndicators.map((t, i) => (
            <span key={i} className="inline-block bg-gray-100 text-gray-800 text-xs font-medium rounded-full px-4 py-2 border border-gray-200">
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className="flex flex-col items-center mt-2">
        <span className="text-lg font-semibold text-black mb-2">Ready to transform your banking intelligence?</span>
        <button className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3 rounded-full shadow transition-all duration-200 text-base">Get Started</button>
      </div>
    </div>
  </section>
);

export default Features; 