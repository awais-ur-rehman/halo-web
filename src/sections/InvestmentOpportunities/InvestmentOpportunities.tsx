import React, { useState } from 'react';
import { Building2, XCircle, Briefcase, RefreshCcw, HeartCrack, Banknote, Smartphone, Clock, FileText } from 'lucide-react';

const painPoints = [
  {
    location: 'ISL',
    customer: 'Owais Siddqui',
    branch: 'F-11 Branch, Islamabad',
    category: 'Staff Behavior',
    complaint: 'Worst branch experience ever! The branch manager is incredibly rude and doesn\'t understand basic customer service principles. Instead of helping customers, they\'re closing accounts without proper notice.',
    impact: <XCircle className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: 'Account Closure - Lost Customer',
    time: '3 months ago',
  },
  {
    location: 'LHR',
    customer: 'Muhammad Ali',
    branch: 'Gulberg Branch, Lahore',
    category: 'Process Inefficiency',
    complaint: 'Visited twice to open business account. First: \'Apply online.\' System didn\'t work. Second: \'Staff unavailable, come back in 3 days.\' Meanwhile, premium accounts get instant service.',
    impact: <Briefcase className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: 'Lost Business Customer',
    time: '4 days ago',
  },
  {
    location: 'KHI',
    customer: 'Nasir Mehmood',
    branch: 'Rizvia Society, Karachi',
    category: 'Operational Issues',
    complaint: 'Only one counter operating during peak hours. Every single visit they say \'system is down.\' Hours of waiting just to hear the same excuse repeatedly.',
    impact: <RefreshCcw className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: 'Customer Switching Intent',
    time: '1 week ago',
  },
  {
    location: 'FSD',
    customer: 'Muhammad Abu Bakr',
    branch: 'Madina Town, Faisalabad',
    category: 'Account Access',
    complaint: 'Staff was extremely rude, claimed my 8-year-old account was closed. Demanded 5,000 rupees deposit and 20-day processing time for account reactivation.',
    impact: <HeartCrack className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: '8-Year Customer Lost',
    time: '3 months ago',
  },
  {
    location: 'ISL',
    customer: 'Sarah Ahmed',
    branch: 'DHA Branch, Islamabad',
    category: 'Loan Processing',
    complaint: 'Three separate visits for loan application. Each time different requirements. No coordination between departments. Competitor processed everything in single visit.',
    impact: <Banknote className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: 'Lost to Competitor',
    time: '2 weeks ago',
  },
  {
    location: 'LHR',
    customer: 'Ahmed Hassan',
    branch: 'Johar Town, Lahore',
    category: 'ATM Service',
    complaint: 'ATM has been out of service for three weeks. Branch staff says \'not our department\'s responsibility.\' Competitor\'s ATM next door works perfectly.',
    impact: <Smartphone className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: 'Digital Migration Risk',
    time: '1 month ago',
  },
  {
    location: 'KHI',
    customer: 'Fatima Khan',
    branch: 'Clifton Branch, Karachi',
    category: 'Wait Times',
    complaint: 'Two-hour wait for simple cash deposit. Staff members chatting while long customer queue builds up. Considering switching to digital-only banking.',
    impact: <Clock className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: 'Service Quality Issues',
    time: '2 weeks ago',
  },
  {
    location: 'RWP',
    customer: 'Hassan Malik',
    branch: 'Saddar Branch, Rawalpindi',
    category: 'Documentation',
    complaint: 'Same documents verified four times by different staff members. Complete lack of internal system coordination. Entire day wasted for 5-minute transaction.',
    impact: <FileText className="w-5 h-5 inline-block mr-1 text-red-600" />,
    impactText: 'Process Failure',
    time: '3 weeks ago',
  },
];

const categoryColors = {
  'Staff Behavior': 'bg-gray-200 text-gray-800',
  'Process Inefficiency': 'bg-gray-100 text-gray-700',
  'Operational Issues': 'bg-gray-100 text-gray-700',
  'Account Access': 'bg-gray-200 text-gray-800',
  'Loan Processing': 'bg-gray-100 text-gray-700',
  'ATM Service': 'bg-gray-200 text-gray-800',
  'Wait Times': 'bg-gray-100 text-gray-700',
  'Documentation': 'bg-gray-200 text-gray-800',
};

const InvestmentOpportunities = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Discover Real Customer Pain Points Across Pakistan's Banking Network</h2>
        <p className="text-lg text-gray-700 mb-2">Every day, thousands of banking customers share their experiences online. These voices reveal critical insights that drive business outcomes - insights most banks never capture or act upon.</p>
      </div>
      {/* Stacked Deck of Cards */}
      <div
        className="relative w-full flex flex-col items-center justify-center min-h-[500px] mb-12"
        style={{ height: '400px' }}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {painPoints.map((p, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={i}
              className={`pain-point-card absolute gap-8 top-1/2 transition-all duration-400 group p-8`}
              style={{
                transform: isHovered
                  ? `translate(-50%, -50%) translateY(${i * 10 - 20}px) translateX(${i * 10 + 10}px) scale(1.08) rotate(2deg)`
                  : `translate(-50%, -50%) translateY(${i * 20}px) translateX(${i * 60}px) scale(1)`,
                minWidth: 340,
                maxWidth: 360,
                boxShadow: isHovered
                  ? '0 12px 48px 0 rgba(0,0,0,0.18), 0 0 0 2px rgba(0,0,0,0.08)'
                  : '0 4px 24px 0 rgba(0,0,0,0.10)',
                borderRadius: 24,
                background: '#fff',
                border: '1.5px solid #E9ECEF',
                zIndex: isHovered ? 99 : i + 1,
                transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s, opacity 0.4s',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Location Badge */}
              <span className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold rounded-full px-3 py-1 shadow-sm flex items-center gap-1"><Building2 className="w-4 h-4 mr-1" />{p.location}</span>
              {/* Customer Info */}
              <div className="mb-2">
                <span className="text-base font-bold text-black">{p.customer}</span>
                <span className="block text-sm text-gray-500">{p.branch}</span>
              </div>
              {/* Issue Category */}
              <span className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[p.category as keyof typeof categoryColors]}`}>{p.category}</span>
              {/* Complaint Text */}
              <blockquote className="italic text-[15px] text-black border-l-4 border-gray-200 pl-3 mb-2">“{p.complaint}”</blockquote>
              {/* Business Impact */}
              <span className={`block font-semibold mt-2 mb-1 text-red-600 flex items-center`}>{p.impact}{p.impactText}</span>
              {/* Timestamp */}
              <span className="text-xs text-gray-400 mt-auto">{p.time}</span>
            </div>
          );
        })}
      </div>
      {/* Bottom CTA Section */}
      <div className="flex flex-col items-center gap-4 mt-8 animate-fade-in-up">
        <h3 className="text-xl md:text-2xl font-bold text-black">These Are Just 8 Stories from Thousands Shared Daily</h3>
        <p className="text-gray-700 text-center max-w-xl">HAL0 captures, analyzes, and transforms every customer voice into actionable intelligence for your entire branch network.</p>
        <div className="flex gap-4 mt-2">
          <button className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3 rounded-full shadow transition-all duration-200 text-base">See HAL0 Analytics Dashboard</button>
          <button className="border border-black text-black font-bold px-8 py-3 rounded-full shadow-sm transition-all duration-200 text-base bg-white hover:bg-gray-100">Schedule Demo Call</button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities; 