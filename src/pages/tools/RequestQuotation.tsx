import { useState } from 'react';
import { FileText, ArrowRight, Check, Calendar, User, Mail, Phone, MessageSquare, FilePlus } from 'lucide-react';

const RequestQuotation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Organization Info
    name: '',
    email: '',
    phone: '',
    organization: '',
    
    // Project Details
    projectTitle: '',
    projectType: 'dataCollection',
    projectLocation: '',
    projectBudget: '',
    projectTimeline: '',
    
    // Service Requirements
    serviceTypes: [] as string[],
    respondentCount: '',
    deliverables: [] as string[],
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
  
  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          [name]: [...prev[name as keyof typeof prev] as string[], value]
        };
      } else {
        return {
          ...prev,
          [name]: (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        };
      }
    });
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, send data to backend
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  const projectTypes = [
    { id: 'dataCollection', label: 'Data Collection & Analysis' },
    { id: 'monitoring', label: 'Monitoring & Evaluation' },
    { id: 'gisMapping', label: 'GIS & Mapping' },
    { id: 'training', label: 'Custom Training' },
    { id: 'research', label: 'Research Study' },
    { id: 'other', label: 'Other' },
  ];
  
  const serviceOptions = [
    { id: 'survey', label: 'Survey Design & Implementation' },
    { id: 'data', label: 'Data Collection' },
    { id: 'analysis', label: 'Data Analysis' },
    { id: 'visualization', label: 'Data Visualization' },
    { id: 'monitoring', label: 'Monitoring & Evaluation' },
    { id: 'gis', label: 'GIS Mapping' },
    { id: 'training', label: 'Training & Capacity Building' },
    { id: 'impact', label: 'Impact Assessment' },
  ];
  
  const deliverableOptions = [
    { id: 'rawData', label: 'Raw Data Files' },
    { id: 'cleanedData', label: 'Cleaned Dataset' },
    { id: 'report', label: 'Comprehensive Report' },
    { id: 'dashboard', label: 'Interactive Dashboard' },
    { id: 'maps', label: 'GIS Maps' },
    { id: 'presentation', label: 'Presentation Materials' },
    { id: 'training', label: 'Training Materials' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-500 p-6 text-white">
              <h1 className="text-2xl font-bold flex items-center">
                <FileText className="mr-3" size={28} /> Request a Quotation
              </h1>
              <p className="mt-2">Fill out the form below to receive a tailored quote for your project</p>
            </div>

            {!isSubmitted ? (
              <div className="p-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      1
                    </div>
                    <div className={`h-1 w-12 mx-1 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                    <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      2
                    </div>
                    <div className={`h-1 w-12 mx-1 ${step >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                    <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      3
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">Step {step} of 3</div>
                </div>

                <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
                  {/* Step 1: Organization Information */}
                  {step === 1 && (
                    <div className="space-y-6">
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
                              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Organization/Company
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 flex items-center"
                        >
                          Next <ArrowRight size={18} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Project Title *
                          </label>
                          <input
                            type="text"
                            name="projectTitle"
                            value={formData.projectTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Project Type *
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          >
                            {projectTypes.map(type => (
                              <option key={type.id} value={type.id}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Project Location
                          </label>
                          <input
                            type="text"
                            name="projectLocation"
                            value={formData.projectLocation}
                            onChange={handleChange}
                            placeholder="e.g., Kampala, Northern Uganda, etc."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Available Budget Range
                            </label>
                            <select
                              name="projectBudget"
                              value={formData.projectBudget}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                              <option value="">Select budget range</option>
                              <option value="< UGX 1 million">Less than UGX 1 million</option>
                              <option value="UGX 1-3 million">UGX 1-3 million</option>
                              <option value="UGX 3-5 million">UGX 3-5 million</option>
                              <option value="UGX 5-10 million">UGX 5-10 million</option>
                              <option value="> UGX 10 million">More than UGX 10 million</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Project Timeline
                            </label>
                            <select
                              name="projectTimeline"
                              value={formData.projectTimeline}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                              <option value="">Select timeline</option>
                              <option value="< 1 month">Less than 1 month</option>
                              <option value="1-3 months">1-3 months</option>
                              <option value="3-6 months">3-6 months</option>
                              <option value="> 6 months">More than 6 months</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-semibold transition-all duration-300"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 flex items-center"
                        >
                          Next <ArrowRight size={18} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Service Requirements */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Service Requirements</h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Services Required *
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {serviceOptions.map(option => (
                              <div key={option.id} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`service-${option.id}`}
                                  name="serviceTypes"
                                  value={option.id}
                                  checked={formData.serviceTypes.includes(option.id)}
                                  onChange={handleMultiSelectChange}
                                  className="h-4 w-4 text-orange-500 focus:ring-orange-400"
                                />
                                <label htmlFor={`service-${option.id}`} className="ml-2 text-gray-700">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Number of Respondents (if applicable)
                          </label>
                          <input
                            type="text"
                            name="respondentCount"
                            value={formData.respondentCount}
                            onChange={handleChange}
                            placeholder="e.g., 100, 500, etc."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Required Deliverables
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {deliverableOptions.map(option => (
                              <div key={option.id} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`deliverable-${option.id}`}
                                  name="deliverables"
                                  value={option.id}
                                  checked={formData.deliverables.includes(option.id)}
                                  onChange={handleMultiSelectChange}
                                  className="h-4 w-4 text-orange-500 focus:ring-orange-400"
                                />
                                <label htmlFor={`deliverable-${option.id}`} className="ml-2 text-gray-700">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Additional Details
                          </label>
                          <textarea
                            name="additionalDetails"
                            value={formData.additionalDetails}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Please provide any specific requirements, questions, or details about your project that will help us prepare a more accurate quote."
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-semibold transition-all duration-300"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-105'}`}
                        >
                          {isLoading ? 'Submitting...' : 'Submit Request'}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check size={36} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Submitted Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in DataCollectors. Our team will review your requirements and send you a detailed quotation within 24-48 hours.
                </p>
                <div className="bg-orange-50 p-6 rounded-lg mb-8 max-w-md mx-auto text-left">
                  <h3 className="font-semibold text-orange-800 mb-3">What happens next?</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span>Our team will review your project requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span>We'll prepare a detailed quote based on your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span>You'll receive the quote via email within 48 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <span>We'll follow up to discuss and refine the proposal</span>
                    </li>
                  </ol>
                </div>
                <div className="mt-8">
                  <a 
                    href="/" 
                    className="text-orange-600 hover:text-orange-800 font-semibold transition"
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

export default RequestQuotation;