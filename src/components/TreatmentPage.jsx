import React from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import AppointmentForm from "./AppointmentForm";
import "../styles/treatmentPage.css";

const TreatmentPage = () => {
  const { pathname } = useLocation();

  // Combine all treatments
  const allTreatments = [...servicesData.spine, ...servicesData.brain];
  const treatment = allTreatments.find((item) => item.to === pathname);

  // Handle invalid route
  if (!treatment) {
    return (
      <div className="treatment-not-found text-center py-5">
        <h2>Treatment Not Found</h2>
        <p className="text-muted">Please check the URL or go back to the Services page.</p>
      </div>
    );
  }

  return (
    <div className="treatment-page">
      {/* 🟦 Banner Section */}
      <motion.div
        className="treatment-banner"
        style={{
          backgroundImage: `url(${treatment.banner || "/assets/images/banner-placeholder.jpg"})`,
        }}
        initial={{ backgroundPositionY: "50%", opacity: 0 }}
        animate={{ backgroundPositionY: "40%", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
      </motion.div>

      {/* 🟨 Main Section */}
      <div className="container py-0">
        {/* SECTION 1 — Image Left | Text Right */}
        <motion.section
          className="treatment-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-md-6">
              <motion.img
                src={treatment.image}
                alt={treatment.label}
                className="img-fluid rounded shadow treatment-image"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Description */}
            <div className="col-md-6">
              <h2 className="treatment-title">{treatment.label}</h2>
              <p className="treatment-desc">{treatment.description}</p>

              {/* Common Conditions */}
              {treatment.commonConditions && (
                <div className="mt-4">
                  <h4 className="sub-title">Common Conditions Treated</h4>
                  <ul className="condition-list">
                    {treatment.commonConditions.map((cond, i) => (
                      <li key={i}>{cond}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 — Text Left | Appointment Form Right */}
        <motion.section
          className="treatment-section reverse mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">
            {/* Treatment Options */}
            <div className="col-md-6">
              {treatment.treatmentOptions && (
                <>
                  <h4 className="sub-title">Additional Treatment Options</h4>
                  <div className="options-content">
                    {/* 🩺 Non-Surgical Treatments */}
                    <div className="option-block">
                      <h5>Non-Surgical</h5>
                      <ul className="treatment-list">
                        {treatment.treatmentOptions.nonSurgical
                          .split(/[.,;•-]\s*/g) // ✅ Split sentences into list items
                          .filter(Boolean)
                          .map((item, i) => (
                            <li key={i}>{item.trim()}</li>
                          ))}
                      </ul>
                    </div>
                    
                    {/* 🧠 Surgical Treatments */}
                    <div className="option-block">
                      <h5>Surgical</h5>
                      <ul className="treatment-list">
                        {treatment.treatmentOptions.surgical
                          .split(/[.,;•-]\s*/g)
                          .filter(Boolean)
                          .map((item, i) => (
                            <li key={i}>{item.trim()}</li>
                          ))}
                      </ul>
                    </div>
                    <img src="/assets/banner/Website-banner.jpg" className="add-banner"/>
                  </div>

                </>
              )}
            </div>

            <div className="col-md-6  align-items-stretch">
              <motion.div
                className="appointment-box w-100 d-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                style={{ display: "block" }}
              >
                <AppointmentForm serviceName={treatment.label} />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TreatmentPage;
