import { MapPin, GitBranch, GraduationCap, MessageSquare } from 'lucide-react';

const reasons = [
  {
    icon: <MapPin size={32} className="text-orange-500" />,
    title: 'Local Expertise',
    description: '7+ years serving Ugandan clients with culturally appropriate solutions.'
  },
  {
    icon: <GitBranch size={32} className="text-orange-500" />,
    title: 'End-to-End Solutions',
    description: 'From data collection to impact stories—we handle your entire data journey.'
  },
  {
    icon: <GraduationCap size={32} className="text-orange-500" />,
    title: 'Affordable Training',
    description: 'Customized workshops for NGOs and students at competitive rates.'
  },
  {
    icon: <MessageSquare size={32} className="text-orange-500" />,
    title: 'Quick Support',
    description: 'Responsive communication via WhatsApp and email.'
  }
];

const WhyUs = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose DataCollectors?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;