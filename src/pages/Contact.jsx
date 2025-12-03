// src/pages/Contact.jsx
import SEO from "../components/SEO";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AppointmentForm from "../components/AppointmentForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <SEO
        title="Contact Dr. Achal Gupta | Spine Surgeon Lucknow"
        description="Get in touch with Dr. Achal Gupta at Neuron Brain & Spine Center, Lucknow. Book consultations or ask questions regarding spine treatments and surgeries."
        keywords="Dr Achal Gupta contact, spine surgeon Lucknow, Neuron Brain & Spine Center specialist, book appointment"
      />

      {/* 🟦 Responsive Banner Section */}
      <section className="contact-hero">
        <img
          src="/assets/banner/contact-banner.png"   // <-- change to your image path
          alt="Contact Dr. Achal Gupta"
          className="contact-hero-img"
        />

        <div className="contact-hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-title"
          >
            Let’s Take the First Step Towards a Pain-Free Life.
          </motion.h1>
        </div>
      </section>

      {/* 🩵 Contact Info + Appointment Form Section */}
      <Container className="contact-section py-5">
        <Row className="align-items-stretch">
          {/* 🏥 Left Side - Contact Info */}
          <Col md={6} className="mb-4 mb-md-0 d-flex">
            <motion.div
              className="contact-card flex-fill p-4 shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-header mb-4">
                <h3 className="fw-bold text-primary d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-primary"></i>
                  Neuron Brain & Spine Center
                </h3>
                <p className="text-muted mb-0 fs-6">
                  2nd Floor, Suryodey Bank, Vibhuti Khand, Lucknow, Uttar Pradesh 226016
                </p>
              </div>

              <hr className="contact-divider my-4" />

              <div className="contact-item mb-3">
                <h5 className="fw-semibold d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill text-primary"></i> Phone
                </h5>
                <a href="tel:+917080106535" className="contact-link">
                  +91 7080106535
                </a>
              </div>

              <div className="contact-item mb-3">
                <h5 className="fw-semibold d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-primary"></i> Email
                </h5>
                <a
                  href="mailto:neurospine001@gmail.com"
                  className="contact-link"
                >
                  neurospine001@gmail.com
                </a>
              </div>

              <div className="contact-item mb-4">
                <h5 className="fw-semibold d-flex align-items-center gap-2">
                  <i className="bi bi-clock-fill text-primary"></i> Working Hours
                </h5>
                <p className="text-muted mb-1">Mon – Sat: 3:00 PM – 7:00 PM</p>
                <p className="text-muted mb-0">Sunday: Closed</p>
              </div>

              {/* 🖼️ Doctor / Clinic Photo */}
              <motion.div
                className="contact-photo mt-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/about/konika4.jpeg"
                  alt="Neuron Brain & Spine Center Lucknow"
                  className="img-fluid rounded shadow-sm"
                />
                <img
                  src="/assets/about/achal6.jpg"
                  alt="Neuron Brain & Spine Center Lucknow"
                  className="img-fluid rounded shadow-sm"
                />
              </motion.div>
            </motion.div>
          </Col>

          {/* 📅 Right Side - Appointment Form */}
          <Col md={6} className="d-flex">
            <motion.div
              className="appointment-box flex-fill"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AppointmentForm serviceName="General Consultation" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
