import { Link } from 'react-router-dom';
import { Gauge, Fuel, Users, Calendar } from 'lucide-react';
import { rentalVehicles } from '../data/vehicles';

export default function Fleet() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#064E3B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,0.2) 35px, rgba(212,175,55,0.2) 70px)' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Fleet</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Explore our diverse collection of premium vehicles available for rent in Dubai
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={vehicle.images[0]}
                    alt={`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#064E3B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AED {vehicle.dailyPrice}/day
                  </div>
                  <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#064E3B] px-3 py-1 rounded-full text-xs font-bold">
                    250 KM Free/Day
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{vehicle.make} {vehicle.model}</h3>
                  <p className="text-gray-500 text-sm mt-1">{vehicle.year} Model</p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5"><Users size={14} /> {vehicle.passengers} Passengers</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {vehicle.transmission}</span>
                    <span className="flex items-center gap-1.5"><Fuel size={14} /> {vehicle.fuelType}</span>
                    <span className="flex items-center gap-1.5"><Gauge size={14} /> {vehicle.engine}</span>
                  </div>

                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="flex justify-between text-sm mb-4">
                      <div className="text-center">
                        <p className="text-gray-500">Daily</p>
                        <p className="font-bold text-[#064E3B]">AED {vehicle.dailyPrice}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">Weekly</p>
                        <p className="font-bold text-[#064E3B]">AED {vehicle.weeklyPrice}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">Monthly</p>
                        <p className="font-bold text-[#064E3B]">AED {vehicle.monthlyPrice}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to={`/cars/${vehicle.slug}`}
                        className="flex-1 text-center border-2 border-[#064E3B] text-[#064E3B] px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#064E3B] hover:text-white transition-colors"
                      >
                        VIEW DETAILS
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 text-center bg-[#064E3B] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#065F46] transition-colors"
                      >
                        BOOK NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 250 KM Info */}
      <section className="py-12 bg-[#D4AF37]/10 border-y border-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[#064E3B] mb-3">250 KM INCLUDED PER DAY</h3>
          <p className="text-gray-700 text-lg">
            Every rental includes up to 250 kilometers per day. Additional kilometers are subject to the applicable rental rate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-green-100 text-lg mb-8">
            Contact us and we'll help you find the perfect vehicle for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#D4AF37] text-[#064E3B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E5C158] transition-all shadow-lg"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
}
