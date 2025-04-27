import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, User, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">We'd love to hear from you. Reach out to discuss your data needs or just to say hello.</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-6">
                    Whether you're looking to start a new data project, need assistance with an existing one, or want to learn more about our services, our team is here to help.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Mail className="text-orange-500 mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Email Us</p>
                        <a href="mailto:drnamanya@gmail.com" className="text-blue-600 hover:underline">
                          drnamanya@gmail.com
                        </a>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <Phone className="text-orange-500 mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Call or WhatsApp</p>
                        <a href="tel:+256701634653" className="text-gray-600 block">+256 701 634653</a>
                        <p className="text-sm text-gray-500">Monday to Friday, 9am to 5pm</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <MapPin className="text-orange-500 mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Office Location</p>
                        <p className="text-gray-600">Kampala, Uganda</p>
                        <p className="text-sm text-gray-500">Available for meetings by appointment</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Response Guaranteed</h3>
                  <p className="text-gray-600">
                    We aim to respond to all inquiries within 24 hours. For urgent matters, please contact us via WhatsApp for the fastest response.
                  </p>
                  <a 
                    href="https://wa.me/256701634653" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition"
                  >
                    <MessageSquare size={18} className="mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-orange-500 p-4 text-white">
                  <h2 className="text-xl font-semibold">Send us a Message</h2>
                </div>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <User size={18} />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Mail size={18} />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Phone size={18} />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 text-gray-500">
                            <MessageSquare size={18} />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isLoading ? (
                            'Sending...'
                          ) : (
                            <>
                              <Send size={18} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Send size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out to us. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          message: '',
                        });
                      }}
                      className="text-orange-500 hover:text-orange-600 font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What areas of Uganda do you serve?</h3>
                <p className="text-gray-600">
                  We serve all regions of Uganda, including remote areas. Our mobile teams can be deployed anywhere in the country to collect data.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How much do your services cost?</h3>
                <p className="text-gray-600">
                  Our pricing varies based on project scope, complexity, and location. We offer customized quotes for each project. You can use our <a href="/tools/survey-calculator" className="text-blue-600 hover:underline">Survey Calculator</a> to get a rough estimate or <a href="/tools/request-quotation" className="text-blue-600 hover:underline">request a detailed quotation</a>.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Do you work with international organizations?</h3>
                <p className="text-gray-600">
                  Yes, we have extensive experience working with international NGOs, research institutions, and development organizations operating in Uganda and East Africa.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Can you help with data analysis if we've already collected the data?</h3>
                <p className="text-gray-600">
                  Absolutely! We offer standalone data analysis services if you've already collected your data but need help with cleaning, analysis, or visualization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;