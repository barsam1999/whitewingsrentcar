import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from '../data/vehicles';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'OUR FLEET', path: '/fleet' },
  { name: 'CARS FOR SALE', path: '/cars-for-sale' },
  { name: 'SERVICES', path: '/services' },
  { name: 'CONTACT US', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">WW</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-blue-900 leading-tight">White Wings</h1>
              <p className="text-xs text-gray-500 -mt-0.5">Car Rental</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              <Phone size={16} />
              <span>{companyInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t space-y-2">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700"
              >
                <Phone size={16} />
                {companyInfo.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-lg font-semibold text-sm"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
