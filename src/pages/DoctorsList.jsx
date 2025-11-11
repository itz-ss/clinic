// src/pages/DoctorsList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { doctorsData } from "../data/about";
import "../styles/DoctorsList.css";

const DoctorsList = () => {
  return (
    <div className="container py-5 doctors-list">
      <motion.h1
        className="text-center mb-4 doctors-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Specialists
      </motion.h1>

      <motion.p
        className="text-center text-muted mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Meet our team of highly qualified and experienced specialists dedicated to your care.
      </motion.p>

      <div className="row g-4">
        {doctorsData.map((doctor, index) => (
          <div className="col-md-4" key={doctor.id}>
            <motion.div
              className="doctor-card p-4 rounded shadow-sm text-center"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={doctor.image || "/assets/images/default-doctor.jpg"}
                alt={doctor.name}
                className="img-fluid rounded-circle mb-3 doctor-photo"
              />
              <h4 className="doctor-name">{doctor.name}</h4>
              <p className="doctor-title text-muted mb-3">{doctor.title}</p>

              <Link
                to={`/about/${doctor.id}`}
                className="btn btn-primary doctor-btn"
              >
                View Profile
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
