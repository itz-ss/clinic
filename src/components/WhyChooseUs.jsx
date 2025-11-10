// src/components/WhyChooseUs.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/WhyChooseUs.css";

const stats = [
  { id: 0, icon: "🏥", label: "Happy Patients", value: 10000, suffix: "+" },
  { id: 1, icon: "❤️", label: "Successful Spine Surgeries", value: 1000, suffix: "+" },
  { id: 2, icon: "✚", label: "Endoscopic Spine Surgeries", value: 400, suffix: "+" },
  { id: 3, icon: "🧠", label: "Patient Satisfaction", value: 98, suffix: "%" }, // ✅ percentage
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect section visibility (animation trigger)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-us" ref={sectionRef}>
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="subtitle">Why Choose Us</h4>
        <h2 className="title">Excellence in Brain & Spine Care</h2>
        <p className="desc">
          Trusted by thousands of patients for advanced spine and brain treatments using cutting-edge, minimally invasive techniques.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="stats-container">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            <div className="stat-icon">{item.icon}</div>
            <p className="stat-label">{item.label}</p>
            <AnimatedNumber target={item.value} start={isVisible} suffix={item.suffix} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ✅ Counter Component with suffix support (+ / %)
const AnimatedNumber = ({ target, start, suffix }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!start) return;

    let current = 1;
    const increment = Math.ceil(target / 80);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <h3 className="stat-number">
      {count}
      <span className="suffix">{suffix}</span>
    </h3>
  );
};

export default WhyChooseUs;
