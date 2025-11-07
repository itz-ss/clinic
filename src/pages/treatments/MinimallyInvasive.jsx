import React from "react";
import SEO from "../../components/SEO";
import ServiceDetail from "../../components/ServiceDetail";
import services from "../../data/services";
import AppointmentForm from "../../components/AppointmentForm";

function MinimallyInvasive() {
  const data = services.find(
    (service) => service.slug === "minimally-invasive-spine-surgery"
  );

  return (
    <>
      <SEO
       title={`Dr. [Name] | ${data.title}`}
        description={data.description}
        keywords="minimally invasive spine surgery, spine specialist, spine treatment"
      />
      <ServiceDetail data={data} />
      <AppointmentForm serviceName={data.title} />
    </>
  );
}

export default MinimallyInvasive;