import { Link } from 'react-router-dom';
import { Calculator, FileText, Calendar } from 'lucide-react';

const Tools = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Try Our Tools</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Link 
            to="/tools/survey-calculator" 
            className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:transform hover:scale-105"
          >
            <Calculator size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Survey Calculator</h3>
            <p className="text-gray-600 mb-4">Estimate costs for your data collection projects</p>
          </Link>
          
          <Link 
            to="/tools/request-quotation" 
            className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:transform hover:scale-105"
          >
            <FileText size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Request a Quotation</h3>
            <p className="text-gray-600 mb-4">Get a customized price quote for your project</p>
          </Link>
          
          <Link 
            to="/tools/book-meeting" 
            className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:transform hover:scale-105"
          >
            <Calendar size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Book a Meeting</h3>
            <p className="text-gray-600 mb-4">Schedule a consultation with our team</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tools;