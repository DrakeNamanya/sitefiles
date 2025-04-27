import { MessageCircle, Linkedin } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed right-5 bottom-5 flex flex-col space-y-4 z-30">
      <a 
        href="https://wa.me/256701634653" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/company/data-collectors-limited" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Visit our LinkedIn page"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;