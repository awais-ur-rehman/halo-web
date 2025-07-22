import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState('Home');

  return (
    <header className="w-full bg-white/80 backdrop-blur fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-0">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 tracking-tight">
          <span className="rounded bg-gray-900 text-white px-2 py-1 mr-2 text-base">□</span>
          HAL0
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map(link => (
            <li key={link.name} className="flex flex-col items-center">
              <a
                href={link.href}
                className={`hover:text-black transition-colors py-5 inline-block ${selected === link.name ? 'text-black' : ''}`}
                onClick={() => setSelected(link.name)}
              >
                {link.name}
              </a>
              {selected === link.name && (
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-0"></span>
              )}
            </li>
          ))}
        </ul>
        {/* CTA Buttons */}
        <div className="hidden md:flex gap-2 items-center">
          <button className="text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
            Contact
          </button>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-black transition">
            Register
          </button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <FiMenu size={24} />
        </button>
      </nav>
      {/* Mobile Menu (placeholder) */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block py-2 text-gray-700 hover:text-black ${selected === link.name ? 'text-black' : ''}`}
                  onClick={() => { setSelected(link.name); setMobileOpen(false); }}
                >
                  {link.name}
                  {selected === link.name && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-black ml-0.5 align-middle"></span>
                  )}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full text-gray-900 px-6 py-2 rounded-full font-semibold mb-2 hover:bg-gray-900 hover:text-white transition" onClick={() => setMobileOpen(false)}>
                Contact
              </button>
              <button className="w-full bg-gray-900 text-white px-6 py-2 rounded-full font-semibold" onClick={() => setMobileOpen(false)}>
                Register
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar; 