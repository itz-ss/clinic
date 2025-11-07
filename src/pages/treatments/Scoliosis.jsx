import React from "react";
import SEO from "../../components/SEO";
import ServiceDetail from "../../components/ServiceDetail";
import services from "../../data/services";
import AppointmentForm from "../../components/AppointmentForm";

function Scoliosis() {
  const data = services.find(
    (service) => service.slug === "scoliosis-and-spinal-deformity-surgery"
  );

  return (
    <>
      <SEO
        title={`Dr. [Name] | ${data.title}`}
        description={data.description}
        keywords="endoscopic spine surgery, spine surgeon, minimally invasive"
      />
      <ServiceDetail data={data} />
      <AppointmentForm serviceName={data.title} />
    </>
  );
}

export default Scoliosis;