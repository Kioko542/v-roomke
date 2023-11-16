// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/products';
import Contact from './components/Contact';
import Login from './components/Login'; // Import Login
import ProductList from './components/productList';
import Showcase from './components/Showcase'
import Newsletter from './components/Newsletter'
import Footer from './components/footer'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Contact />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>

        <Showcase />
        <Newsletter />
        <ProductList />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
