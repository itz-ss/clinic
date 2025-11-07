import React from "react";
import SEO from "../../components/SEO";
import ServiceDetail from "../../components/ServiceDetail";
import services from "../../data/services";
import AppointmentForm from "../../components/AppointmentForm";

function Cervical() {
  const data = services.find(
    (service) => service.slug === "cervical-spine-and-craniovertebral-junction"
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

export default Cervical;