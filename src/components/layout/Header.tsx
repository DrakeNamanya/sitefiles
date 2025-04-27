import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/data-collectors-logo.png" alt="Data Collectors" className="h-12" />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <button 
                onClick={scrollToServices}
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Services
              </button>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50">
            <div className="flex justify-end p-4">
              <button 
                className="text-white"
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="text-white text-xl block"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      toggleMenu();
                      scrollToServices();
                    }}
                    className="text-white text-xl block w-full text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-white text-xl block"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-white text-xl block"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;