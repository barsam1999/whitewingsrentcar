import { Link } from 'react-router-dom';
import { MapPin, Gauge, Calendar } from 'lucide-react';
import { carsForSale, companyInfo } from '../data/vehicles';

export default function CarsForSale() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#064E3B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,0.2) 35px, rgba(212,175,55,0.2) 70px)' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cars for Sale</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Premium pre-owned vehicles available for purchase in Dubai
          </p>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carsForSale.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={car.images[0]}
                    alt={`${car.make} ${car.model} ${car.year}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {car.sold && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg">SOLD</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-[#064E3B] text-white px-3 py-1.5 rounded-full text-sm font-bold">
                    AED {car.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{car.make} {car.model}</h3>
                  <p className="text-gray-500 text-sm mt-1">{car.year} Model</p>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1"><Gauge size={14} /> {car.mileage}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {car.transmission}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {car.location}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      car.condition === 'Excellent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {car.condition} Condition
                    </span>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Link
                      to={`/cars-for-sale/${car.slug}`}
                      className="flex-1 text-center border-2 border-[#064E3B] text-[#064E3B] px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#064E3B] hover:text-white transition-colors"
                    >
                      VIEW DETAILS
                    </Link>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I'm interested in the ${car.year} ${car.make} ${car.model} for sale.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                        car.sold ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#064E3B] text-white hover:bg-[#065F46]'
                      }`}
                    >
                      {car.sold ? 'SOLD' : 'CONTACT'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sell Your Car CTA */}
          <div className="mt-16 bg-[#064E3B] rounded-2xl p-10 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,0.3) 35px, rgba(212,175,55,0.3) 70px)' }}></div>
            </div>
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Want to Sell Your Car?</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                We buy quality pre-owned vehicles. Contact us to get a fair offer for your car.
              </p>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I would like to sell my car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D4AF37] text-[#064E3B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E5C158] transition-all shadow-lg"
              >
                SELL YOUR CAR
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
