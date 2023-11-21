import React, { useEffect } from "react";
// import {Route, Link, Routes, } from 'react-router-dom';
import "../src/App.css";
import { BrowserRouter, Routes, Route, useNavigate,Navigate } from "react-router-dom"; // Import useNavigate from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import NoPage from "./Pages/NoPage";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import SingleProduct from "./Pages/SingleProduct";
import { ProductsFetch } from "../Features/ProductSlice";
import CheckoutSucess from "./Components/CheckoutSucess";
import Dashboard from "./Admin/Dashboard";
import Ad_products from "./Admin/Ad_products";
import Summary from "./Admin/Summary";
import Pro from "./Pages/Pro";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Herosection from "./Components/Herosection";
// import AD_pro from "./Admin/AD_pro";
// stripe listen --forward-to localhost:5000/api/stripe/webhook
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/checkout-success" element={<CheckoutSucess />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/about" element={<Herosection/>} />
        {/* <Route path="/adpro" element={<AD_pro/>}/> */}
        <Route path="*" element={<NoPage />} />
  
          <Route path="/admin" element={<Dashboard/>}>
          <Route index element={<Summary />} />
          <Route path="Ad_products" element={<Ad_products />}></Route>
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
