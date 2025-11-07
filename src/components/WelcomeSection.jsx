import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import "../styles/WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <>
      <SEO
        title="Dr. Achal Gupta | Neuron Brain & Spine Centre"
        description="Learn more about Dr. Achal Gupta, an expert in Brain & Endoscopic Spine Surgery offering compassionate, personalized, and technology-driven care in Siliguri."
        keywords="Dr Achal Gupta, spine surgeon Siliguri, brain surgeon North Bengal, endoscopic spine surgery"
      />

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
                  src="/assets/images/achal2.jpg"
                  alt="Dr. Achal Gupta pic 1"
                  className="grid-image"
                />
                <img
                  src="/assets/images/achal3.jpg"
                  alt="Dr. Achal Gupta pic 2"
                  className="grid-image"
                />
                <img
                  src="/assets/images/Konika-bansal.jpg"
                  alt="Konika Bansal"
                  className="grid-image"
                />
                <img
                  src="/assets/images/Newachal.jpg"
                  alt="New Achal"
                  className="grid-image"
                />
              </motion.div>
            </Col>

            {/* Right Side – Text Section */}
            <Col md={6} className="text-column">
              <motion.div
                className="welcome-content"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h1
                  className="welcome-title mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Neuron Brain & Spine Centre
                </motion.h1>

                <motion.h4
                  className="welcome-subtitle mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Dr. Achal Gupta
                </motion.h4>

                <motion.p
                  className="welcome-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Dr. Achal Gupta has rich experience in Brain & Endoscopic Spine Surgery,
                  specializing in advanced minimally invasive procedures to treat a wide range
                  of neurological and spinal conditions.
                </motion.p>

                <motion.p
                  className="welcome-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  His expertise includes fully endoscopic and micro-endoscopic spinal surgery,
                  complex spinal operations requiring pedicle screw fixation, percutaneous
                  vertebroplasty and kyphoplasty, and comprehensive pain management—including
                  neuropathic pain, rhizotomy, trans-foraminal block, and sympathetic block.
                </motion.p>

                <motion.p
                  className="welcome-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  He is dedicated to improving patients’ quality of life through precision-based
                  care, compassionate guidance, and modern technology that ensures faster recovery
                  and lasting relief.
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
