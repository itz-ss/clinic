// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "react-bootstrap";
import "../styles/navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // 🟩 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🟩 Reset everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveAccordion(null);
  }, [location.pathname]);

  // 🧠 Accordion toggle for mobile
  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* 🧩 LOGO */}
        <Link to="/" className="logo">
          <img src="/assets/images/Neuron Brand and Spine logo (2).png" alt="Logo" />
        </Link>

        {/* 🍔 HAMBURGER ICON (SHIFTED TO RIGHT) */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* 🔗 NAVIGATION LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* SERVICES DROPDOWN */}
          <li className="dropdown" ref={dropdownRef}>
            <span
              className={`dropdown-btn ${activeDropdown ? "active" : ""}`}
              onClick={() =>
                setActiveDropdown(activeDropdown ? null : "services")
              }
            >
              Treatments <span className="arrow">▼</span>
            </span>

            {/* DESKTOP DROPDOWN */}
            {activeDropdown === "services" && (
              <div className="dropdown-menu two-columns desktop-dropdown">
                <div className="dropdown-block">
                  <h4> Dr Achal Gupta</h4>
                  <ul>
                    {servicesData.spine.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dropdown-block">
                  <h4> Dr Konika Bansal</h4>
                  <ul>
                    {servicesData.brain.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* MOBILE ACCORDION MENU */}
            {menuOpen && (
              <div className="mobile-accordion">
                {/* 🦴 Spine Section */}
                <div className="accordion-section">
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion("spine")}
                  >
                     Dr Achal Gupta
                    <span className="accordion-arrow">
                      {activeAccordion === "spine" ? "▲" : "▼"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeAccordion === "spine" && (
                      <motion.ul
                        className="accordion-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {servicesData.spine.map((item, i) => (
                          <li key={i}>
                            <Link to={item.to}>{item.label}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* 🧠 Brain Section */}
                <div className="accordion-section">
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion("brain")}
                  >
                    Dr Konika Bansal
                    <span className="accordion-arrow">
                      {activeAccordion === "brain" ? "▲" : "▼"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeAccordion === "brain" && (
                      <motion.ul
                        className="accordion-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {servicesData.brain.map((item, i) => (
                          <li key={i}>
                            <Link to={item.to}>{item.label}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </li>

          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="appointment-button">
        <Button variant="primary" size="lg" href="/appointment">
            Appointment
        </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
