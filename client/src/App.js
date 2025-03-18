import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyerRegistration from './Components/Buyer/BuyerRegistration';
import BuyerLogin from './Components/Buyer/BuyerLogin';
import { Toaster } from "react-hot-toast";
import BuyerProfile from './Components/Buyer/BuyerProfile';
import NavbarComponent from './Components/common/NavbarComponent';
import SellerLoginComponent from './Components/Seller/SellerLoginComponent';
import BuyerViewProfile from './Components/Buyer/BuyerViewProfile';
import Footer from './Components/Buyer/Footer';
import { HomePage } from './Components/common/HomePage';


function App() {
  return (
    <BrowserRouter>
    <Toaster/>
    <Routes>
      {/* Buyer Route */}
      <Route path="/buyer/signup" element={<BuyerRegistration/>}/>
      <Route path="/buyer/login" element={<BuyerLogin/>}/>
      <Route path="/buyer/profile" element={<BuyerProfile/>}/>
      <Route path="/buyer/viewprofile1" element={<BuyerViewProfile/>}/>
      <Route path="/footer" element={<Footer/>}/>


      {/* Common Routes */}
      <Route path="/navbar" element={<NavbarComponent/>}/>
      <Route path='/HomePage'element={<HomePage/>}/>

      {/* Seller routes */}
      <Route path="/seller/login" element={<SellerLoginComponent/>}/>


    </Routes>
    </BrowserRouter>
   
  
  );
}

export default App;
