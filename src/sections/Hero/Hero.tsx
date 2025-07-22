import { FiUser, FiBarChart2 } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const customerQuote = {
  name: 'Nasir Mehmood',
  location: 'Rizvia Society, Karachi',
  quote: `"Worst branch experience... Let me tell you why. First of all only one counter is operating making customers wait for longer. Even in rush hours they are operating from only one counter making the experience frustrating every single time..."`,
};

const statCard = {
  title: 'Branches Monitored',
  value: '1,720+',
  description: 'Real-time geo-listening across all banking branches',
};

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Customer Satisfaction',
      data: [60, 65, 68, 70, 72, 75],
      borderColor: '#000000',
      backgroundColor: '#F8F9FA',
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: '#000000',
      pointBorderColor: '#000000',
      borderWidth: 3,
      fill: true,
    },
  ],
};
const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      display: false,
      grid: {
        color: '#E9ECEF',
        drawBorder: false,
      },
    },
  },
  elements: {
    line: { borderWidth: 3 },
    point: { radius: 3, backgroundColor: '#000', borderColor: '#000' },
  },
};

const Hero = () => (
  <section className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50/40 to-90% pt-12 pb-8 px-2">
    <div className="relative w-full max-w-[98vw] rounded-3xl bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40 border border-gray-100 px-2 md:px-8 py-10 md:py-16 mx-auto overflow-hidden">
      {/* Badge */}
      <div className="relative z-10 mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium shadow-sm border border-gray-200">
          <span className="text-lg">✦</span> Welcome to Beta Version!
        </span>
      </div>
      {/* Headline */}
      <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-center text-black leading-tight mb-4">
        AI-Powered Geo-Listening<br />
        <span className="font-normal">For Every Banking Branch.</span>
      </h1>
      {/* Subheadline */}
      <p className="relative z-10 text-center text-gray-700 max-w-2xl mb-10 mx-auto">
        HAL0 is Pakistan's first comprehensive geo-listening intelligence platform, enabling actionable insights for every branch, every service, and every customer touchpoint across your entire banking network. Our innovative platform transforms scattered customer feedback into strategic intelligence that drives data-driven decisions.
      </p>
      {/* Network/Flow Layout */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center mx-auto">
        <div className="flex w-full justify-between items-center mb-8">
          {/* Left: Customer Quote Card */}
          <div className="bg-white rounded-2xl shadow-md p-4 max-w-xs flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <FiUser className="text-gray-500 text-xl" />
              </div>
              <div>
                <div className="font-semibold text-black text-sm">{customerQuote.name}</div>
                <div className="text-xs text-gray-500">{customerQuote.location}</div>
              </div>
            </div>
            <div className="text-xs text-gray-700 italic line-clamp-3">{customerQuote.quote}</div>
          </div>
          {/* Center: (empty for spacing) */}
          <div className="flex flex-col items-center mx-2" />
          {/* Right: Stat/Benefit Card with Chart */}
          <div className="bg-white rounded-2xl shadow-md p-4 max-w-xs flex flex-col gap-2 border border-gray-100 min-w-[220px]" style={{ background: '#F8F9FA' }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <FiBarChart2 className="text-black text-xl" />
              </div>
              <div>
                <div className="font-semibold text-black text-sm">{statCard.title}</div>
                <div className="text-xs text-gray-700">{statCard.value}</div>
              </div>
            </div>
            <div className="h-20 w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
            <div className="text-xs text-gray-600">{statCard.description}</div>
          </div>
        </div>
      </div>
      {/* Bottom semi-circle for transition to next section (outside container) with ripple effect */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-64 h-32 overflow-visible flex justify-center z-20">
        <svg width="100%" height="100%" viewBox="0 0 512 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 bottom-0 -translate-x-1/2">
          <g>
            <path d="M0 256C0 114.615 114.615 0 256 0C397.385 0 512 114.615 512 256" stroke="#E5EAF2" strokeWidth="2" />
            <path d="M-32 256C-32 82.615 82.615 -32 256 -32C429.385 -32 544 82.615 544 256" stroke="#E5EAF2" strokeWidth="1.5" opacity="0.5" />
            <path d="M-64 256C-64 50.615 50.615 -64 256 -64C561.385 -64 676 50.615 676 256" stroke="#E5EAF2" strokeWidth="1" opacity="0.3" />
          </g>
        </svg>
      </div>
    </div>
  </section>
);

export default Hero; 