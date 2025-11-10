// src/components/AppointmentForm.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import emailJSConfig from "../config/emailjsConfig";
import "../styles/AppointmentForm.css";

function AppointmentForm({ serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const appointmentCode = `ONLINEAPPOINTMENT-${day}${month}${year}-${hours}${minutes}`;

      const formattedTime = now.toLocaleString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // 🌍 Detect user language
      const userLang = navigator.language || navigator.userLanguage;
      const isHindi = userLang.startsWith("hi");

      // 💬 WhatsApp Message (formatted)
      const englishMessage = `🩺 *New Appointment Request* %0A
👤 *Name:* ${formData.name}%0A
📞 *Phone:* ${formData.phone}%0A
✉️ *Email:* ${formData.email}%0A
💬 *Message:* ${formData.message || "N/A"}%0A
🔹 *Service:* ${serviceName || "Consultation"}%0A
🆔 *Appointment Code:* ${appointmentCode}%0A
🕓 *Sent On:* ${formattedTime}%0A
Please confirm my appointment.`;

      const hindiMessage = `🩺 *नई अपॉइंटमेंट रिक्वेस्ट* %0A
👤 *नाम:* ${formData.name}%0A
📞 *फ़ोन:* ${formData.phone}%0A
✉️ *ईमेल:* ${formData.email}%0A
💬 *संदेश:* ${formData.message || "कोई संदेश नहीं"}%0A
🔹 *उपचार:* ${serviceName || "सलाह"}%0A
🆔 *अपॉइंटमेंट कोड:* ${appointmentCode}%0A
🕓 *भेजने का समय:* ${formattedTime}%0A
कृपया मेरी अपॉइंटमेंट कन्फर्म करें।`;

      const whatsappMessage = isHindi ? hindiMessage : englishMessage;
      const phoneNumber = "7080106535"; // ✅ Use correct WhatsApp number without '+'

      // ✅ STEP 1: Open WhatsApp FIRST (to avoid popup blocking)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappUrl, "_blank");

      // ✅ STEP 2: Then send emails in background (non-blocking)
      await Promise.all([
        emailjs.send(
          emailJSConfig.serviceID,
          emailJSConfig.templateIDAck,
          { ...formData, serviceName, appointmentCode, time: formattedTime },
          emailJSConfig.publicKey
        ),
        emailjs.send(
          emailJSConfig.serviceID,
          emailJSConfig.templateIDDoctor,
          { ...formData, serviceName, appointmentCode, time: formattedTime },
          emailJSConfig.publicKey
        ),
      ]);

      setStatus(`✅ Appointment submitted! Your appointment code: ${appointmentCode}`);
      setFormData({ name: "", email: "", phone: "", preferredDate: "", message: ""});
    } catch (error) {
      console.error("❌ Error submitting appointment:", error);
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="appointment-container container p-4 shadow-sm rounded bg-white">
      <h3 className="text-primary mb-4 fw-semibold text-center">
        Book an Appointment {serviceName ? `(${serviceName})` : "for Consultation"}
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* Full Name */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Email Address</label>
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

          {/* Phone */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              name="phone"
              className="form-control"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

           {/* preferred date*/}
          <div className="col-md-6">
            <label className="form-label fw-semibold">preferred Date</label>
            <input
              name="preferredDate"
              className="form-control"
              placeholder="preferred date"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="col-12">
            <label className="form-label fw-semibold">Message (Optional)</label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Any specific questions or concerns"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-100 mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Appointment"}
        </button>

        {status && (
          <div className="alert alert-info mt-3 text-center fw-semibold">
            {status}
          </div>
        )}
      </form>
    </div>
  );
}

export default AppointmentForm;
