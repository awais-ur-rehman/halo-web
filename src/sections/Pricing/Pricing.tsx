import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 0,
    priceSuffix: '/month',
    description: 'Ideal for pilot projects or small banks. Get started with essential geo-listening and basic analytics.',
    features: [
      'Branch-level geo-listening',
      'Basic sentiment analytics',
      'Monthly executive summary',
      'Email support',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: 299,
    priceSuffix: '/month',
    description: 'For growing banks and regional networks. Unlock advanced analytics, alerts, and competitive benchmarking.',
    features: [
      'Everything in Starter',
      'Real-time alerts & escalation prediction',
      'Competitor branch intelligence',
      'Branch performance benchmarking',
      'Customizable dashboards',
      'Priority support',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceSuffix: '',
    description: 'For national banks and large financial institutions. Full platform access, integrations, and dedicated support.',
    features: [
      'Everything in Professional',
      'API & data integrations',
      'Dedicated account manager',
      'On-premise deployment option',
      'Enterprise SLAs & compliance',
      'Custom onboarding & training',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Choose <span className="text-blue-700">The Plan</span> That’s Right For Your Bank</h2>
        <p className="text-lg text-gray-700">Flexible pricing for banks of all sizes. Start with a pilot or scale nationwide.</p>
      </div>
      {/* Billing Toggle (UI only) */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          className={`px-4 py-2 rounded-full font-semibold border transition ${billing === 'monthly' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'}`}
          onClick={() => setBilling('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-full font-semibold border transition ${billing === 'annually' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'}`}
          onClick={() => setBilling('annually')}
        >
          Annually
        </button>
      </div>
      {/* Pricing Cards */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, _idx) => (
          <div
            key={plan.name}
            className={`flex-1 bg-white rounded-2xl border ${plan.highlight ? 'border-blue-700 shadow-lg' : 'border-gray-200'} p-8 flex flex-col min-w-[260px] max-w-[370px] transition-transform duration-200 hover:-translate-y-2 relative`}
            style={{ zIndex: plan.highlight ? 10 : 1 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg font-bold text-black">{plan.name}</span>
              {plan.highlight && <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Most Popular</span>}
            </div>
            <div className="mb-2 text-3xl font-extrabold text-black flex items-end gap-1">
              {typeof plan.price === 'number' ? (
                <>
                  ${billing === 'annually' ? (plan.price * 12 * 0.85).toFixed(0) : plan.price}
                  <span className="text-base font-medium text-gray-500">{plan.priceSuffix}{billing === 'annually' && plan.price !== 0 && ' (billed yearly, 15% off)'}</span>
                </>
              ) : (
                <span>Custom</span>
              )}
            </div>
            <div className="mb-4 text-gray-600 text-sm min-h-[48px]">{plan.description}</div>
            <ul className="mb-6 flex-1 flex flex-col gap-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-800 text-base">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-700" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`mt-auto px-6 py-3 rounded-full font-bold text-base transition shadow ${plan.highlight ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white border border-gray-300 text-black hover:bg-gray-100'}`}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing; 