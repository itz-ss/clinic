import React from "react";
import { motion } from "framer-motion";
import "../styles/KnowledgePartners.css";

const partners = [
  {
    name: "Raj Bharti Medical Foundation",
    logo: "/assets/associatedLogo/raj-bharti-medical-foundation.png",
    link: "https://neurospine.in/raj-bharti-medical-foundation",
  },
  {
    name: "Lucknow Neuro Club",
    logo: "/assets/associatedLogo/Lucknow-Neuro-Club.png",
    link: "#",
  },
  {
    name: "Medanta Hospital",
    logo: "/assets/associatedLogo/MEDANTA.png",
    link: "https://www.medanta.org/hospitals-near-me/lucknow-hospital",
  },
  {
    name: "NSSA",
    logo: "/assets/associatedLogo/NSSA.png",
    link: "https://nssa-india.com/",
  },
];

function KnowledgePartners() {
  return (
    <section className="partners-section">
      <motion.div
        className="partners-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h4 className="partners-subtitle">Knowledge Partners</h4>
        <h2 className="partners-title">
          Trusted Collaborations with Leading Healthcare Institutions
        </h2>
        <p className="partners-description">
          Dr. Achal collaborates with India’s top medical organizations to bring
          world-class spine treatment, advanced surgical techniques, and
          evidence-based patient care to Lucknow, Uttar Pradesh.
        </p>
      </motion.div>

      <motion.div
        className="partners-logos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
      >
        {partners.map((partner, index) => (
          <motion.a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default KnowledgePartners;
