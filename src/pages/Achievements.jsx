import SEO from "../components/SEO";
import { Container } from "react-bootstrap";

function Achievements() {
  return (
    <>
      <SEO
        title="Doctor's Name | Awards and Achievements"
        description="Discover Doctor's Name's achievements, recognitions, and contributions to the field of spine surgery."
        keywords="doctor achievements, spine surgery awards, medical recognition"
      />

      <Container className="py-4">
        <h2 className="mb-3">Achievements</h2>
        <p>Content for Achievements goes here.</p>
      </Container>
    </>
  );
}

export default Achievements;
