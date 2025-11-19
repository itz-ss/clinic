import React from "react";
import { motion } from "framer-motion";
import "../styles/TechnologySection.css";

function TechnologySection() {
  return (
    <section className="technology-section">
      <div className="tech-container">
        <motion.div
          className="tech-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="tech-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technology
          </motion.h4>

          <motion.h1
            className="tech-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            World Class Technology for Faster And Safer Healing
          </motion.h1>

          <motion.p
            className="tech-description mx-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           We use the latest medical technology to make your treatment safer, simpler, and faster.
Our advanced systems help us diagnose problems accurately and treat them with minimal discomfort.

From endoscopic spine surgery tools that require only a tiny incision, to digital imaging and monitoring systems that track every detail with precision — we invest in technology that truly benefits our patients.

This means:
<ul>
    <li>Less pain</li>
  <li>Smaller cuts</li>
  <li>Faster recovery</li>
  <li> Early return to normal life</li>
</ul>

Modern treatment isn’t just about machines —<i>it’s about better outcomes. And that’s what we focus on.</i> 
          </motion.p>
        </motion.div>

        <motion.div
          className="tech-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/technology.jpg"
            alt="Advanced Spine Technology"
            className="tech-image"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default TechnologySection;
