import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const BookMeeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    meetingType: 'generalConsultation',
    preferredDate: '',
    preferredTime: '',
    additionalDetails: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      // In a real app, send data to backend/Google Calendar API
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const meetingTypes = [
    { id: 'generalConsultation', label: 'General Consultation' },
    { id: 'dataCollection', label: 'Data Collection Services' },
    { id: 'monitoringEvaluation', label: 'Monitoring & Evaluation' },
    { id: 'gisMapping', label: 'GIS & Mapping Services' },
    { id: 'training', label: 'Custom Training' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-6 text-white">
              <h1 className="text-2xl font-bold flex items-center">
                <Calendar className="mr-3" size={28} /> Book a Meeting
              </h1>
              <p className="mt-2">Schedule a consultation with our team to discuss your project</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <User size={18} />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Mail size={18} />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Phone size={18} />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Meeting Type *
                        </label>
                        <select
                          name="meetingType"
                          value={formData.meetingType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          {meetingTypes.map(type => (
                            <option key={type.id} value={type.id}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Schedule Information */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Preferred Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Calendar size={18} />
                          </div>
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Preferred Time *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Clock size={18} />
                          </div>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          >
                            <option value="">Select a time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Details */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Additional Details
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 text-gray-500">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please share any specific topics or questions you'd like to discuss"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-105'}`}
                    >
                      {isLoading ? 'Scheduling...' : 'Schedule Meeting'}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Calendar size={36} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Meeting Request Submitted!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for scheduling a meeting with DataCollectors. We will send you a confirmation email shortly with the Google Meet link and further details.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg inline-block">
                  <p className="text-blue-700">
                    <strong>Meeting Details:</strong><br />
                    Date: {new Date(formData.preferredDate).toLocaleDateString()}<br />
                    Time: {formData.preferredTime}<br />
                    Type: {meetingTypes.find(t => t.id === formData.meetingType)?.label}
                  </p>
                </div>
                <div className="mt-8">
                  <a 
                    href="/" 
                    className="text-blue-600 hover:text-blue-800 font-semibold transition"
                  >
                    Return to Homepage
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;