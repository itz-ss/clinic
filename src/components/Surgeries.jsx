import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { surgeriesInfo } from "../data/surgeriesInfo";
import "../styles/Surgeries.css";

function Surgeries() {
  const { subtitle, title, description, surgeries } = surgeriesInfo;

  return (
    <section className="surgeries-section">
      <motion.div
        className="surgeries-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h5 className="surgeries-subtitle">{subtitle}</h5>
        <h2 className="surgeries-title">{title}</h2>
        <p className="surgeries-desc">{description}</p>
      </motion.div>

      <div className="surgeries-grid">
        {surgeries.map((surgery, index) => (
          <motion.div
            key={index}
            className="surgery-card-premium"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={surgery.link}>
              <div className="surgery-img-container">
                <img
                  src={surgery.image}
                  alt={surgery.name}
                  className="surgery-img"
                  loading="lazy"
                />
              </div>
              <div className="surgery-card-body">
                <h4>{surgery.name}</h4>
                <p>{surgery.summary}</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Surgeries;
