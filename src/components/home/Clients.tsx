import { Building2, Building, GraduationCap, Store, School } from 'lucide-react';

const Clients = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by Organizations Driving Change
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="bg-gray-100 p-6 w-40 h-20 flex flex-col items-center justify-center rounded-lg">
            <Building2 size={24} className="text-gray-500 mb-2" />
            <span className="text-gray-500 font-semibold">Government</span>
          </div>
          <div className="bg-gray-100 p-6 w-40 h-20 flex flex-col items-center justify-center rounded-lg">
            <Building size={24} className="text-gray-500 mb-2" />
            <span className="text-gray-500 font-semibold">Private Sector</span>
          </div>
          <div className="bg-gray-100 p-6 w-40 h-20 flex flex-col items-center justify-center rounded-lg">
            <GraduationCap size={24} className="text-gray-500 mb-2" />
            <span className="text-gray-500 font-semibold">Education NGO</span>
          </div>
          <div className="bg-gray-100 p-6 w-40 h-20 flex flex-col items-center justify-center rounded-lg">
            <Store size={24} className="text-gray-500 mb-2" />
            <span className="text-gray-500 font-semibold">Local Business</span>
          </div>
          <div className="bg-gray-100 p-6 w-40 h-20 flex flex-col items-center justify-center rounded-lg">
            <School size={24} className="text-gray-500 mb-2" />
            <span className="text-gray-500 font-semibold">University</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 italic mb-4">
            "DataCollectors' M&E plans helped us secure donor funding—their local expertise in Uganda's development landscape is unmatched!"
          </p>
          <div className="font-semibold text-gray-800">— Uganda Community Health Initiative</div>
        </div>
      </div>
    </section>
  );
};

export default Clients;