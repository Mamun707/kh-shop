import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Index";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";

function Layout() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;
