import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import "../styles/WelcomeSection.css";

// ✨ Fade-in animation presets
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const WelcomeSection = () => {
  return (
    <>
      <SEO
        title="Neuron Brain & Spine Centre | Dr. Achal Gupta & Dr. Konika Bansal"
        description="Meet Dr. Achal Gupta and Dr. Konika Bansal, experts at Neuron Brain & Spine Centre specializing in advanced brain, spine, and neuro-related treatments."
        keywords="Dr Achal Gupta, Dr Konika Bansal, spine surgeon Siliguri, brain surgeon North Bengal, endoscopic spine surgery, neuro specialist"
      />

      {/* 🌐 Section 1 – Dr. Achal Gupta */}
      <section className="welcome-section">
        <Container fluid className="h-100 p-0">
          <Row className="align-items-center h-100 g-0 ">
            {/* Left Side – Image Grid */}
            <Col md={6} className="image-column">
              <motion.div
                className="image-grid"
                variants={fadeIn("left", 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* 🖼 Large Image with hover zoom */}
                <motion.img
                  src="/assets/welcomePage/achal1.png"
                  alt="Dr. Achal Gupta"
                  className="grid-image main-img"
                  variants={fadeIn("up", 0.1)}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* 🖼 Two Smaller Images */}
                <div className="small-img-row">
                  <motion.img
                    src="/assets/welcomePage/achal2.JPG"
                    alt="Spine Procedure"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.2)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.img
                    src="/assets/welcomePage/achal3.JPG"
                    alt="Operation Room"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.3)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </Col>

            {/* Right Side – Text */}
            <Col md={6} className="text-column">
              <motion.div
                className="welcome-content"
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h1 className="welcome-title mb-3">
                  Dr. Achal Gupta
                </motion.h1>

                <motion.p className="welcome-text">
                  Dr. Achal Gupta has rich experience in Brain & Endoscopic Spine
                  Surgery, specializing in advanced minimally invasive procedures to
                  treat a wide range of neurological and spinal conditions.
                </motion.p>

                <motion.p className="welcome-text">
                  His expertise includes fully endoscopic and micro-endoscopic spinal
                  surgery, complex spinal operations requiring pedicle screw fixation,
                  percutaneous vertebroplasty and kyphoplasty, and comprehensive pain
                  management—including neuropathic pain, rhizotomy, trans-foraminal
                  block, and sympathetic block.
                </motion.p>

                <motion.p className="welcome-text">
                  He is dedicated to improving patients’ quality of life through
                  precision-based care, compassionate guidance, and modern technology
                  that ensures faster recovery and lasting relief.
                </motion.p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🌐 Section 2 – Dr. Konika Bansal */}
      <section className="welcome-section alt-section">
        <Container fluid className="h-100 p-0">
          <Row className="align-items-center h-100 g-0 flex-md-row-reverse">
            {/* Right Side – Image Grid */}
            <Col md={6} className="image-column">
              <motion.div
                className="image-grid"
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.img
                  src="/assets/welcomePage/konika.jpg"
                  alt="Dr. Konika Bansal"
                  className="grid-image main-img"
                  variants={fadeIn("up", 0.1)}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                <div className="small-img-row">
                  <motion.img
                    src="/assets/welcomePage/konika2.jpg"
                    alt="Neurology Lab"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.2)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.img
                    src="/assets/welcomePage/konika3.jpg"
                    alt="Patient Care"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.3)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </Col>

            {/* Left Side – Text */}
            <Col md={6} className="text-column">
              <motion.div
                className="welcome-content"
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h1 className="welcome-title mb-3">
                  Dr. Konika Bansal
                </motion.h1>

                <motion.p className="welcome-text">
                  Dr. Konika Bansal is an experienced neurologist known for her
                  patient-centered care and excellence in diagnosing and managing
                  neurological disorders with precision and empathy.
                </motion.p>

                <motion.p className="welcome-text">
                  Her clinical expertise spans stroke care, epilepsy management,
                  neurorehabilitation, and advanced neuro-diagnostics for improved
                  outcomes.
                </motion.p>

                <motion.p className="welcome-text">
                  She believes in holistic healing that integrates technology,
                  compassion, and evidence-based treatment for long-term wellness.
                </motion.p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WelcomeSection;
