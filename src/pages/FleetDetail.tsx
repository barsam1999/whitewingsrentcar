import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Calendar, Fuel, Gauge, Shield, Check, MessageCircle } from 'lucide-react';
import { rentalVehicles, companyInfo } from '../data/vehicles';

export default function FleetDetail() {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = rentalVehicles.find(v => v.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', email: '', pickupDate: '', returnDate: '', message: '' });

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6">The vehicle you're looking for doesn't exist.</p>
          <Link to="/fleet" className="text-blue-600 font-semibold hover:text-blue-800">← Back to Fleet</Link>
        </div>
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % vehicle.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/fleet" className="hover:text-blue-600">Our Fleet</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{vehicle.make} {vehicle.model}</span>
          </nav>
        </div>
      </div>

      {/* Vehicle Header */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Photo Gallery */}
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg h-72 sm:h-96">
                <img
                  src={vehicle.images[currentImage]}
                  alt={`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
                  className="w-full h-full object-cover"
                />
                {vehicle.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md">
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {vehicle.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${idx === currentImage ? 'bg-white scale-110' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {vehicle.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImage ? 'border-blue-600' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">250 KM Free/Day</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Available</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{vehicle.make} {vehicle.model}</h1>
              <p className="text-gray-500 text-lg mb-6">{vehicle.year} Model</p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Transmission</p>
                    <p className="font-semibold text-gray-900 text-sm">{vehicle.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Passengers</p>
                    <p className="font-semibold text-gray-900 text-sm">{vehicle.passengers}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Fuel size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Fuel Type</p>
                    <p className="font-semibold text-gray-900 text-sm">{vehicle.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Gauge size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Engine</p>
                    <p className="font-semibold text-gray-900 text-sm">{vehicle.engine}</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Rental Pricing</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Daily</p>
                    <p className="text-2xl font-bold text-blue-600">AED {vehicle.dailyPrice}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Weekly</p>
                    <p className="text-2xl font-bold text-blue-600">AED {vehicle.weeklyPrice}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Monthly</p>
                    <p className="text-2xl font-bold text-blue-600">AED {vehicle.monthlyPrice}</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-3">250 KM included free per day. Additional KM charged separately.</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="flex-1 text-center bg-blue-600 text-white px-6 py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
                >
                  BOOK THIS CAR
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I'm interested in renting the ${vehicle.year} ${vehicle.make} ${vehicle.model}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-500 text-white px-6 py-3.5 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Vehicle */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Vehicle</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{vehicle.description}</p>
          </div>
        </div>
      </section>

      {/* Vehicle Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vehicle Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.safetyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Shield size={16} className="text-blue-600 shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Rental Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Mileage</h3>
              <p className="text-gray-600">{vehicle.mileage}</p>
              <p className="text-sm text-gray-500 mt-2">Additional kilometers charged at AED 1-3 per KM depending on vehicle category.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Rental Conditions</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Valid driving license required</li>
                <li>• Minimum age: 21 years</li>
                <li>• Security deposit required</li>
                <li>• No smoking in vehicles</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">What's Included</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 250 KM free per day</li>
                <li>• Basic insurance</li>
                <li>• 24/7 roadside assistance</li>
                <li>• Free delivery in Dubai</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Book This Car</h2>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = `/contact?vehicle=${vehicle.slug}`; }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={bookingForm.email}
                onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                <input
                  type="date"
                  value={bookingForm.pickupDate}
                  onChange={(e) => setBookingForm({...bookingForm, pickupDate: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                <input
                  type="date"
                  value={bookingForm.returnDate}
                  onChange={(e) => setBookingForm({...bookingForm, returnDate: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
              <textarea
                value={bookingForm.message}
                onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any special requests..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
