import React from 'react';

// Define a type for the card data
interface Card {
  title: string;
  items: string[];
  isCenter?: boolean;
  centerText?: string;
}

type CardRow = Card[];

// Restore the previous grid structure, but move RESOLUTION to the rightmost column (middle row)
const cardData: CardRow[] = [
  // Top row
  [
    {
      title: 'OPERATIONS',
      items: [
        'Wait times',
        'Branch hours',
        'Counter Operations',
        'Process efficiency',
      ],
    },
    {
      title: 'FACILITY',
      items: [
        'Cleanliness',
        'Comfort',
        'Space adequacy',
        'Accessibility',
      ],
    },
    {
      title: 'SAFETY',
      items: [
        'Security measures',
        'Covid protocols',
        'Safety concerns',
      ],
    },
    {
      title: 'SERVICES',
      items: [
        'Account services',
        'Cash deposit',
        'Cash withdrawal',
        'Fund transfer',
        'Remittances',
        'Loan services',
        'Investment services',
        'Card services',
      ],
    },
    {
      title: 'TECHNOLOGY',
      items: [
        'ATM availability',
        'Digital services',
        'System downtime',
        'Internet connectivity',
      ],
    },
    {
      title: 'CX',
      items: [
        'First impression',
        'Overall satisfaction',
        'Recommendation likelihood',
        'Long term customer?',
        'Switching intent',
        'Brand advocacy',
        'Repeat visit intent',
      ],
    },
  ],
  // Middle row
  [
    {
      title: 'STAFF',
      items: [
        'Courtesy',
        'Professionalism',
        'Competence',
        'Helpfulness',
        'Responsiveness',
        'Availability',
      ],
    },
    {
      title: '',
      items: [],
      isCenter: true,
      centerText: 'MAKE THE MOST OUT OF EVERY CUSTOMER EXPERIENCE',
    },
    {
      title: 'RESOLUTION',
      items: [
        'Issues reported',
        'Resolution mentioned?',
        'Resolution satisfaction',
        'Resolution time',
        'Escalation mentioned?',
        'Follow up mentioned?',
      ],
    },
  ],
  // Bottom row
  [
    {
      title: 'MANAGEMENT',
      items: [
        'Management mentioned?',
        'Management rating',
        'Management severity',
        'Leadership quality',
        'Problem Resolution',
        'Staff management',
        'Specific mentions',
      ],
    },
    {
      title: 'SENTIMENT',
      items: [
        'Overall sentiment',
        'Sentiment score',
        'Emotional intensity',
        'Dominant emotion',
        'Sentiment confidence',
      ],
    },
    {
      title: 'REVIEW',
      items: [
        'Review date',
        'Review message',
        'Google rating',
        'Contains profanity',
        'Review authenticity',
        'Review type',
        'Business Criticality',
        'Escalation needed?',
      ],
    },
    {
      title: 'INSIGHTS',
      items: [
        'Immediate actions needed',
        'Medium actions needed',
        'Long term changes',
        'Priority level',
        'Estimated effort',
        'Potential impact',
        'Overall branch score',
        'Urgency score',
      ],
    },
    {
      title: 'COMPARISON',
      items: [
        'Other branches mentioned?',
        'Competitors mentioned?',
        'Positive comparison',
        'Negative comparison',
        'Specific services comparison',
      ],
    },
    {
      title: 'RISK N IMPACT',
      items: [
        'Customer retention risk',
        'Reputation impact',
        'Positive word of mouth',
        'Negative word of mouth',
        'Social sharing intent',
        'Staff training needed?',
        'Management intervention needed?',
      ],
    },
  ],
];

const cardBase =
  'bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex flex-col items-center min-w-[180px] max-w-[220px]';
const cardTitle = 'text-black font-extrabold text-lg mb-2 text-center';
const cardItem = 'text-gray-700 text-sm text-center';
const centerText =
  'text-black font-extrabold text-3xl md:text-4xl text-center px-2 py-8';

const CustomerExperienceFramework = () => (
  <section className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 to-90% pt-8 pb-8 px-2">
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
      {/* Top Row */}
      <div className="grid grid-cols-6 gap-4">
        {cardData[0].map((card, i) => (
          <div key={i} className={cardBase}>
            <div className={cardTitle}>{card.title}</div>
            <ul className="flex flex-col gap-1">
              {card.items.map((item, idx) => (
                <li key={idx} className={cardItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Middle Row */}
      <div className="grid grid-cols-6 gap-4 items-center">
        {/* Staff */}
        <div className={cardBase}>
          <div className={cardTitle}>{cardData[1][0].title}</div>
          <ul className="flex flex-col gap-1">
            {cardData[1][0].items.map((item, idx) => (
              <li key={idx} className={cardItem}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Center Text (spans 4 columns) */}
        <div className="col-span-4 flex flex-col items-center justify-center min-h-[220px]">
          {cardData[1][1].isCenter && cardData[1][1].centerText && (
            <div className={centerText}>{cardData[1][1].centerText}</div>
          )}
        </div>
        {/* Resolution moved to rightmost column */}
        <div className={cardBase}>
          <div className={cardTitle}>{cardData[1][2].title}</div>
          <ul className="flex flex-col gap-1">
            {cardData[1][2].items.map((item, idx) => (
              <li key={idx} className={cardItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="grid grid-cols-6 gap-4">
        {cardData[2].map((card, i) => (
          <div key={i} className={cardBase}>
            <div className={cardTitle}>{card.title}</div>
            <ul className="flex flex-col gap-1">
              {card.items.map((item, idx) => (
                <li key={idx} className={cardItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerExperienceFramework; 