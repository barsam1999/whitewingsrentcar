import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/vehicles';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">WW</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">White Wings</h3>
                <p className="text-xs text-gray-400">Car Rental</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium car rental services in Dubai. Experience luxury, comfort, and reliability with our diverse fleet of vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Fleet', path: '/fleet' },
                { name: 'Cars for Sale', path: '/cars-for-sale' },
                { name: 'Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Daily Car Rental</li>
              <li>Weekly Car Rental</li>
              <li>Monthly Car Rental</li>
              <li>Long-Term Rental</li>
              <li>Luxury Car Rental</li>
              <li>Airport Delivery</li>
              <li>Car Sales</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone size={16} className="mt-0.5 text-blue-400 shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail size={16} className="mt-0.5 text-blue-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 text-blue-400 shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Clock size={16} className="mt-0.5 text-blue-400 shrink-0" />
                <span>{companyInfo.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} White Wings Car Rental. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
