import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import LanguageLayout from './components/LanguageLayout';

function RootRedirect() {
  const { i18n } = useTranslation();
  // Redirect to current i18n language (which detected browser lang on init)
  // or fallback to 'fr'
  const targetLang = i18n.language || 'fr';
  return <Navigate to={`/${targetLang}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<div className="p-10 text-white">About Page (Placeholder)</div>} />
          <Route path="*" element={
            <div className="flex items-center justify-center h-screen text-white">
              <h1 className="text-2xl">404 - Page Not Found</h1>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
