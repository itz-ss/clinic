// src/pages/About.jsx
import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { doctorsData } from "../data/about";
import "../styles/About.css";

function About() {
  const { doctorId } = useParams();
  const doctorInfo = doctorsData.find((doc) => doc.id === doctorId);

  // Handle invalid or missing doctor
  if (!doctorInfo) {
    return (
      <div className="text-center py-5">
        <h2>Doctor Not Found</h2>
        <p className="text-muted">Please check the URL or visit the Doctors page.</p>
      </div>
    );
  }

  // Images used per section
  const sectionImages = [
    "/assets/images/freepik__retouch__96553.png",
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
          {/* Section image */}
          <Col md={6} className="image-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.img
                src={sectionImages[index]}
                alt={title}
                className="about-image"
                whileHover={{ scale: 1.02 }}
                whileInView={{ y: [40, 0] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>
          </Col>

          {/* Section text */}
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
        title={doctorInfo.seo.title}
        description={doctorInfo.seo.description}
        keywords={doctorInfo.seo.keywords}
      />

      {/* 🔹 Top Section — Doctor Header */}
      <Container className="about-container py-5">
        <div className="text-center mb-5">
          <motion.img
            src={doctorInfo.image}
            alt={doctorInfo.name}
            className="doctor-profile-img mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          <motion.h1
            className="about-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {doctorInfo.name}
          </motion.h1>

          <motion.p
            className="text-muted doctor-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {doctorInfo.title}
          </motion.p>
        </div>

        {/* 🔹 Biography */}
        {renderSection("Biography", doctorInfo.biography, 0)}

        {/* 🔹 Education */}
        {renderSection(
          "Education",
          doctorInfo.education.map((edu) => (
            <p key={edu.degree}>
              <strong>{edu.degree}</strong> – {edu.institution}
            </p>
          )),
          1
        )}

        {/* 🔹 Experience */}
        {renderSection(
          "Experience",
          doctorInfo.experience.map((exp) => (
            <p key={exp.title}>
              <strong>{exp.title}</strong> – {exp.organization}
            </p>
          )),
          2
        )}

        {/* 🔹 Publications */}
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

        {/* 🔹 Special Interests */}
        {renderSection(
          "Special Interests",
          <ul>
            {doctorInfo.interests.map((interest, i) => (
              <li key={i}>{interest}</li>
            ))}
          </ul>,
          4
        )}

        {/* 🔹 Associations */}
        {renderSection(
          "Associations",
          <ul>
            {doctorInfo.associations.map((assoc, i) => (
              <li key={i}>{assoc}</li>
            ))}
          </ul>,
          5
        )}

        {/* 🔹 Courses & Workshops */}
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
