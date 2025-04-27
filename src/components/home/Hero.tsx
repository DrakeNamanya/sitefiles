import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Informed Decisions Start Here
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          Uganda's premier data solutions partner since 2017—helping NGOs, businesses, and students turn data into impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="#services" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Link>
          <a 
            href="https://wa.me/256701634653" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;