// src/components/TreatmentPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import AppointmentForm from "./AppointmentForm";
import "../styles/treatmentPage.css";

const TreatmentPage = () => {
  const { pathname } = useLocation();

  // ✅ Combine all treatments (spine + brain)
  const allTreatments = [...servicesData.spine, ...servicesData.brain];

  // ✅ Match current route to data (based on `to`)
  const treatment = allTreatments.find((item) => item.to === pathname);

  // 🚨 Fallback if no treatment found
  if (!treatment) {
    return (
      <div className="treatment-not-found text-center py-5">
        <h2>Treatment Not Found</h2>
        <p className="text-muted">
          Please check the URL or go back to the services page.
        </p>
      </div>
    );
  }

  return (
    <div className="treatment-page">
      {/* 🟦 Banner Section */}
      <div
        className="treatment-banner"
        style={{
          backgroundImage: `url(${treatment.image || "/assets/images/banner-placeholder.jpg"})`,
        }}
      >
        <div className="banner-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="banner-title"
          >
            {treatment.label}
          </motion.h1>
        </div>
      </div>

      {/* 🟨 Main Content */}
      <div className="container py-5">
        <motion.div
          className="treatment-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="treatment-image-wrapper">
            <img
              src={treatment.image}
              alt={treatment.label}
              className="img-fluid rounded shadow-sm"
            />
          </div>

          <div className="treatment-description">
            <h2>{treatment.label}</h2>
            <p className="lead text-muted">{treatment.description}</p>
          </div>
        </motion.div>

        {/* 🩻 Common Conditions */}
        {treatment.commonConditions && (
          <motion.div
            className="conditions-section mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Common Conditions Treated</h4>
            <ul className="condition-list">
              {treatment.commonConditions.map((cond, i) => (
                <li key={i}>{cond}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* ⚙️ Additional Treatment Options */}
        {treatment.treatmentOptions && (
          <motion.div
            className="options-section mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Additional Treatment Options</h4>
            <div className="options-content">
              <div className="option-block">
                <h5>Non-Surgical</h5>
                <p>{treatment.treatmentOptions.nonSurgical}</p>
              </div>
              <div className="option-block">
                <h5>Surgical</h5>
                <p>{treatment.treatmentOptions.surgical}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* 📅 Appointment Form */}
        <div className="appointment-section mt-5">
          <h4>Book a Consultation</h4>
          <AppointmentForm serviceName={treatment.label} />
        </div>
      </div>
    </div>
  );
};

export default TreatmentPage;
