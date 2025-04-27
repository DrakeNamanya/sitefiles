const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team Leader</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-8 text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/drake-namanya.jpg" 
                  alt="Drake Namanya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">Drake Namanya</h3>
              <p className="text-orange-500 font-semibold mb-4">M&E and Data Strategy Consultant</p>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in monitoring & evaluation, data science, community development, and social problem-solving, Drake is passionate about leveraging data and innovation to tackle critical social challenges.
              </p>
              <p className="text-gray-700 font-semibold mb-6">
                <strong>Education:</strong> MSc in Data Science, MBA in Social Entrepreneurship, BSc in Quantitative Economics
              </p>
              <a 
                href="https://www.linkedin.com/company/data-collectors-limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;