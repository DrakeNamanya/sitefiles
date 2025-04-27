import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <div className="text-xl font-bold">DATA COLLECTORS</div>
              <div className="text-xs text-orange-500">INFORMED DECISIONS</div>
            </div>
            <p className="text-gray-300 mb-4">
              Uganda's premier data and research firm providing exceptional services since 2017.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/data-collectors-limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-orange-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-orange-500 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-300 hover:text-orange-500 transition">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/data-collection" className="text-gray-300 hover:text-orange-500 transition">
                  Data Collection
                </Link>
              </li>
              <li>
                <Link to="/services/monitoring" className="text-gray-300 hover:text-orange-500 transition">
                  M&E Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/gis" className="text-gray-300 hover:text-orange-500 transition">
                  GIS Mapping
                </Link>
              </li>
              <li>
                <Link to="/services/monitoring" className="text-gray-300 hover:text-orange-500 transition">
                  Impact Evaluations
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-300 hover:text-orange-500 transition">
                  Custom Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <a href="mailto:drnamanya@gmail.com" className="text-gray-300 hover:text-orange-500 transition">
                  drnamanya@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <a href="https://wa.me/256701634653" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition">
                  +256 701 634653
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-orange-500" />
                <span className="text-gray-300">Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 DataCollectors Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;