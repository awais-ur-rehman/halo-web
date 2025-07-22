import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Customer Experience Index',
      data: [60, 65, 62, 70, 68, 75, 80],
      borderColor: '#000',
      backgroundColor: 'rgba(0,0,0,0.05)',
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      borderWidth: 2,
      fill: true,
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
  elements: {
    line: { borderWidth: 2 },
    point: { radius: 3, backgroundColor: '#000', borderColor: '#000' },
  },
};

const barData = {
  labels: Array.from({ length: 20 }, (_, i) => i + 1),
  datasets: [
    {
      label: 'Branch Benchmarking',
      data: [2, 2.5, 2.2, 3, 2.8, 3.5, 4, 3.8, 4.2, 4.5, 4.8, 5, 5.2, 5.5, 5.8, 6, 6.2, 6.5, 6.8, 7],
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderRadius: 4,
      barPercentage: 0.7,
      categoryPercentage: 0.7,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Regional Operations Head, ABC Bank',
    rating: 5.0,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'HAL0’s insights helped us reduce customer churn by 18% in just three months. We now address issues before they go viral.'
  },
  {
    name: 'Imran Siddiqui',
    role: 'Branch Manager, DEF Bank',
    rating: 4.8,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'With HAL0, I can benchmark my branch’s performance and motivate my team with real, actionable data.'
  }
];

const HowItWorks = () => (
  <section className="w-full py-20 bg-white flex flex-col items-center">
    <div className="max-w-4xl mx-auto text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Transforming Banking Intelligence for Every Branch, Every Bank</h2>
      <p className="text-lg text-gray-700 mb-2">HAL0 empowers banks of all sizes to unlock real-time, branch-level customer insights, competitive intelligence, and operational risk alerts—across the entire national network.</p>
    </div>
    <div className="w-full max-w-6xl grid grid-rows-2 grid-cols-6 gap-8 px-2">
      {/* First Row */}
      <div className="row-start-1 row-end-2 col-start-1 col-end-5 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm">
        <h3 className="text-xl font-bold text-black mb-2 text-left">Ready to unlock real-time customer intelligence?</h3>
        <p className="text-gray-700 mb-4 text-left">HAL0 gives you instant visibility into every branch’s customer experience, so you can act before issues escalate.</p>
        <div className="w-full h-36 mb-4 flex items-end">
          <div className="w-full" style={{ minWidth: 0 }}>
            <Line data={lineData} options={lineOptions} width={600} height={120} />
          </div>
        </div>
        <button className="mt-2 bg-black hover:bg-gray-900 text-white font-bold px-6 py-2 rounded-full shadow transition-all duration-200 text-base self-start">Get Started</button>
      </div>
      <div className="row-start-1 row-end-2 col-start-5 col-end-7 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm">
        <div className="flex items-center mb-2">
          <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <div className="font-bold text-black text-sm">{testimonials[0].name}</div>
            <div className="text-xs text-gray-500">{testimonials[0].role}</div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-black font-bold text-base">{testimonials[0].rating}</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#E5E7EB" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="14" fill="#000">★</text></svg>
          </div>
        </div>
        <div className="text-gray-700 text-base mb-4">“{testimonials[0].text}”</div>
        <button className="mt-auto bg-white border border-gray-300 hover:bg-gray-100 text-black font-bold px-6 py-2 rounded-full shadow-sm transition-all duration-200 text-base self-start">Show Case Review</button>
      </div>
      {/* Second Row */}
      <div className="row-start-2 row-end-3 col-start-1 col-end-3 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm">
        <div className="flex items-center mb-2">
          <img src={testimonials[1].avatar} alt={testimonials[1].name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <div className="font-bold text-black text-sm">{testimonials[1].name}</div>
            <div className="text-xs text-gray-500">{testimonials[1].role}</div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-black font-bold text-base">{testimonials[1].rating}</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#E5E7EB" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="14" fill="#000">★</text></svg>
          </div>
        </div>
        <div className="text-gray-700 text-base mb-4">“{testimonials[1].text}”</div>
        <button className="mt-auto bg-white border border-gray-300 hover:bg-gray-100 text-black font-bold px-6 py-2 rounded-full shadow-sm transition-all duration-200 text-base self-start">Show Case Review</button>
      </div>
      <div className="row-start-2 row-end-3 col-start-3 col-end-7 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm">
        <h3 className="text-xl font-bold text-black mb-2 text-left">Benchmark your branches and outpace competitors.</h3>
        <p className="text-gray-700 mb-4 text-left">Compare performance, spot trends, and identify opportunity gaps across your entire network with HAL0’s AI-powered analytics.</p>
        <div className="w-full h-36 mb-4 flex items-end">
          <div className="w-full" style={{ minWidth: 0 }}>
            <Bar data={barData} options={barOptions} width={600} height={120} />
          </div>
        </div>
        <button className="mt-2 bg-black hover:bg-gray-900 text-white font-bold px-6 py-2 rounded-full shadow transition-all duration-200 text-base self-start">Get Started</button>
      </div>
    </div>
  </section>
);

export default HowItWorks; 