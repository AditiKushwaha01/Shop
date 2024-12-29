import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Updated imports
import Navbar from './Components/Navbar/Navbar';

// Import the components for each route
import AboutUs from './Components/AboutUs/AboutUs'; 
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Account from './Components/Account/Account';
import Settings from './Components/Settings/Settings';
import Product from './Components/Product/Product';
import Kart from './Components/Kart/Kart';
import VideoSection from './Components/VideoSection/VideoSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        {/* Updated Route syntax with `element` prop */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/products" element={<Product />} />
        <Route path="/kart" element={<Kart />} />
      </Routes>
      <VideoSection/>
    </Router>
  );
}

export default App;
