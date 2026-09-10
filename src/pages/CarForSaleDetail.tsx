import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Calendar, Fuel, Gauge, MapPin, Check, MessageCircle } from 'lucide-react';
import { carsForSale, companyInfo } from '../data/vehicles';

export default function CarForSaleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const car = carsForSale.find(c => c.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6">The vehicle you're looking for doesn't exist.</p>
          <Link to="/cars-for-sale" className="text-blue-600 font-semibold hover:text-blue-800">← Back to Cars for Sale</Link>
        </div>
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % car.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + car.images.length) % car.images.length);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/cars-for-sale" className="hover:text-blue-600">Cars for Sale</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{car.make} {car.model}</span>
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
                  src={car.images[currentImage]}
                  alt={`${car.make} ${car.model} ${car.year}`}
                  className="w-full h-full object-cover"
                />
                {car.sold && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-2xl">SOLD</span>
                  </div>
                )}
                {car.images.length > 1 && (
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
                  {car.images.map((_, idx) => (
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
                {car.images.map((img, idx) => (
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
              {car.sold && (
                <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-3">SOLD</span>
              )}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                car.condition === 'Excellent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {car.condition} Condition
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{car.make} {car.model}</h1>
              <p className="text-gray-500 text-lg mb-4">{car.year} Model</p>

              {/* Price */}
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <p className="text-sm text-gray-500 mb-1">Asking Price</p>
                <p className="text-4xl font-bold text-blue-600">AED {car.price.toLocaleString()}</p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Gauge size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Mileage</p>
                    <p className="font-semibold text-gray-900 text-sm">{car.mileage}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Transmission</p>
                    <p className="font-semibold text-gray-900 text-sm">{car.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Fuel size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Fuel Type</p>
                    <p className="font-semibold text-gray-900 text-sm">{car.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Passengers</p>
                    <p className="font-semibold text-gray-900 text-sm">{car.passengers}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg col-span-2">
                  <MapPin size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900 text-sm">{car.location}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="flex-1 text-center bg-blue-600 text-white px-6 py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
                >
                  CONTACT ABOUT THIS CAR
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I'm interested in the ${car.year} ${car.make} ${car.model} for sale at AED ${car.price.toLocaleString()}.`}
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

      {/* Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Vehicle</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{car.description}</p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="space-y-3">
                {[
                  { label: 'Make', value: car.make },
                  { label: 'Model', value: car.model },
                  { label: 'Year', value: car.year.toString() },
                  { label: 'Mileage', value: car.mileage },
                  { label: 'Transmission', value: car.transmission },
                  { label: 'Fuel Type', value: car.fuelType },
                  { label: 'Engine', value: car.engine },
                  { label: 'Passengers', value: car.passengers.toString() },
                  { label: 'Condition', value: car.condition },
                  { label: 'Location', value: car.location },
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-semibold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in This Vehicle?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us to schedule a viewing or get more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
              Contact Us
            </Link>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
