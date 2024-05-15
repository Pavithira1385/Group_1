
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Routeinfo from "views/examples/Routeinfo";
import Home from "views/examples/Home";
import Signin from 'views/examples/Signin';
import Rating from 'views/examples/RatingPage';
import Rent from 'views/examples/Rent';
import Places from 'views/examples/Places';
import Terms from 'views/examples/Terms';
import AdminDashboard from "views/examples/AdminDashboard";
import VehicleHireForm from "views/examples/VehicleHireForm";
import Loginadmin from 'views/examples/Loginadmin';
import ContactUs from "views/examples/ContactUs";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/route" element={<Routeinfo />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/sign" element={<Signin/>} />
      <Route path="/Rating" element={<Rating/>}/>
      <Route path="/Rent" element={<Rent/>}/>
      <Route path="/Places" element={<Places/>}/>
      <Route path="/Terms" element={<Terms/>}/>
      <Route path="/Admin" element={<AdminDashboard/>}/>
      <Route path="/Rentform" element={<VehicleHireForm/>}/>
      <Route path="/Loginadmin" element={<Loginadmin/>}/>
      <Route path="/Contact" element={<ContactUs/>}/>
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
