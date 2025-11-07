import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import emailJSConfig from "../config/emailjsConfig";
//css style
import "../styles/AppointmentForm.css";

function AppointmentForm({ serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

    // Generate a clean, readable timestamp for email templates
  const now = new Date().toLocaleString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // EmailJS: acknowledgment email to sender
      await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateIDAck,
        { ...formData, serviceName, time: now },
        emailJSConfig.publicKey
        );

      // EmailJS: email to doctor/clinic
      await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateIDDoctor,
        { ...formData, serviceName, time: now },
        emailJSConfig.publicKey
        );

      // Optional: SMS via Twilio endpoint
      {/*await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone, name: formData.name, serviceName })
      });*/}
      setStatus(
        "Appointment submitted! Check your email and phone for confirmation."
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting appointment:", error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container my-4 p-4 border rounded shadow-sm">
      <h3 className="mb-3">Book an Appointment {serviceName && `(${serviceName})` || "for Consultation"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            name="phone"
            className="form-control"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message (Optional)</label>
          <textarea
            name="message"
            className="form-control"
            placeholder="Additional details or questions"
            value={formData.message}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Appointment
        </button>
      </form>

      {status && <div className="alert alert-info mt-3">{status}</div>}
    </div>
  );
}

export default AppointmentForm;
