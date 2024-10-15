import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import LogInPage from './pages/LogInPage/LogInPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:gender" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
