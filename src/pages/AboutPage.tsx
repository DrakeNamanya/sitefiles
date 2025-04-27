import React from 'react';
import { Info, Award, Calendar, Users, CheckCircle, Map } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About DataCollectors</h1>
          <p className="text-xl max-w-3xl mx-auto">Uganda's premier data solutions partner helping organizations make informed decisions since 2017.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Info size={28} className="text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                DataCollectors was founded in 2017 by Drake Namanya with a mission to help organizations in Uganda make better decisions through data. What started as a small consulting firm has grown into Uganda's trusted partner for data collection, analysis, and insights.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have worked with dozens of organizations across Uganda and East Africa, from small NGOs to large international organizations, helping them collect, analyze, and visualize data to drive impact.
              </p>
              <p className="text-gray-700">
                Our approach combines local expertise with global best practices, ensuring that our clients receive solutions that are both contextually appropriate and technically sound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Award size={28} className="text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Mission & Values</h2>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Mission</h3>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-700 text-lg italic">
                  "To empower organizations in Uganda with the data and insights they need to make informed decisions, achieve their goals, and create positive impact in their communities."
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h4>
                <p className="text-gray-600">
                  We strive for excellence in all our work, ensuring high-quality data collection, analysis, and reporting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h4>
                <p className="text-gray-600">
                  We uphold the highest ethical standards in our data practices, ensuring confidentiality and accuracy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-gray-600">
                  We continuously seek innovative approaches to data collection and analysis to provide better insights.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h4>
                <p className="text-gray-600">
                  We believe in working closely with our clients to understand their unique needs and contexts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Calendar size={28} className="text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-orange-200"></div>
              
              {/* 2017 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Founded in Kampala</h3>
                      <p className="text-gray-600">
                        DataCollectors was established to provide data solutions to NGOs and businesses in Uganda.
                      </p>
                    </div>
                  </div>
                  <div className="md:mx-4 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="bg-orange-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                      2017
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3 hidden md:block"></div>
                </div>
              </div>
              
              {/* 2019 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 hidden md:block order-1"></div>
                  <div className="md:mx-4 order-2 mb-4 md:mb-0">
                    <div className="bg-orange-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                      2019
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Expanded Services</h3>
                      <p className="text-gray-600">
                        Added GIS mapping and data visualization services to our portfolio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2021 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Major Partnerships</h3>
                      <p className="text-gray-600">
                        Formed strategic partnerships with international organizations and expanded across East Africa.
                      </p>
                    </div>
                  </div>
                  <div className="md:mx-4 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="bg-orange-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                      2021
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3 hidden md:block"></div>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 hidden md:block order-1"></div>
                  <div className="md:mx-4 order-2 mb-4 md:mb-0">
                    <div className="bg-orange-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                      2023
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Transformation</h3>
                      <p className="text-gray-600">
                        Launched online tools and training programs to make data solutions more accessible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Users size={28} className="text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Placeholder for team member image */}
                  <div className="h-full flex items-center justify-center">
                    <span className="text-gray-500">Team Member Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Drake Namanya</h3>
                  <p className="text-orange-500 font-semibold mb-3">Founder & Lead Consultant</p>
                  <p className="text-gray-600 mb-4">
                    Expert in M&E, data science, and social impact measurement with over 10 years of experience.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Placeholder for team member image */}
                  <div className="h-full flex items-center justify-center">
                    <span className="text-gray-500">Team Member Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Sarah Mulindwa</h3>
                  <p className="text-orange-500 font-semibold mb-3">Data Analysis Lead</p>
                  <p className="text-gray-600 mb-4">
                    Statistical analysis expert with experience in SPSS, R, and Python for data analysis.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Our team includes expert data collectors, statisticians, GIS specialists, and M&E professionals, all dedicated to providing excellent data solutions.
              </p>
              <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Work With Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <CheckCircle size={28} className="text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold">Why Choose DataCollectors</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                <p className="text-gray-300">
                  Deep understanding of Uganda's data landscape and cultural context for reliable insights.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="text-gray-300">
                  Rigorous quality control processes to ensure accurate and reliable data.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Customized Solutions</h3>
                <p className="text-gray-300">
                  Tailored approaches to meet the specific needs and constraints of each client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Map size={28} className="text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Where We Work</h2>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg text-center mb-8">
              <p className="text-xl text-gray-700 mb-6">
                While our headquarters are in Kampala, we have conducted projects across all regions of Uganda and in neighboring East African countries.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-semibold text-gray-800">Northern Uganda</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-semibold text-gray-800">Central Uganda</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-semibold text-gray-800">Eastern Uganda</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-semibold text-gray-800">Western Uganda</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Our mobile data collection teams can be deployed anywhere in East Africa to collect high-quality data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;