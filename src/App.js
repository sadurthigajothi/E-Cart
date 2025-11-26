import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import mens_banner from './Components/assets/Mens.png';
import womens_banner from './Components/assets/Womens.png';
import kids_banner from './Components/assets/Kids.png';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './Components/Context/ShopContext';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />

          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />

          <Route path="/cart" element={<Cart />} />
           <Route path='/join' element={<LoginSignup/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
