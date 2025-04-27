import React from 'react';
import { useParams } from 'react-router-dom';
import { Database, ClipboardCheck, Map, ClipboardCheck as ChalkboardTeacher, Check } from 'lucide-react';

const ServicesPage = () => {
  const { service } = useParams<{ service: string }>();
  
  const servicesData = {
    'data-collection': {
      title: 'Data Collection & Analysis',
      icon: <Database size={36} className="text-orange-500" />,
      description: 'Comprehensive data collection services using modern methodologies and tools to gather actionable insights.',
      benefits: [
        'High-quality data collection across Uganda',
        'Mobile data collection using tablets/phones',
        'Robust sampling methodologies',
        'Data cleaning and validation',
        'Statistical analysis and reporting',
        'Customized data collection tools'
      ],
      features: [
        {
          title: 'Survey Design & Implementation',
          description: 'Professional survey design based on research objectives, including questionnaire development, sampling strategy, and data collection protocols.'
        },
        {
          title: 'Mobile Data Collection',
          description: 'Efficient data collection using mobile devices, reducing errors and enabling real-time data monitoring and quality control.'
        },
        {
          title: 'Data Cleaning & Processing',
          description: 'Thorough data cleaning to identify and correct errors, ensuring high-quality datasets for analysis.'
        },
        {
          title: 'Statistical Analysis',
          description: 'Comprehensive data analysis using statistical methods appropriate for your research questions and data types.'
        }
      ]
    },
    'monitoring': {
      title: 'Monitoring & Evaluation',
      icon: <ClipboardCheck size={36} className="text-orange-500" />,
      description: 'Comprehensive M&E services to help organizations track progress, measure outcomes, and demonstrate impact.',
      benefits: [
        'Results-based M&E frameworks',
        'Impact evaluation design',
        'Baseline, midline, and endline surveys',
        'Performance indicator tracking',
        'Donor reporting support',
        'Success story documentation'
      ],
      features: [
        {
          title: 'M&E Framework Development',
          description: 'Custom M&E frameworks aligned with your organization\'s goals, including logical frameworks, theories of change, and key performance indicators.'
        },
        {
          title: 'Impact Evaluations',
          description: 'Rigorous impact evaluation designs to measure the effects of your programs and interventions.'
        },
        {
          title: 'Performance Monitoring',
          description: 'Ongoing monitoring of project activities and outputs to track progress and identify areas for improvement.'
        },
        {
          title: 'M&E System Setup',
          description: 'Design and implementation of M&E systems, including data collection tools, databases, and reporting templates.'
        }
      ]
    },
    'gis': {
      title: 'GIS & Visualization',
      icon: <Map size={36} className="text-orange-500" />,
      description: 'Geographic Information Systems (GIS) mapping and data visualization services to transform complex data into clear visual insights.',
      benefits: [
        'Spatial data collection and analysis',
        'Interactive web maps',
        'Project area mapping',
        'Thematic mapping',
        'Location-based insights',
        'Visual storytelling with data'
      ],
      features: [
        {
          title: 'Field-Based GIS Data Collection',
          description: 'Collection of geo-referenced data in the field, including points of interest, boundaries, and spatial attributes.'
        },
        {
          title: 'Thematic Mapping',
          description: 'Creation of thematic maps that visualize data patterns across geographic areas.'
        },
        {
          title: 'Interactive Dashboards',
          description: 'Development of interactive web-based dashboards that allow users to explore spatial data.'
        },
        {
          title: 'Spatial Analysis',
          description: 'Analysis of spatial relationships and patterns to identify trends and insights.'
        }
      ]
    },
    'training': {
      title: 'Custom Training',
      icon: <ChalkboardTeacher size={36} className="text-orange-500" />,
      description: 'Tailored training programs to build capacity in data collection, analysis, M&E, and GIS for organizations and individuals.',
      benefits: [
        'Hands-on practical training',
        'Customized curriculum',
        'Expert trainers',
        'Post-training support',
        'Group or individual options',
        'Certificate of completion'
      ],
      features: [
        {
          title: 'Data Analysis Software Training',
          description: 'Practical training on data analysis software such as SPSS, R, Excel, and others tailored to your needs.'
        },
        {
          title: 'M&E Capacity Building',
          description: 'Comprehensive training on M&E concepts, frameworks, and tools for organizations and teams.'
        },
        {
          title: 'Research Methods Training',
          description: 'Training on research methodologies, sampling techniques, and data collection approaches.'
        },
        {
          title: 'GIS and Mapping Workshops',
          description: 'Hands-on workshops on GIS tools and techniques for spatial data collection and visualization.'
        }
      ]
    }
  };

  const selectedService = service ? servicesData[service as keyof typeof servicesData] : null;

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            {selectedService.icon}
          </div>
          <h1 className="text-4xl font-bold mb-4">{selectedService.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{selectedService.description}</p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Key Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedService.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                  <div className="mr-3 text-green-500">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Approach</h2>
            
            <div className="space-y-8">
              {selectedService.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your {selectedService.title.toLowerCase()} needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Contact Us
              </a>
              <a 
                href="/tools/request-quotation" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;