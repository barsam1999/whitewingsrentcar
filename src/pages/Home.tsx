import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, MapPin, Phone, Users, Gauge, Fuel, Calendar } from 'lucide-react';
import { rentalVehicles, carsForSale, companyInfo } from '../data/vehicles';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#064E3B] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&h=1080&fit=crop"
            alt="Luxury car in Dubai"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B]/95 via-[#064E3B]/80 to-[#064E3B]/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <img src="/logo.svg" alt="White Wings Car Rental" className="h-20 w-auto brightness-110" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Car Rental<br />
              <span className="text-[#D4AF37]">in Dubai</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl">
              Drive with confidence. Choose from our quality vehicles and flexible rental options.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#D4AF37] text-[#064E3B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E5C158] transition-all shadow-lg hover:shadow-xl"
              >
                BOOK NOW
              </Link>
              <Link
                to="/fleet"
                className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF37]/10 transition-all"
              >
                VIEW OUR FLEET
              </Link>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
              >
                WHATSAPP US
              </a>
            </div>
          </div>
        </div>
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37]"></div>
      </section>

      {/* 250 KM Banner */}
      <section className="bg-[#D4AF37] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#064E3B] font-bold text-lg">
            ✦ 250 KM INCLUDED FREE PER DAY ✦ Every rental includes up to 250 kilometers per day
          </p>
        </div>
      </section>

      {/* Featured Rental Cars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-4">Featured Rental Cars</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our most popular vehicles available for rent in Dubai</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalVehicles.slice(0, 3).map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden h-52">
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
                  <p className="text-gray-500 text-sm mt-1">{vehicle.year} • {vehicle.transmission} • {vehicle.passengers} Passengers</p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1"><Gauge size={14} /> {vehicle.mileage}</span>
                    <span className="flex items-center gap-1"><Fuel size={14} /> {vehicle.fuelType}</span>
                  </div>
                  <div className="mt-5 flex gap-3">
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
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/fleet" className="inline-flex items-center gap-2 text-[#064E3B] font-bold hover:text-[#D4AF37] transition-colors text-lg">
              View All Vehicles <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cars for Sale */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-4">Cars for Sale</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Premium pre-owned vehicles available for purchase</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carsForSale.slice(0, 4).map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative overflow-hidden h-40">
                  <img
                    src={car.images[0]}
                    alt={`${car.make} ${car.model} ${car.year}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {car.sold && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">SOLD</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{car.make} {car.model}</h3>
                  <p className="text-sm text-gray-500">{car.year} • {car.mileage}</p>
                  <p className="text-lg font-bold text-[#064E3B] mt-2">AED {car.price.toLocaleString()}</p>
                  <Link
                    to={`/cars-for-sale/${car.slug}`}
                    className="mt-3 block text-center text-sm text-[#064E3B] font-semibold hover:text-[#D4AF37]"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/cars-for-sale" className="inline-flex items-center gap-2 text-[#064E3B] font-bold hover:text-[#D4AF37] transition-colors text-lg">
              View All Cars for Sale <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive car rental solutions for every need</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Calendar size={32} />, title: 'Daily Rental', desc: 'Flexible daily car rentals for short trips' },
              { icon: <Clock size={32} />, title: 'Weekly & Monthly', desc: 'Great rates for extended rental periods' },
              { icon: <Star size={32} />, title: 'Luxury Cars', desc: 'Premium vehicles for special occasions' },
              { icon: <MapPin size={32} />, title: 'Airport Delivery', desc: 'Convenient pickup and drop-off services' },
            ].map((service, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors group border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#064E3B] text-[#D4AF37] rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg text-[#064E3B] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#064E3B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose White Wings</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-green-200 text-lg max-w-2xl mx-auto">We deliver excellence in every ride</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={36} />, title: 'Trusted Service', desc: 'Reliable and professional car rental experience' },
              { icon: <Gauge size={36} />, title: '250 KM Free/Day', desc: 'Generous mileage included with every rental' },
              { icon: <Users size={36} />, title: 'Customer First', desc: 'Dedicated support throughout your rental' },
              { icon: <Star size={36} />, title: 'Premium Fleet', desc: 'Well-maintained, latest model vehicles' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/20 rounded-full mb-4 border-2 border-[#D4AF37]/40">
                  <span className="text-[#D4AF37]">{item.icon}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-green-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-4">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Trusted by hundreds of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed K.', text: 'Excellent service! The car was in perfect condition and the staff was very helpful. Will definitely rent again.', rating: 5 },
              { name: 'Sarah M.', text: 'Great experience with White Wings. The BMW was spotless and delivery to the airport was seamless.', rating: 5 },
              { name: 'James R.', text: 'Best car rental company in Dubai. Fair prices, clean cars, and professional service every time.', rating: 5 },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#D4AF37]">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-[#064E3B]">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-6">Find Us in Dubai</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
              <p className="text-gray-600 text-lg mb-8">
                Conveniently located in the heart of Dubai, we offer easy access for car pickup and drop-off. Our team is ready to assist you with any rental needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#D4AF37] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-[#D4AF37] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[#D4AF37] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600">{companyInfo.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-96 border-2 border-[#064E3B]/10">
              <iframe
                src={companyInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="White Wings Car Rental Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#064E3B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,0.1) 35px, rgba(212,175,55,0.1) 70px)' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Hit the Road?</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-green-100 text-xl mb-8">
            Book your perfect car today and experience the freedom of driving in Dubai with White Wings Car Rental.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#D4AF37] text-[#064E3B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E5C158] transition-all shadow-lg"
            >
              BOOK NOW
            </Link>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
            >
              WHATSAPP US
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF37]/10 transition-all"
            >
              CALL US NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
