// src/routes/DoctorRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorsList from "../pages/DoctorsList"; // optional doctors overview page
import About from "../pages/About"; // your dynamic single doctor page

const DoctorRoutes = () => {
  return (
    <Routes>
      {/* 🧾 All doctors listing page */}
      <Route index element={<DoctorsList />} />

      {/* 🩺 Dynamic individual doctor page */}
      <Route path=":doctorId" element={<About />} />
    </Routes>
  );
};

export default DoctorRoutes;
