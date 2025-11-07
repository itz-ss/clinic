import React from "react";
import { motion } from "framer-motion";
import "../styles/KnowledgePartners.css";

const partners = [
  {
    name: "Manipal Hospitals",
    logo: "/assets/images/manipal.png",
    link: "https://www.manipalhospitals.com/",
  },
  {
    name: "AIIMS",
    logo: "/assets/images/aiims.png",
    link: "https://www.aiims.edu/",
  },
  {
    name: "Apollo Hospitals",
    logo: "/assets/images/apollo.png",
    link: "https://www.apollohospitals.com/",
  },
  {
    name: "Medanta",
    logo: "/assets/images/medanta.png",
    link: "https://www.medanta.org/",
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
          Dr. Guha collaborates with India’s top medical organizations to bring
          world-class spine treatment, advanced surgical techniques, and
          evidence-based patient care to Siliguri and North Bengal.
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
