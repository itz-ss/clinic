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

          <motion.h2
            className="tech-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Advanced Technology & Personalized Care
          </motion.h2>

          <motion.p
            className="tech-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Using the latest spine surgery tools and techniques,{" "}
            <strong>Dr. Guha</strong> ensures precise treatment tailored to each
            patient's unique needs. At the best spine clinic in Siliguri, North
            Bengal, he offers <strong>minimally invasive procedures</strong> that
            promote faster recovery and lasting relief.
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
            src="/assets/images/images.webp"
            alt="Advanced Spine Technology"
            className="tech-image"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default TechnologySection;
