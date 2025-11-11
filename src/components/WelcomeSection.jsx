import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import "../styles/WelcomeSection.css";

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
          <Row className="align-items-center h-100 g-0">
            {/* Left Side – Image Grid */}
            <Col md={6} className="image-column">
              <motion.div
                className="image-grid"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/images/sergon.png"
                  alt="Dr. Achal Gupta"
                  className="grid-image"
                />
                
              </motion.div>
            </Col>

            {/* Right Side – Text */}
            <Col md={6} className="text-column">
              <motion.div
                className="welcome-content"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h1 className="welcome-title mb-3  ">
                  Dr Achal Gupta
                </motion.h1>

                {/* <motion.h4 className="welcome-subtitle mb-4">
                  Trusted Endoscopic Spine Surgeon, Lucknow, Uttar Pradesh
                </motion.h4> */}

                <motion.p className="welcome-text">
                  Dr. Achal Gupta has rich experience in Brain & Endoscopic Spine Surgery, specializing in advanced minimally invasive procedures to treat a wide range of neurological and spinal conditions.

                </motion.p>

                <motion.p className="welcome-text">
                His expertise includes fully endoscopic and micro-endoscopic spinal surgery, complex spinal operations requiring pedicle screw fixation, percutaneous vertebroplasty and kyphoplasty, and comprehensive pain management—including neuropathic pain, rhizotomy, trans-foraminal block, and sympathetic block.

                </motion.p>

                <motion.p className="welcome-text">
                  He is dedicated to improving patients’ quality of life through precision-based care,
                   compassionate guidance, and modern technology that ensures faster recovery and lasting relief.
                </motion.p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🌐 Section 2 – Dr. Konika Bansal (Alternate Layout) */}
      <section className="welcome-section alt-section">
        <Container fluid className="h-100 p-0">
          <Row className="align-items-center h-100 g-0 flex-md-row-reverse">
            {/* Right Side – Image Grid */}
            <Col md={6} className="image-column">
              <motion.div
                className="image-grid"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/images/konika-bansal.jpg"
                  alt="Dr. Konika Bansal"
                  className="grid-image"
                />
                
              </motion.div>
            </Col>

            {/* Left Side – Text */}
            <Col md={6} className="text-column">
              <motion.div
                className="welcome-content"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h1 className="welcome-title mb-3">
                 Dr. Konika Bansal
                </motion.h1>

                {/* <motion.h4 className="welcome-subtitle mb-4">
                  Pediatric Neurologist, Lucknow, Uttar Pradesh
                </motion.h4> */}

                <motion.p className="welcome-text">
                  Dr. Konika Bansal is an experienced neurologist known for her
                  patient-centered care and excellence in diagnosing and managing
                  neurological disorders with precision and empathy.
                </motion.p>

                <motion.p className="welcome-text">
                  Her clinical expertise spans stroke care, epilepsy management,
                  neurorehabilitation, and advanced neuro-diagnostics for improved outcomes.
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
