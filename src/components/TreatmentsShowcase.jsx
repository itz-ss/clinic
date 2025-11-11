import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import "../styles/TreatmentsShowcase.css";

const TreatmentsShowcase = () => {
  const navigate = useNavigate();

  // Combine all treatments
  const allTreatments = [
    ...servicesData.spine.map((t) => ({ ...t, category: "Dr. Achal Gupta" })),
    ...servicesData.brain.map((t) => ({ ...t, category: "Dr. Konika Bansal" })),
  ];

  return (
    <section className="treatments-showcase">
      <div className="particle-bg">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Our Treatments
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose from specialized treatments guided by expert neurosurgeons.
        </motion.p>

        <div className="treatments-grid">
          {allTreatments.map((treatment, i) => (
            <motion.div
              key={i}
              className="treatment-card framed"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => navigate(treatment.to)}
            >
              <div className="photo-frame">
                <img
                  src={treatment.image}
                  alt={treatment.label}
                  className="treatment-image"
                  loading="lazy"
                />
              </div>

              <div className="card-info">
                <h5 className="treatment-name">{treatment.label}</h5>
                {/* <p className="doctor-name">{treatment.category}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsShowcase;
