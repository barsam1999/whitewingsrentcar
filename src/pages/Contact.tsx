import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { companyInfo } from '../data/vehicles';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#064E3B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,0.2) 35px, rgba(212,175,55,0.2) 70px)' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/logo.svg" alt="White Wings Car Rental" className="h-16 w-auto brightness-110" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Get in touch with White Wings Car Rental. We're here to help you find the perfect vehicle.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#064E3B] mb-8">Get in Touch</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#064E3B] rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${companyInfo.phone}`} className="text-gray-600 hover:text-[#064E3B] transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#064E3B] rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-[#064E3B] transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#064E3B] rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#064E3B] rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">{companyInfo.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-10 space-y-3">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#064E3B] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#065F46] transition-colors"
                >
                  <Phone size={18} /> Call Now
                </a>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#064E3B] mb-4">Send Us a Message</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mb-8"></div>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-[#064E3B]/20 rounded-lg">
                  <p className="text-[#064E3B] font-medium">✓ Thank you! Your message has been sent. We'll get back to you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:border-transparent transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="rental">Car Rental Inquiry</option>
                      <option value="booking">Booking Request</option>
                      <option value="sale">Car for Sale Inquiry</option>
                      <option value="sell">Sell My Car</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:border-transparent transition-all"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#064E3B] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#065F46] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#064E3B] mb-4">Find Us in Dubai</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600">Visit our office or we can deliver the car to your location</p>
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
      </section>
    </div>
  );
}
