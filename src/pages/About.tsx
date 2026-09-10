import { Shield, Heart, Target, Award, Users, Car, Wrench, Clock } from 'lucide-react';

export default function About() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Your trusted partner for premium car rental services in Dubai
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                White Wings Car Rental is a professional car rental company based in Dubai, United Arab Emirates. We are dedicated to providing our customers with high-quality vehicles and exceptional service.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our diverse fleet ranges from economical sedans to luxury vehicles and spacious SUVs, ensuring we have the perfect car for every occasion and budget. Whether you need a car for a day, a week, or a month, we have flexible rental options to suit your needs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 border border-[#064E3B]/10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Car size={28} />, label: 'Quality Fleet' },
                  { icon: <Users size={28} />, label: 'Happy Customers' },
                  { icon: <Wrench size={28} />, label: 'Well Maintained' },
                  { icon: <Clock size={28} />, label: '24/7 Support' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#064E3B] text-[#D4AF37] rounded-full mb-3">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-[#064E3B] text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-6">Our Story</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            White Wings Car Rental was founded with a simple vision: to provide Dubai residents and visitors with a car rental experience that combines quality, convenience, and value.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Over time, we have grown by focusing on what matters most to our customers — well-maintained vehicles, transparent pricing, and friendly, professional service. Every car in our fleet is regularly serviced and inspected to ensure your safety and comfort.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-xl bg-green-50 border-t-4 border-[#D4AF37]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#064E3B] text-[#D4AF37] rounded-full mb-5">
                <Target size={30} />
              </div>
              <h3 className="text-xl font-bold text-[#064E3B] mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional car rental experiences through quality vehicles, competitive pricing, and outstanding customer service in Dubai.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-green-50 border-t-4 border-[#D4AF37]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#064E3B] text-[#D4AF37] rounded-full mb-5">
                <Heart size={30} />
              </div>
              <h3 className="text-xl font-bold text-[#064E3B] mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, reliability, and customer satisfaction are at the core of everything we do. We believe in building lasting relationships through trust.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-green-50 border-t-4 border-[#D4AF37]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#064E3B] text-[#D4AF37] rounded-full mb-5">
                <Award size={30} />
              </div>
              <h3 className="text-xl font-bold text-[#064E3B] mb-3">Our Promise</h3>
              <p className="text-gray-600">
                Every customer deserves a hassle-free rental experience. We promise transparent pricing, well-maintained cars, and support when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] mb-4">Why Customers Choose Us</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Professional car rental services you can rely on</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Car size={28} />,
                title: 'Quality Vehicles',
                desc: 'Our fleet consists of well-maintained, latest-model vehicles that are regularly serviced and inspected for your safety and comfort.'
              },
              {
                icon: <Users size={28} />,
                title: 'Customer Service',
                desc: 'Our dedicated team is committed to providing friendly, professional assistance throughout your entire rental experience.'
              },
              {
                icon: <Clock size={28} />,
                title: 'Flexible Rental Options',
                desc: 'Choose from daily, weekly, or monthly rental plans. We offer flexible terms to match your schedule and budget.'
              },
              {
                icon: <Shield size={28} />,
                title: 'Transparent Pricing',
                desc: 'No hidden fees or surprises. Our pricing is clear and competitive, with 250 KM included free per day.'
              },
              {
                icon: <Wrench size={28} />,
                title: 'Well Maintained Cars',
                desc: 'Every vehicle in our fleet undergoes regular maintenance and thorough cleaning before each rental.'
              },
              {
                icon: <Award size={28} />,
                title: 'Professional Service',
                desc: 'From booking to return, we ensure a smooth and professional experience at every step.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#064E3B] text-[#D4AF37] rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-[#064E3B] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience White Wings?</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-green-100 text-lg mb-8">
            Contact us today to find the perfect car for your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#D4AF37] text-[#064E3B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E5C158] transition-all shadow-lg"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </div>
  );
}
