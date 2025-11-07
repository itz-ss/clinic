import { Helmet } from "react-helmet-async";

function SchemaDoctor() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr Achal Gupta", // CHANGE
    "image": "https://website-domain.example/assets/images/doctor-photo.jpg", // CHANGE to real domain
    "description": "Dr Achal Gupta is a renowned spine surgeon specializing in minimally invasive spine surgery, endoscopic spine surgery, scoliosis correction, and cervical spine treatments.",
    "medicalSpecialty": "Spine Surgery",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Clinic Address", // CHANGE
      "addressLocality": "City Name", // CHANGE
      "addressRegion": "State/Region", // CHANGE
      "postalCode": "PIN", // CHANGE
      "addressCountry": "IN"
    },
    "telephone": "Phone Number", // CHANGE
    "url": "https://website-domain.example", // CHANGE to real domain
    "sameAs": [
      "https://linkedin.com/in/your-profile",
      "https://instagram.com/your-profile"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export default SchemaDoctor;
