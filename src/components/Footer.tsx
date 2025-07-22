const footerLinks = [
  {
    title: 'Home',
    links: [
      { name: 'Overview', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Pain Points', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Product',
    links: [
      { name: 'API', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Docs', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
];

const Footer = () => (
  <footer className="w-full bg-white p-4">
    <div className=" bg-black rounded-2xl px-8 py-12 flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
      {/* Left: Logo, Description, Socials, CTA */}
      <div className="flex-1 min-w-[260px] flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="rounded bg-white text-black px-2 py-1 text-2xl font-bold">□</span>
          <span className="text-2xl font-bold text-white tracking-tight">HAL0</span>
        </div>
        <p className="text-gray-300 text-base max-w-xs">
          HAL0 is the AI-powered geo-listening platform for banks. Instantly surface customer pain points, benchmark branches, and act on real-time insights to drive better banking experiences nationwide.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 6.1c-.6.3-1.2.5-1.8.6.6-.4 1-1 1.2-1.7-.6.4-1.3.7-2 .9-.6-.6-1.5-1-2.4-1-1.8 0-3.2 1.5-3.2 3.2 0 .3 0 .5.1.8-2.7-.1-5.1-1.4-6.7-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.4-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.2-.9.2-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3 2.3-1.1.9-2.5 1.5-4 1.5-.3 0-.5 0-.8-.1C5.7 19.1 7.4 19.7 9.3 19.7c7.2 0 11.1-6 11.1-11.1v-.5c.8-.6 1.4-1.2 1.9-2z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M7.5 9.5v7h-3v-7h3zm-1.5-2c1 0 1.7.7 1.7 1.7 0 .9-.7 1.6-1.7 1.6s-1.7-.7-1.7-1.6c0-1 .7-1.7 1.7-1.7zm4 2h3v1.2h.1c.4-.7 1.3-1.5 2.7-1.5 2.8 0 3.3 1.8 3.3 4.1v5.2h-3v-4.6c0-1.1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.4v4.6h-3v-7z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Github" className="text-gray-400 hover:text-white transition">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.6 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.8-1.3 2.6-1 2.6-1 .5 1.2.2 2.2.1 2.4.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12c0-5.5-4.5-10-10-10z" fill="currentColor"/></svg>
          </a>
        </div>
        <a href="#" className="inline-block mt-4 px-6 py-2 rounded-full bg-white text-black font-bold shadow hover:bg-gray-100 transition text-base">Request a Demo</a>
      </div>
      {/* Right: Link Columns */}
      <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerLinks.map((col) => (
          <div key={col.title}>
            <div className="text-white font-semibold mb-3 text-lg">{col.title}</div>
            <ul className="flex flex-col gap-2">
              {col.links.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition text-base">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-4 text-center text-xs text-gray-400">&copy; {new Date().getFullYear()} HAL0. All rights reserved.</div>
  </footer>
);

export default Footer; 