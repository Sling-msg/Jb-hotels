import { motion } from "motion/react";
import { 
  Bed, 
  Music, 
  Wine, 
  Calendar, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight,
  Star
} from "lucide-react";

const ExperienceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass p-8 rounded-2xl hover:border-gold/50 transition-all duration-500 group"
  >
    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
      <Icon className="text-gold w-8 h-8" />
    </div>
    <h3 className="text-2xl font-serif mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const RoomCard = ({ title, price, image, features }: { title: string, price: string, image: string, features: string[] }) => {
  const whatsappLink = `https://wa.me/2348000000000?text=Hello, I would like to book the ${title} at JB Hotel & Suites.`;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass rounded-3xl overflow-hidden group border-white/5"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-gold text-black px-4 py-1 rounded-full font-bold text-sm">
          {price}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif mb-4">{title}</h3>
        <ul className="space-y-2 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-center text-gray-400 text-sm">
              <Star className="w-3 h-3 text-gold mr-2" /> {f}
            </li>
          ))}
        </ul>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer w-full bg-gold text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Book on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter">
            JB <span className="text-gold">HOTEL</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
            <a href="#rooms" className="hover:text-gold transition-colors">Rooms</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <a href="#booking" className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-bold mb-6 block">Welcome to Excellence</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
              Finest Hotel At The <br />
              <span className="text-gold italic">Best Price.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience a blend of comfort, fun, and luxury in the heart of Ogun State. 
              Your premium gateway to Modern African Hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#rooms" className="shimmer bg-gold text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Explore Our Suites <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#experience" className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                The Experience
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Grid */}
      <section id="experience" className="py-32 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">The JB Experience</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExperienceCard 
              icon={Bed}
              title="Premium Comfort"
              description="Luxury suites designed for the modern traveler, featuring high-end amenities and serene aesthetics."
            />
            <ExperienceCard 
              icon={Wine}
              title="Snooker & Lounge"
              description="Relax and unwind in our elite lounge. The perfect spot for networking and premium relaxation."
            />
            <ExperienceCard 
              icon={Music}
              title="Live Shows"
              description="Vibrant entertainment and nightlife. Experience the best live performances in Ogun State."
            />
            <ExperienceCard 
              icon={Calendar}
              title="Event Excellence"
              description="The perfect venue for your parties, weddings, and corporate events with world-class service."
            />
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section id="rooms" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Our Luxury Suites</h2>
              <p className="text-gray-400 text-lg">Choose from our curated selection of rooms, each designed to provide an international 5-star experience.</p>
            </div>
            <div className="text-gold font-bold tracking-widest uppercase text-sm border-b border-gold pb-2">
              View All Accommodations
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <RoomCard 
              title="Standard Room"
              price="From ₦25,000"
              image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800"
              features={["King Size Bed", "High-speed WiFi", "Smart TV", "24/7 Power"]}
            />
            <RoomCard 
              title="Deluxe Suite"
              price="From ₦45,000"
              image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
              features={["Mini Bar", "City View", "Premium Toiletries", "Breakfast Included"]}
            />
            <RoomCard 
              title="Executive Suite"
              price="From ₦75,000"
              image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
              features={["Private Lounge", "Jacuzzi", "Personal Concierge", "Airport Pickup"]}
            />
          </div>
        </div>
      </section>

      {/* Quick Book Section */}
      <section id="booking" className="py-32 px-6 bg-gold">
        <div className="max-w-5xl mx-auto glass bg-black/90 p-12 md:p-20 rounded-[3rem] text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Ready for your stay?</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Book your room in seconds. Choose your preferred method of contact and our team will handle the rest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://wa.me/2348000000000" 
              className="flex items-center justify-center gap-4 bg-gold text-black py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-8 h-8" />
              WhatsApp Booking
            </a>
            <a 
              href="mailto:bookings@jbhotel.com" 
              className="flex items-center justify-center gap-4 border-2 border-gold text-gold py-6 rounded-2xl font-bold text-xl hover:bg-gold hover:text-black transition-all"
            >
              <Mail className="w-8 h-8" />
              Email Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-32 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Find Us</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Atan Road, Ado/Odo Ota,<br />
                    Ogun State, Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <p className="text-gray-400">+234 800 000 0000</p>
                  <p className="text-gray-400">+234 900 000 0000</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email</h4>
                  <p className="text-gray-400">info@jbhotel.com</p>
                  <p className="text-gray-400">bookings@jbhotel.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] rounded-3xl overflow-hidden glass">
            {/* Placeholder for Map */}
            <div className="w-full h-full bg-white/5 flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
                alt="Map View" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <MapPin className="w-16 h-16 text-gold mb-6" />
                <h3 className="text-2xl font-serif mb-4">Visit JB Hotel & Suites</h3>
                <p className="text-gray-400">Experience the pinnacle of luxury in Ogun State.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-serif font-bold">
            JB <span className="text-gold">HOTEL</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2026 JB Hotel & Suites. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
