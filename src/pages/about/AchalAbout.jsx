// src/pages/AchalAbout.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { doctorsData } from "../../data/about";
import "../../styles/About.css";


function AchalAbout() {
  const doctor = doctorsData.find((d) => d.id === "dr-achal-gupta");
  const images = doctor.sectionImages || [];

  const getImage = (index) => images[index] || images[images.length - 1];

  return (
    <Container className="about-container py-3">
      {/* Heading */}
      <div className="text-center mb-4">
        <motion.h1
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {doctor.name}
        </motion.h1>
        <motion.p
          className="text-muted doctor-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {doctor.title}
        </motion.p>
      </div>

      {/* 1️⃣ Biography — Photo LEFT */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <img src={getImage(0)} alt="bio" className="about-image" />
        </Col>
        <Col md={6}>
          <h3>Biography</h3>
          {doctor.biography.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Col>
      </Row>

      {/* 2️⃣ Education — Table with Year under Degree — Photo RIGHT */}
      <Row className="align-items-center my-5">
        <Col md={6} className="order-md-2">
          <img src={getImage(1)} alt="education" className="about-image" />
        </Col>
        <Col md={6} className="order-md-1">
          <h3>Education</h3>
          <table className="table education-table">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Board</th>
              </tr>
            </thead>
            <tbody>
              {doctor.education.map((edu, i) => (
                <tr key={i}>
                  <td>
                    {edu.degree}
                    {edu.year && <div>({edu.year})</div>}
                  </td>
                  <td>{edu.institution}</td>
                  <td>{edu.board}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>

      {/* 3️⃣ Experience — Photo LEFT */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <img src={getImage(2)} alt="experience" className="about-image" />
        </Col>
        <Col md={6}>
          <h3>Experience</h3>
          {doctor.workExperience.map((exp, i) => (
            <p key={i}>
              <strong>{exp.position}</strong> – {exp.institution} ({exp.duration})
            </p>
          ))}
        </Col>
      </Row>

      {/* 4️⃣ Spine Endoscopy Experience — Simple */}
      <div className="my-5">
        <h3>Spine Endoscopy Experience</h3>
        <ul>
          {doctor.spineEndoscopyExperience.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      {/* 5️⃣ Project & Field Work — Simple */}
      <div className="my-5">
        <h3>Project & Field Work</h3>
        <ul>
          {doctor.projectAndFieldWork.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      {/* 6️⃣ Publications — LEFT content — RIGHT photo */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <h3>Publications</h3>
          <ul>
            {doctor.publications.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <img src={getImage(3)} alt="publications" className="about-image" />
        </Col>
      </Row>

      {/* 7️⃣ Publications in Books — Simple */}
      <div className="my-5">
        <h3>Publications in Books</h3>
        <ul>
          {doctor.publicationsInBooks.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      {/* 8️⃣ Awards — RIGHT column — LEFT photo */}
      <Row className="align-items-center my-5">
        <Col md={6} className="order-md-1">
          <img src={getImage(4)} alt="awards" className="about-image" />
        </Col>
        <Col md={6} className="order-md-2">
          <h3>Awards & Achievements</h3>
          <ul>
            {doctor.awards.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </Col>
      </Row>

      {/* 9️⃣ Paper Presentations — Simple */}
      <div className="my-5">
        <h3>Paper Presentations</h3>
        <ul>
          {doctor.paperPresentations.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      {/* 🔟 Conferences Attended — LEFT content — RIGHT photo */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <h3>Conferences Attended</h3>
          <ul>
            {doctor.conferencesAttended.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <img src={getImage(5)} alt="conferences" className="about-image" />
        </Col>
      </Row>

      {/* 1️⃣1️⃣ Leadership — RIGHT content — LEFT photo */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <img src={getImage(6)} alt="leadership" className="about-image" />
        </Col>
        <Col md={6}>
          <h3>Leadership & Organizational Roles</h3>
          <ul>
            {doctor.leadershipAbilities.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </Col>
      </Row>

      {/* 1️⃣2️⃣ Professional Associations — Simple */}
      <div className="my-5">
        <h3>Professional Associations</h3>
        <ul>
          {doctor.affiliations.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default AchalAbout;
