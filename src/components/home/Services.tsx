import { Link } from 'react-router-dom';
import { Database, ClipboardCheck, Map, ClipboardCheck as ChalkboardTeacher } from 'lucide-react';

const services = [
  {
    icon: <Database size={36} />,
    title: 'Data Collection & Analysis',
    items: [
      'Surveys & Field Research',
      'SQL Databases',
      'Performance Tracking',
      'Statistical Analysis'
    ],
    link: '/services/data-collection'
  },
  {
    icon: <ClipboardCheck size={36} />,
    title: 'Monitoring & Evaluation',
    items: [
      'Impact Evaluations',
      'Theory of Change',
      'Logframes',
      'Success Story Documentation'
    ],
    link: '/services/monitoring'
  },
  {
    icon: <Map size={36} />,
    title: 'GIS & Visualization',
    items: [
      'GIS Mapping',
      'Interactive Dashboards',
      'Data Visualization',
      'Market Research'
    ],
    link: '/services/gis'
  },
  {
    icon: <ChalkboardTeacher size={36} />,
    title: 'Custom Training',
    items: [
      'Workshops for NGOs',
      'Student Training',
      'Statistical Software',
      'M&E Capacity Building'
    ],
    link: '/services/training'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Data Solutions</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="text-orange-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <ul className="mb-6 text-gray-600 space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-block mt-2 text-orange-500 hover:text-orange-600 font-semibold transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;