import SEO from "../components/SEO";
import SchemaDoctor from "../components/SchemaDoctor";
import { Container, Button } from "react-bootstrap";
import WelcomeSection from "../components/WelcomeSection";
import Surgeries from "../components/Surgeries";
import FAQ from "../components/FAQ";
import TechnologySection from "../components/TechnologySection";
import KnowledgePartners from "../components/KnowledgePartners";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
// global css
import "../styles/global.css";
function Home() {
  return (
    <>
      <SEO
        title="Doctor's Name | Spine Surgeon in City Name"
        description="Doctor's Name is a leading spine specialist offering advanced treatments for back and neck disorders in City Name."
        keywords="spine surgeon, spine specialist, back pain doctor, minimally invasive surgery"
      />

      <SchemaDoctor />

      <section className="hero text-center bg-light py-5">
        <Container>
          {/* Replace placeholder image in public/assets/images/doctor-profile.jpg */}
          <img
            src="/assets/images/achal2.jpg"
            alt="Doctor's Name"
            className="rounded-circle mb-3 shadow"
            width="150"
          />
          <h1 className="fw-bold">Doctor's Name</h1>
          <p className="lead text-muted">
            Specialist in Spine and Neurosurgery
          </p>
          <Button variant="primary" size="lg" href="/appointment">
            Book Appointment
          </Button>
        </Container>
        <WelcomeSection />
        <Surgeries />
        <TechnologySection />
        <KnowledgePartners />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
      </section>
      
    </>
  );
}

export default Home;
