// src/pages/KonikaAbout.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { doctorsData } from "../../data/about";
import SEO from "../../components/SEO";
import "../../styles/About.css";


function KonikaAbout() {
  const doctor = doctorsData.find((d) => d.id === "dr-konika-bansal");
  const sectionImages = doctor.sectionImages || [];

  const renderSection = (title, content, index) => {
    const reversed = index % 2 !== 0;
    return (
      <motion.section
        key={index}
        className={`about-section ${reversed ? "reverse" : ""}`}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <Row className="align-items-center my-5">
          <Col md={6} className="image-col">
            <motion.img
              src={sectionImages[index]}
              alt={title}
              className="about-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.9 }}
            />
          </Col>

          <Col md={6} className="text-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>{title}</h3>
              {content}
            </motion.div>
          </Col>
        </Row>
      </motion.section>
    );
  };

  return (
    <>
      <SEO
        title={doctor.seo?.title}
        description={doctor.seo?.description}
        keywords={doctor.seo?.keywords}
      />

      <Container className="about-container py-2">
        {/* Heading */}
        <div className="text-center mb-5">
          <motion.h1
            className="about-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {doctor.name}
          </motion.h1>

          <motion.p
            className="text-muted doctor-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {doctor.title}
          </motion.p>
        </div>

        {/* Sections in order */}
        {renderSection(
          "Biography",
          doctor.biography.map((p, i) => <p key={i}>{p}</p>),
          0
        )}

        {renderSection(
          "Education",
          doctor.education.map((edu, i) => (
            <p key={i}>
              <strong>{edu.degree}</strong> – {edu.institution}
            </p>
          )),
          1
        )}

        {renderSection(
          "Experience",
          doctor.experience.map((exp, i) => (
            <p key={i}>
              <strong>{exp.title}</strong> – {exp.organization}
            </p>
          )),
          2
        )}

        {renderSection(
          "Publications",
          doctor.publications.map((pub, i) => (
            <p key={i}>
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
            {doctor.interests.map((interest, i) => (
              <li key={i}>{interest}</li>
            ))}
          </ul>,
          4
        )}

        {renderSection(
          "Associations",
          <ul>
            {doctor.associations.map((assoc, i) => (
              <li key={i}>{assoc}</li>
            ))}
          </ul>,
          5
        )}

        {renderSection(
          "Courses & Workshops",
          <ul>
            {doctor.courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>,
          6
        )}
      </Container>
    </>
  );
}

export default KonikaAbout;