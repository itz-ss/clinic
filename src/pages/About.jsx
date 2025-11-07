import SEO from "../components/SEO";
import { Container, Row, Col, Card } from "react-bootstrap";
import { doctorInfo } from "../data/doctorInfo";
 //css style
import "../styles/About.css";

function About() {
  return (
    <>
      <SEO
        title="Doctor's Name | About the Spine Specialist"
        description="Learn more about Doctor's Name, a highly qualified spine surgeon specializing in minimally invasive and endoscopic spine surgery."
        keywords="about doctor, spine surgeon profile, spine surgery experience"
      />

      <Container className="py-5">
      <h2 className="text-center mb-4">{doctorInfo.name}</h2>
      <p className="text-center text-muted mb-5">{doctorInfo.title}</p>

      <section>
        <h4>Biography</h4>
        {doctorInfo.biography.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section className="mt-5">
        <h4>Education</h4>
        {doctorInfo.education.map((edu, i) => (
          <Card key={i} className="mb-3 p-3 shadow-sm">
            <strong>{edu.degree}</strong>
            <div className="text-muted">{edu.institution}</div>
          </Card>
        ))}
      </section>

      <section className="mt-5">
        <h4>Experience</h4>
        {doctorInfo.experience.map((exp, i) => (
          <Card key={i} className="mb-3 p-3 shadow-sm">
            <strong>{exp.title}</strong>
            <div className="text-muted">{exp.organization}</div>
          </Card>
        ))}
      </section>

      <section className="mt-5">
        <h4>Publications</h4>
        {doctorInfo.publications.map((pub, i) => (
          <p key={i}>
            {pub.citation}{" "}
            <a href={pub.link} target="_blank" rel="noreferrer">
              Read More
            </a>
          </p>
        ))}
      </section>

      <section className="mt-5">
        <h4>Special Interests</h4>
        <ul>
          {doctorInfo.interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
      </section>

      <section className="mt-5">
        <h4>Associations</h4>
        <ul>
          {doctorInfo.associations.map((assoc, i) => (
            <li key={i}>{assoc}</li>
          ))}
        </ul>
      </section>

      <section className="mt-5">
        <h4>Courses & Workshops</h4>
        <ul>
          {doctorInfo.courses.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
      </section>
    </Container>
    </>
  );
}

export default About;
