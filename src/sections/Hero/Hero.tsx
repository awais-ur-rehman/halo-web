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

/** SHIMMER EFFECT CSS **/
const shimmerStyle = `
  .shimmer {
    position: relative;
    color: #111;
    background: linear-gradient(90deg, #111 0%, #111 30%, #e5eaf2 50%, #111 70%, #111 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer-move 3.5s linear infinite;
  }
  @keyframes shimmer-move {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  .glass-button {
    background: rgb(24, 23, 23);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .glass-button:hover {
    background: rgba(61, 59, 59, 0.25);
    transform: translateY(-1px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
  }
  
  .glass-button:active {
    transform: translateY(0);
    box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.3);
  }
`;

const Hero = () => {


  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50/40 to-90% pt-12 pb-8 px-2">
      {/* Inject shimmer CSS */}
      <style>{shimmerStyle}</style>

      <div className="relative w-full max-w-[98vw] rounded-3xl bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40 border border-gray-100 px-2 md:px-8 py-10 md:py-16 mx-auto overflow-hidden">
        {/* Badge */}
        <div className="relative z-10 mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium shadow-sm border border-gray-200">
            <span className="text-lg">✦</span> Welcome to Beta Version!
          </span>
        </div>
        {/* Headline */}
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-center text-black leading-tight mb-4">
          <span className="shimmer block h-14 w-fit mx-auto">AI-Powered Geo-Listening</span>
        </h1>
        <h2 className='text-center text-gray-700 text-3xl max-w-2xl mb-4 mx-auto'>For Every Banking Branch.</h2>
        {/* Subheadline */}
        <p className="relative z-10 text-center text-gray-700 max-w-2xl mb-10 mx-auto">
          HAL0 is Pakistan's first comprehensive geo-listening intelligence platform, enabling actionable insights for every branch, every service, and every customer touchpoint across your entire banking network. Our innovative platform transforms scattered customer feedback into strategic intelligence that drives data-driven decisions.
        </p>
        {/* Network/Flow Layout */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center mx-auto">
          <div className="flex w-full justify-between items-center mb-4">
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

        {/* Demo Video Container with Custom Unmute Button */}
        <div className="relative w-full max-w-4xl mx-auto mt-8">
  <iframe
    src="https://player.vimeo.com/video/1104554985?autoplay=1&muted=1&loop=1&background=0"
    className="w-full rounded-xl shadow-lg border border-gray-200"
    style={{ aspectRatio: '16/9', minHeight: 300 }}
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Demo Video"
  />
</div>
      </div>
    </section>
  );
};

export default Hero;