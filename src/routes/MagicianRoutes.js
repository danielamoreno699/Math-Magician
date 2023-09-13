import { Navigate, Route, Routes } from 'react-router-dom';
import Calculator from '../components/calculator/calculator';
import Home from '../components/home';
import Quotes from '../components/quotes';
import MyNavbar from '../components/navbar';

const MagicianRoutes = () => (
  <>
    <MyNavbar />

    <div className="container">
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />

        <Route path="Quotes" element={<Quotes />} />

        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>

    </div>

  </>

);

export default MagicianRoutes;
