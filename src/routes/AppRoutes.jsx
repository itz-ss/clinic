// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import TreatmentRoutes from "./TreatmentRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact" element={<Contact />} />

        {/* 🧠 Dynamic Treatments */}
        <Route path="treatments/*" element={<TreatmentRoutes />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
