import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl">404 - Page Not Found</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
