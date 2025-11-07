import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 border-top">
      <Container className="py-5">
        <Row className="gy-4">
          {/* Contact Info */}
          <Col md={4}>
            <h5 className="fw-bold mb-3 text-uppercase">Contact Doctor</h5>
            <p className="mb-2">
              Manipal Hospitals, Meghnad Saha Sarani, Ward 2, Pradhan Nagar, <br />
              Siliguri, West Bengal 734003
            </p>
            <p className="mb-2">
              <a href="tel:+919382707523" className="text-decoration-none text-dark fw-semibold">
                📞 +91 93827 07523
              </a>
            </p>
            <p>
              <a
                href="mailto:mayukhguha.spinesurgery@gmail.com"
                className="text-decoration-none text-dark fw-semibold"
              >
                📧 mayukhguha.spinesurgery@gmail.com
              </a>
            </p>
          </Col>

          {/* Treatments */}
          <Col md={5}>
            <h5 className="fw-bold mb-3 text-uppercase">Treatments</h5>
            <div
              className="d-flex flex-wrap"
              style={{ gap: "0.4rem 1rem", lineHeight: "1.6" }}
            >
              {[
                ["minimally-invasive", "Minimally Invasive Spine Surgery"],
                ["endoscopic", "Endoscopic Spine Surgery"],
                ["scoliosis", "Scoliosis Surgery"],
                ["cervical", "Cervical & Dorsal Myelopathy"],
                ["back-pain", "Back Pain and Sciatica"],
                ["neck-pain", "Neck Pain & Cervical Spondylosis"],
                ["spine-trauma", "Spinal Fracture and Trauma"],
                ["spine-infection", "Spine Infection and Tuberculosis"],
                ["cvj", "Craniovertebral Junction (CVJ)"],
                ["osteoporosis", "Osteoporosis & Osteoporotic Fracture"],
                ["ankylosing-spondylitis", "Ankylosing Spondylitis"],
              ].map(([path, label]) => (
                <Link
                  key={path}
                  to={`/treatments/${path}`}
                  className="text-decoration-none text-dark"
                  style={{ transition: "color 0.3s" }}
                  onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseOut={(e) => (e.target.style.color = "inherit")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </Col>

          {/* Reviews */}
          <Col md={3}>
            <h5 className="fw-bold mb-3 text-uppercase">Reviews</h5>
            <div className="d-flex flex-column align-items-start">
              <a
                href="https://www.google.com/search?sca_esv=e6dc1ba993d4f09e&rlz=1C1RXQR_enIN1120IN1120&sxsrf=AE3TifOJqNWinXWhtvNJrrX4DydQGSW_uA:1762434266168&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-dmcw5dj2rLgdjOfN9p0Rz5ZFDAJrQTzk4-rMtN5HGJFBSNor3bBX9pp6TSH5U_hTTLkvd0rYadygF8FaAjTm4o2jQVTsJaAa69s766vvbgPG06qUotkEF-yXIkOMEsdkSv_nUBOzyZ53l1IRvL4FftLtsdC4yDsjkCeB6PJU1lrexJX8EcBp385zMtxquSRQgzjMEs4RWCerzYSDbPEzGKSkJYHuwvY9S8u-IhAdRnUU61yQ%3D%3D&q=Neuron+Brain+and+Spine+Centre+-+Best+Neurosurgeon+In+Lucknow+%7C+Best+Spine+Surgeon+In+Lucknow+%7C+Best+Neuro+Clinic+In+Lucknow+Reviews&sa=X&ved=2ahUKEwiPrP-iy92QAxUeTmwGHQFtAX4Q0bkNegQIJxAE&biw=1366&bih=645"
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

              <div className="d-flex align-items-center" style={{ gap: "0.8rem" }}>
                {[
                  ["facebook_3670271.png", "Facebook"],
                  ["instagram_2673885.png", "Instagram"],
                  ["linkedin_2582545.png", "LinkedIn"],
                  ["whatsapp_1384007.png", "WhatsApp"],
                  ["youtube-symbol_49411.png", "YouTube"],
                ].map(([img, alt], index) => (
                  <a key={index} href="#" className="d-inline-block">
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
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="pt-4 mt-3 border-top">
          <Col className="text-center">
            <small className="text-muted">
              © {new Date().getFullYear()} Dr. Mayukh Guha | All Rights Reserved
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
