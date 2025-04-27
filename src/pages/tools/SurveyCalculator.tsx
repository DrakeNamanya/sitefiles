import { useState } from 'react';
import { Calculator, Send } from 'lucide-react';

interface CalculationResult {
  costPerSample: number;
  sampleCost: number;
  pageAdjustment: number;
  totalCost: number;
}

const SurveyCalculator = () => {
  const [formData, setFormData] = useState({
    sampleSize: 380,
    numPages: 24,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isGeneratingInvoice, setIsGeneratingInvoice] = useState(false);

  const calculateCost = (sampleSize: number, numPages: number): CalculationResult => {
    const COST_PER_SAMPLE = 44685; // UGX
    const BASE_PAGES = 24;
    const COST_PER_EXTRA_PAGE = 1862; // UGX
    
    // Core sample cost
    const sampleCost = sampleSize * COST_PER_SAMPLE;
    
    // Page adjustment (if > 24 pages)
    const pageAdjustment = Math.max(numPages - BASE_PAGES, 0) * COST_PER_EXTRA_PAGE;
    
    const totalCost = sampleCost + pageAdjustment;
    
    return {
      costPerSample: COST_PER_SAMPLE,
      sampleCost,
      pageAdjustment,
      totalCost,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateCost(formData.sampleSize, formData.numPages);
    setResult(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  const generateInvoice = async () => {
    if (!result) return;

    setIsGeneratingInvoice(true);
    
    try {
      const response = await fetch('/api/generate-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sampleSize: formData.sampleSize,
          numPages: formData.numPages,
          result,
          email: 'drnamanya@gmail.com'
        }),
      });

      if (response.ok) {
        alert('Invoice request sent successfully! We will contact you shortly.');
      } else {
        throw new Error('Failed to send invoice request');
      }
    } catch (error) {
      alert('Failed to generate invoice. Please try again or contact us directly.');
    } finally {
      setIsGeneratingInvoice(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-orange-500 p-6 text-white flex items-center">
            <Calculator className="mr-4" size={32} />
            <h1 className="text-2xl font-bold">Survey Budget Calculator</h1>
          </div>
          
          <div className="p-8">
            <p className="text-gray-600 mb-8">
              Use this calculator to estimate the cost of your data collection project based on our standard rates.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Sample Size
                  </label>
                  <input
                    type="number"
                    name="sampleSize"
                    value={formData.sampleSize}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Questionnaire Pages
                  </label>
                  <input
                    type="number"
                    name="numPages"
                    value={formData.numPages}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Calculate Cost
                </button>
              </div>
            </form>
            
            {result && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cost Breakdown</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">
                      {formData.sampleSize} samples × {formatCurrency(result.costPerSample)}
                    </span>
                    <span className="font-semibold">{formatCurrency(result.sampleCost)}</span>
                  </div>
                  
                  {result.pageAdjustment > 0 && (
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">
                        {formData.numPages - 24} extra pages × UGX 1,862
                      </span>
                      <span className="font-semibold">{formatCurrency(result.pageAdjustment)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-bold text-gray-800">Total Cost</span>
                    <span className="text-2xl font-bold text-orange-600">
                      {formatCurrency(result.totalCost)}
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    onClick={generateInvoice}
                    disabled={isGeneratingInvoice}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center"
                  >
                    <Send size={20} className="mr-2" />
                    {isGeneratingInvoice ? 'Generating...' : 'Generate Invoice'}
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    An invoice request will be sent to our team
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCalculator;