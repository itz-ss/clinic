import SEO from "../components/SEO";
import SchemaDoctor from "../components/SchemaDoctor";
import { Container, Button } from "react-bootstrap";
import WelcomeSection from "../components/WelcomeSection";
import FAQ from "../components/FAQ";
import TechnologySection from "../components/TechnologySection";
import KnowledgePartners from "../components/KnowledgePartners";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import TreatmentsShowcase from "../components/TreatmentsShowcase";

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
        <img  className="main" src="/assets/images/main.png" />
        </Container>
        <WelcomeSection />
        <TreatmentsShowcase />
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
