// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import TreatmentRoutes from "./TreatmentRoutes";
import DoctorRoutes from "./DoctorRoutes"; // 🩺 add this
import AppointmentForm from "../components/AppointmentForm";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<AppointmentForm />} />
        <Route path="whatsapp" element={<WhatsAppButton />} />
        <Route path="call" element={<CallButton />} />

        {/* 🧠 Dynamic Treatments */}
        <Route path="treatments/*" element={<TreatmentRoutes />} />

        {/* 👨‍⚕️ Doctors routes */}
        <Route path="about/:doctorId" element={<DoctorRoutes />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
