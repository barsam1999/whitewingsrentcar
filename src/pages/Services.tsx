import { Link } from 'react-router-dom';
import { Calendar, Clock, Star, MapPin, Car, Building, Plane, Tag } from 'lucide-react';

const services = [
  {
    icon: <Calendar size={36} />,
    title: 'Daily Car Rental',
    description: 'Need a car for a day or two? Our daily rental service gives you the flexibility to explore Dubai at your own pace. Perfect for tourists, business travelers, or anyone who needs a vehicle for a short period. All daily rentals include 250 KM free per day.',
    features: ['250 KM included free per day', 'Flexible pickup and drop-off', 'Full insurance coverage', '24/7 roadside assistance']
  },
  {
    icon: <Clock size={36} />,
    title: 'Weekly Car Rental',
    description: 'Save more with our weekly rental rates. Ideal for extended business trips, family vacations, or when you need a reliable vehicle for the entire week. Enjoy discounted rates and the same great service.',
    features: ['Discounted weekly rates', 'Unlimited support', 'Free delivery in Dubai', 'Vehicle replacement if needed']
  },
  {
    icon: <Calendar size={36} />,
    title: 'Monthly Car Rental',
    description: 'Our monthly rental plans offer the best value for long-term needs. Whether you\'re a resident waiting for your own car or need a vehicle for an extended project, our monthly rates are unbeatable.',
    features: ['Best value for long-term', 'Flexible terms', 'Regular maintenance included', 'Dedicated account manager']
  },
  {
    icon: <Clock size={36} />,
    title: 'Long-Term Rental',
    description: 'For rentals extending beyond a month, we offer customized long-term solutions tailored to your specific needs. Corporate clients and individuals benefit from our most competitive rates.',
    features: ['Custom pricing', 'Fleet management', 'Priority support', 'Vehicle swap options']
  },
  {
    icon: <Star size={36} />,
    title: 'Luxury Car Rental',
    description: 'Make a statement with our premium luxury car collection. From BMW to Mercedes-Benz to Range Rover, our luxury fleet ensures you travel in style and comfort for any special occasion.',
    features: ['Premium vehicles', 'Chauffeur option available', 'VIP service', 'Special occasion packages']
  },
  {
    icon: <Plane size={36} />,
    title: 'Airport Delivery',
    description: 'Start your Dubai experience the moment you land. We deliver your rental car directly to Dubai International Airport or any other arrival point. Our team will be waiting to hand over the keys.',
    features: ['DXB Airport delivery', 'Meet and greet service', 'Available 24/7', 'Flight tracking']
  },
  {
    icon: <Building size={36} />,
    title: 'Hotel Delivery',
    description: 'We deliver your rental vehicle to any hotel in Dubai. Whether you\'re staying at a five-star resort or a business hotel, our team ensures your car is ready when you need it.',
    features: ['Any hotel in Dubai', 'Concierge coordination', 'Same-day delivery', 'Flexible scheduling']
  },
  {
    icon: <Tag size={36} />,
    title: 'Car Sales',
    description: 'Looking to buy a quality pre-owned vehicle? We offer a curated selection of premium cars for sale. All vehicles are thoroughly inspected and come with complete documentation. We also buy cars.',
    features: ['Quality inspected vehicles', 'Complete documentation', 'Fair market pricing', 'We also buy cars']
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Comprehensive car rental and sales solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-5">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
                    <div className="text-blue-600 transform scale-[3]">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-100 text-lg mb-8">
            We're happy to create a rental package tailored to your specific requirements. Contact us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
              Contact Us
            </Link>
            <Link to="/fleet" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
