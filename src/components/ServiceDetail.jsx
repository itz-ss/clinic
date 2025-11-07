import React from "react";
import SEO from "../components/SEO";
function ServiceDetail({ data }) {
  if (!data) return null;

  return (
    <>
    <SEO
        title="Doctor's Name | About the Spine Specialist"
        description=""
        keywords="about doctor, spine surgeon profile, spine surgery experience"
      />

    <div className="container py-5">
      <h1 className="mb-4">{data.title}</h1>
      <p className="lead">{data.description}</p>

      <h4 className="mt-4">Common Conditions Treated</h4>
      <ul>
        {data.commonConditions.map((cond, idx) => (
          <li key={idx}>{cond}</li>
        ))}
      </ul>

      <h4 className="mt-4">Treatment Options</h4>
      <p><strong>Non-Surgical:</strong> {data.treatments.nonSurgical}</p>
      <p><strong>Surgical:</strong> {data.treatments.surgical}</p>
    </div>
    </>
  );
}

export default ServiceDetail;
// change this (wrong for default export):