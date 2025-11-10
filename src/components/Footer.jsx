import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 border-top">
      <Container className="py-5">
        <Row className="gy-4">
          {/* 🩺 Contact Info */}
          <Col md={4}>
            <h5 className="fw-bold mb-3 text-uppercase">Contact Doctor</h5>
            <p className="mb-2">
              Neuron Brain & Spine Center, 2nd Floor, Suryodey Bank, Vibhuti Khand, <br />
              Lucknow, Uttar Pradesh 226016
            </p>
            <p className="mb-2">
              <a
                href="tel:+917080106535"
                className="text-decoration-none text-dark fw-semibold"
              >
                📞 +91 7080106535
              </a>
            </p>
            <p>
              <a
                href="mailto:neurospine001@gmail.com"
                className="text-decoration-none text-dark fw-semibold"
              >
                📧 neurospine001@gmail.com
              </a>
            </p>
          </Col>

          {/* 🧠 Dynamic Treatments Section */}
          <Col md={5}>
            <h5 className="fw-bold mb-3 text-uppercase">Treatments</h5>

            <div className="row">
              {Object.entries(servicesData).flatMap(([category, treatments]) =>
                treatments.map((treatment, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="col-6 col-md-6 col-lg-6 mb-2"
                  >
                    <Link
                      to={treatment.to}
                      className="text-decoration-none text-dark"
                      style={{ transition: "color 0.3s" }}
                      onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                      onMouseOut={(e) => (e.target.style.color = "inherit")}
                    >
                      {treatment.label}
                    </Link>
                  </div>
                ))
              )}
            </div>
          </Col>

          {/* 🌟 Reviews + Social Links */}
          <Col md={3}>
            <h5 className="fw-bold mb-3 text-uppercase">follow:</h5>
            <div className="d-flex flex-column align-items-start">

             <div className="d-flex align-items-center" style={{ gap: "0.8rem" }}>
                {[
                  ["facebook_3670271.png", "Facebook", "https://www.facebook.com/share/15zrv5HUWd/?mibextid=wwXIfr", ],
                  ["instagram_2673885.png", "Instagram", "https://www.instagram.com/neuronbrainandspine?igsh=MXUxaHB2MDhmOTdwcw%3D%3D&utm_source=qr ",  ],
                  // ["linkedin_2582545.png", "LinkedIn"],
                  ["whatsapp_1384007.png", "WhatsApp", `https://wa.me/${6388060502}?text=${"Hello! I’d like to book an appointment."}`,  ],
                  ["youtube-symbol_49411.png", "YouTube", "https://youtube.com/@neuronbrainandspine?si=YEaUrakZh9HD3WjK", ],
                ].map(([img, alt, links, color], index) => (
                  <a key={index} href={links}  target="_blank" className="d-inline-block">
                    <img
                      src={`/assets/images/${img}`}
                      alt={alt}
                      style={{
                        width: "26px",
                        height: "26px",
                        transition: "transform 0.2s",
                      }}
                      onMouseOver={(e) => (e.target.style.transform = "scale(1.15)")}
                      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </a>
                ))}
              </div>

              <a
                href="https://g.page/r/CaLoB3W56rcPEAE/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/googleR-removebg-preview.png"
                  alt="Google Reviews"
                  style={{
                    width: "150px",
                    height: "auto",
                    marginBottom: "1rem",
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>

        {/* 📅 Copyright */}
        <Row className="pt-4 mt-3 border-top">
          <Col className="text-center">
            <small className="text-muted">
              © {new Date().getFullYear()} Dr. Achal Gupta | All Rights Reserved
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
