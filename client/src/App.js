import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyerRegistration from './Components/Buyer/BuyerRegistration';
import BuyerLogin from './Components/Buyer/BuyerLogin';
import { Toaster } from "react-hot-toast";
import BuyerProfile from './Components/Buyer/BuyerProfile';
import navbar from './Components/common/navbar';
import BuyerViewProfile from './Components/Buyer/BuyerViewProfile';
import Footer from './Components/Buyer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
    <Routes>
      <Route path="/buyer/signup" element={<BuyerRegistration/>}/>
      <Route path="/buyer/login" element={<BuyerLogin/>}/>
      <Route path="/buyer/profile" element={<BuyerProfile/>}/>
  
      <Route path="/buyer/viewprofile1" element={<BuyerViewProfile/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/navbar" element={<navbar/>}/>


    </Routes>
    </BrowserRouter>
   
  
  );
}

export default App;
