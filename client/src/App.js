import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyerRegistration from './Components/Buyer/BuyerRegistration';
import BuyerLogin from './Components/Buyer/BuyerLogin';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
    <Routes>
      <Route path="/buyer/signup" element={<BuyerRegistration/>}/>
      <Route path="/buyer/login" element={<BuyerLogin/>}/>
    </Routes>
    </BrowserRouter>
   
  
  );
}

export default App;
