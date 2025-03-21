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
import SellerRegistration from './Components/Seller/SellerRegistration';
import AdminLogin from './Components/Admin/AdminLogin';
import SellerSidebar from './Components/Seller/SellerSidebar';
import SellerProfile from './Components/Seller/SellerProfile';
import SellerViewProfile from './Components/Seller/SellerViewProfile';
import Homepage from './Components/common/Homepage';
import Landingcarousal from './Components/Carousal/Landingcarousal';

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
      <Route path="/landingcarousal" element={<Landingcarousal/>}/>
      {/* HomePage */}
      <Route path="/home" element={<Homepage/>} />

      {/* Seller routes */}
      <Route path="/seller/login" element={<SellerLoginComponent/>}/>
      <Route path="/seller/signup" element={<SellerRegistration/>}/>
      <Route path="/seller/sidebar" element={<SellerSidebar/>}/>
      <Route path="/seller/profile" element={<SellerProfile/>}/>
      <Route path="/seller/viewprofile" element={<SellerViewProfile/>}/>

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin/>}/>
      
    </Routes>
    </BrowserRouter>
   
  
  );
}

export default App;
