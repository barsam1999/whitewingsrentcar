export interface RentalVehicle {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  images: string[];
  dailyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  mileage: string;
  transmission: string;
  fuelType: string;
  passengers: number;
  engine: string;
  features: string[];
  safetyFeatures: string[];
  description: string;
  available: boolean;
}

export interface CarForSale {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  images: string[];
  price: number;
  mileage: string;
  condition: string;
  transmission: string;
  fuelType: string;
  passengers: number;
  engine: string;
  features: string[];
  description: string;
  location: string;
  sold: boolean;
}

export const rentalVehicles: RentalVehicle[] = [
  {
    id: "1",
    slug: "toyota-camry-2025",
    make: "Toyota",
    model: "Camry",
    year: 2025,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1621993202323-eb4e81f3712e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop"
    ],
    dailyPrice: 200,
    weeklyPrice: 1200,
    monthlyPrice: 4500,
    mileage: "250 KM/day included",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 5,
    engine: "2.5L 4-Cylinder",
    features: ["Air Conditioning", "Bluetooth", "USB Charging", "Cruise Control", "Rear Camera", "Apple CarPlay", "Android Auto", "Premium Sound System"],
    safetyFeatures: ["ABS", "Airbags", "Lane Assist", "Blind Spot Monitor", "Rear Cross Traffic Alert"],
    description: "The 2025 Toyota Camry is the perfect choice for your Dubai experience. Known for its reliability, comfort, and fuel efficiency, this sedan offers a smooth ride whether you're navigating city streets or cruising on the highway. With spacious interiors and modern technology features, the Camry ensures a comfortable journey for you and your passengers.",
    available: true
  },
  {
    id: "2",
    slug: "bmw-5-series-2025",
    make: "BMW",
    model: "5 Series",
    year: 2025,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=500&fit=crop"
    ],
    dailyPrice: 550,
    weeklyPrice: 3500,
    monthlyPrice: 12000,
    mileage: "250 KM/day included",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 5,
    engine: "2.0L Turbo 4-Cylinder",
    features: ["Leather Seats", "Navigation System", "Panoramic Roof", "Heated Seats", "Premium Sound", "Wireless Charging", "Ambient Lighting", "Digital Cockpit"],
    safetyFeatures: ["ABS", "Multiple Airbags", "Adaptive Cruise Control", "Lane Departure Warning", "Parking Assistant", "Night Vision"],
    description: "Experience luxury and performance with the 2025 BMW 5 Series. This executive sedan combines German engineering excellence with cutting-edge technology. The powerful engine delivers thrilling performance while the luxurious interior provides ultimate comfort. Perfect for business meetings, special occasions, or simply enjoying the finest driving experience Dubai has to offer.",
    available: true
  },
  {
    id: "3",
    slug: "mercedes-benz-s-class-2025",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2025,
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=500&fit=crop"
    ],
    dailyPrice: 900,
    weeklyPrice: 5800,
    monthlyPrice: 20000,
    mileage: "250 KM/day included",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 5,
    engine: "3.0L Inline-6 Turbo",
    features: ["Massage Seats", "Burmester Sound", "MBUX Infotainment", "Heads-Up Display", "Rear Entertainment", "Fragrance System", "Executive Rear Seats", "4-Zone Climate Control"],
    safetyFeatures: ["PRE-SAFE", "Active Brake Assist", "E-Active Body Control", "360° Camera", "Traffic Sign Assist", "Night View Assist Plus"],
    description: "The Mercedes-Benz S-Class represents the pinnacle of automotive luxury. As the flagship sedan, it offers an unparalleled driving experience with its whisper-quiet cabin, buttery-smooth ride, and state-of-the-art technology. Every detail is crafted to perfection, from the hand-stitched leather to the advanced driver assistance systems. Make a statement wherever you go in Dubai.",
    available: true
  },
  {
    id: "4",
    slug: "nissan-patrol-2025",
    make: "Nissan",
    model: "Patrol",
    year: 2025,
    images: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop"
    ],
    dailyPrice: 450,
    weeklyPrice: 2800,
    monthlyPrice: 9500,
    mileage: "250 KM/day included",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 7,
    engine: "4.0L V6",
    features: ["Third Row Seating", "4WD", "Leather Interior", "Touchscreen Display", "Rear Entertainment", "Cooling Seats", "Power Tailgate", "Around View Monitor"],
    safetyFeatures: ["ABS", "Multiple Airbags", "Vehicle Dynamic Control", "Intelligent Brake Assist", "Blind Spot Intervention", "Hill Start Assist"],
    description: "The Nissan Patrol is the ultimate SUV for exploring Dubai and beyond. With its powerful V6 engine and advanced 4WD system, it handles everything from city driving to desert adventures with confidence. The spacious 7-seater cabin ensures everyone travels in comfort, while the premium features make every journey enjoyable. Perfect for families and groups exploring the emirate.",
    available: true
  },
  {
    id: "5",
    slug: "range-rover-sport-2025",
    make: "Land Rover",
    model: "Range Rover Sport",
    year: 2025,
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551830820-a554f07d0b45?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop"
    ],
    dailyPrice: 750,
    weeklyPrice: 4800,
    monthlyPrice: 16000,
    mileage: "250 KM/day included",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 5,
    engine: "3.0L Inline-6 Turbo",
    features: ["Meridian Sound System", "Panoramic Roof", "Heated & Cooled Seats", "Terrain Response", "Pixel LED Headlights", "Air Suspension", "Head-Up Display", "ClearSight Mirror"],
    safetyFeatures: ["ABS", "Multiple Airbags", "Adaptive Cruise Control", "Lane Keep Assist", "3D Surround Camera", "Emergency Braking"],
    description: "The Range Rover Sport combines breathtaking luxury with extraordinary capability. Its commanding presence on Dubai's roads is matched only by its exceptional performance and refinement. Whether you're heading to a business meeting in DIFC or exploring the Hatta mountains, this SUV delivers an unmatched experience. The handcrafted interior and advanced technology ensure every moment behind the wheel is special.",
    available: true
  },
  {
    id: "6",
    slug: "audi-a6-2025",
    make: "Audi",
    model: "A6",
    year: 2025,
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop"
    ],
    dailyPrice: 480,
    weeklyPrice: 3000,
    monthlyPrice: 10500,
    mileage: "250 KM/day included",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 5,
    engine: "2.0L TFSI Turbo",
    features: ["Virtual Cockpit", "MMI Touch Response", "Bang & Olufsen Sound", "Matrix LED Headlights", "Wireless Charging", "Four-Zone Climate", "Sport Seats", "Ambient Lighting"],
    safetyFeatures: ["Audi Pre Sense", "Lane Departure Warning", "Adaptive Cruise Control", "Parking System Plus", "Cross Traffic Assist", "Exit Warning"],
    description: "The Audi A6 exemplifies progressive luxury and technology. Its sleek design turns heads while the advanced Quattro all-wheel-drive system ensures confident handling in all conditions. The virtual cockpit and dual touchscreen displays keep you connected and in control. Whether cruising Sheikh Zayed Road or parked at a five-star hotel, the A6 makes a sophisticated statement.",
    available: true
  }
];

export const carsForSale: CarForSale[] = [
  {
    id: "s1",
    slug: "toyota-land-cruiser-2024",
    make: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop"
    ],
    price: 285000,
    mileage: "15,000 KM",
    condition: "Excellent",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 7,
    engine: "3.5L Twin Turbo V6",
    features: ["Full Option", "Leather Seats", "Sunroof", "360 Camera", "Adaptive Cruise", "JBL Sound System", "Power Tailgate", "Cooled Seats"],
    description: "2024 Toyota Land Cruiser in excellent condition. Full option with low mileage. Single owner, full service history available. GCC specifications. Ready for immediate sale.",
    location: "Dubai, UAE",
    sold: false
  },
  {
    id: "s2",
    slug: "mercedes-gle-450-2023",
    make: "Mercedes-Benz",
    model: "GLE 450",
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=500&fit=crop"
    ],
    price: 320000,
    mileage: "22,000 KM",
    condition: "Excellent",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 5,
    engine: "3.0L Inline-6 Turbo",
    features: ["AMG Line", "Panoramic Roof", "Burmester Sound", "MBUX", "Heated Seats", "Air Suspension", "Night Package", "21\" AMG Wheels"],
    description: "2023 Mercedes-Benz GLE 450 AMG Line in pristine condition. Fully loaded with premium package. Accident-free with complete service records. GCC specs with warranty remaining.",
    location: "Dubai, UAE",
    sold: false
  },
  {
    id: "s3",
    slug: "porsche-cayenne-2023",
    make: "Porsche",
    model: "Cayenne",
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=500&fit=crop"
    ],
    price: 420000,
    mileage: "18,000 KM",
    condition: "Excellent",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 5,
    engine: "3.0L V6 Turbo",
    features: ["Sport Chrono", "PASM", "Bose Sound", "Panoramic Roof", "Sport Exhaust", "Leather Interior", "Matrix LED", "14-Way Sport Seats"],
    description: "2023 Porsche Cayenne with Sport Chrono package. This SUV delivers sports car performance with everyday practicality. Impeccable condition, full Porsche service history. A true driver's SUV.",
    location: "Dubai, UAE",
    sold: false
  },
  {
    id: "s4",
    slug: "lexus-lx600-2024",
    make: "Lexus",
    model: "LX 600",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop"
    ],
    price: 395000,
    mileage: "12,000 KM",
    condition: "Excellent",
    transmission: "Automatic",
    fuelType: "Petrol",
    passengers: 7,
    engine: "3.5L Twin Turbo V6",
    features: ["Ultra Luxury Package", "Mark Levinson Sound", "Rear Entertainment", "Massage Seats", "Head-Up Display", "Multi-Terrain Select", "Adaptive Suspension", "21\" Wheels"],
    description: "2024 Lexus LX 600 Ultra Luxury - the pinnacle of Japanese luxury SUVs. Exceptional craftsmanship, cutting-edge technology, and legendary reliability. Low mileage, single owner, full Lexus service history.",
    location: "Dubai, UAE",
    sold: false
  }
];

export const companyInfo = {
  name: "White Wings Car Rental",
  phone: "+971 50 123 4567",
  whatsapp: "+971501234567",
  email: "info@whitewingsrental.com",
  address: "Dubai, United Arab Emirates",
  businessHours: "Saturday - Thursday: 9:00 AM - 9:00 PM | Friday: 2:00 PM - 9:00 PM",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510956587!2d55.27078281498139!3d25.20484938385868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae"
};
