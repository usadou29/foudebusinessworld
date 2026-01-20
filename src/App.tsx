import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import LanguageLayout from './components/LanguageLayout';
import MainLayout from './components/layout/MainLayout';
import WhyUs from './pages/WhyUs';
import CountryHub from './pages/countries/CountryHub';
import CountryDetail from './pages/countries/CountryDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Programs from './pages/Programs';

function RootRedirect() {
  const { i18n } = useTranslation();
  const targetLang = i18n.language || 'fr';
  return <Navigate to={`/${targetLang}`} replace />;
}

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl text-brand-gold font-serif mb-4">{title}</h1>
    <p className="text-gray-400">Content coming soon in Module 4.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/:lang" element={<LanguageLayout />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* V1 Public Routes */}
            <Route path="why-us" element={<WhyUs />} />
            <Route path="countries" element={<CountryHub />} />
            <Route path="countries/:slug" element={<CountryDetail />} />

            <Route path="services" element={<Services />} />
            <Route path="programs" element={<Programs />} />
            <Route path="resources" element={<PlaceholderPage title="Resources & Blog" />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<PlaceholderPage title="Member Area" />} />

            {/* Catch all for 404 inside layout */}
            <Route path="*" element={
              <div className="flex items-center justify-center py-40">
                <h1 className="text-2xl text-white">404 - Page Not Found</h1>
              </div>
            } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
