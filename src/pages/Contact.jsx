import SEO from "../components/SEO";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <SEO
        title="Contact Dr Achal Gupta | Spine Surgeon LUCKNOW"
        description="Get in touch with Dr. Achal Gupta at Neuron Brain & Spine Center, Lucknow. Book consultations or ask questions regarding spine treatments and surgeries."
        keywords="Dr Achal Gupta contact, spine surgeon Lucknow, Neuron Brain & Spine Center specialist, book appointment"
      />

      <Container className="py-5">
        <h2 className="mb-4 text-primary fw-semibold">Contact Dr Achal Gupta</h2>

        <div className="mb-4">
          <h5 className="fw-bold">Clinic Location:</h5>
          <p className="mb-1">
            Neuron Brain & Spine Center, 2nd Floor, Suryodey Bank, Vibhuti Khand, Lucknow
            Lucknow, Uttar Pradesh 226016
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold">Phone:</h5>
          <p>
            <a href="tel:+917080106535" className="text-decoration-none text-dark">
              +91 7080106535
            </a>
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold">Email:</h5>
          <p>
            <a
              href="mailto:neurospine001@gmail.com"
              className="text-decoration-none text-dark"
            >
              neurospine001@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-5">
          <h5 className="fw-bold mb-3">Book an Appointment</h5>
          <p>
            To book an appointment with Dr. Achal Gupta, please fill out the
            appointment form available on the{" "}
            <a href="/appointment" className="text-decoration-none text-primary">
              Appointment Page
            </a>{" "}
            or contact us via phone/email.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Contact;
