// src/pages/About.jsx
import React from "react";
import SEO from "../components/SEO";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { doctorInfo } from "../data/doctorInfo";
import "../styles/About.css";

function About() {
  const sectionImages = [
    "/assets/images/doctor-biography.jpg",
    "/assets/images/education.jpg",
    "/assets/images/experience.jpg",
    "/assets/images/publications.jpg",
    "/assets/images/interests.jpg",
    "/assets/images/associations.jpg",
    "/assets/images/workshops.jpg",
  ];

  const renderSection = (title, content, index) => {
    const isReversed = index % 2 !== 0;

    return (
      <motion.section
        key={index}
        className={`about-section ${isReversed ? "reverse" : ""}`}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Row className="align-items-center my-5">
          {/* Image with slight parallax movement */}
          <Col md={6} className="image-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.img
                src={sectionImages[index]}
                alt={`${title}`}
                className="about-image"
                whileHover={{ scale: 1.02 }}
                whileInView={{ y: [40, 0] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>
          </Col>

          <Col md={6} className="text-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>{title}</h3>
              {Array.isArray(content)
                ? content.map((item, i) => <p key={i}>{item}</p>)
                : content}
            </motion.div>
          </Col>
        </Row>
      </motion.section>
    );
  };

  return (
    <>
      <SEO
        title="Dr. Achal Gupta | About the Spine Specialist"
        description="Learn more about Dr. Achal Gupta, a highly qualified spine and brain surgeon specializing in minimally invasive and endoscopic spine surgery."
        keywords="about doctor, spine surgeon, brain surgeon, Dr. Achal Gupta"
      />

      <Container className="about-container py-5">
        <div className="text-center mb-5">
          <motion.h1
            className="about-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {doctorInfo.name}
          </motion.h1>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {doctorInfo.title}
          </motion.p>
        </div>

        {renderSection("Biography", doctorInfo.biography, 0)}
        {renderSection(
          "Education",
          doctorInfo.education.map((edu) => (
            <p key={edu.degree}>
              <strong>{edu.degree}</strong> – {edu.institution}
            </p>
          )),
          1
        )}
        {renderSection(
          "Experience",
          doctorInfo.experience.map((exp) => (
            <p key={exp.title}>
              <strong>{exp.title}</strong> – {exp.organization}
            </p>
          )),
          2
        )}
        {renderSection(
          "Publications",
          doctorInfo.publications.map((pub) => (
            <p key={pub.citation}>
              {pub.citation}{" "}
              <a href={pub.link} target="_blank" rel="noreferrer">
                Read More
              </a>
            </p>
          )),
          3
        )}
        {renderSection(
          "Special Interests",
          <ul>
            {doctorInfo.interests.map((interest, i) => (
              <li key={i}>{interest}</li>
            ))}
          </ul>,
          4
        )}
        {renderSection(
          "Associations",
          <ul>
            {doctorInfo.associations.map((assoc, i) => (
              <li key={i}>{assoc}</li>
            ))}
          </ul>,
          5
        )}
        {renderSection(
          "Courses & Workshops",
          <ul>
            {doctorInfo.courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>,
          6
        )}
      </Container>
    </>
  );
}

export default About;
