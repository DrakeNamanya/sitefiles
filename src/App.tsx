import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import SurveyCalculator from './pages/tools/SurveyCalculator';
import BookMeeting from './pages/tools/BookMeeting';
import RequestQuotation from './pages/tools/RequestQuotation';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:service" element={<ServicesPage />} />
          <Route path="/tools/survey-calculator" element={<SurveyCalculator />} />
          <Route path="/tools/book-meeting" element={<BookMeeting />} />
          <Route path="/tools/request-quotation" element={<RequestQuotation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;