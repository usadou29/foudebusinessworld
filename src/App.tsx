import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import LanguageLayout from './components/LanguageLayout';
import MainLayout from './components/layout/MainLayout';

function RootRedirect() {
  const { i18n } = useTranslation();
  const targetLang = i18n.language || 'fr';
  return <Navigate to={`/${targetLang}`} replace />;
}

// Simple Placeholder for pages not yet implemented
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

            {/* V1 Route Placeholders */}
            <Route path="about" element={<PlaceholderPage title="About Us" />} />
            <Route path="services" element={<PlaceholderPage title="Our Services" />} />
            <Route path="programs" element={<PlaceholderPage title="Training Programs" />} />
            <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
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
