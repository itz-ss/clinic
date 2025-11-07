import React, { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="logo">
          <img src="/assets/images/logo.png" alt="Logo" />
        </Link>

        {/* NAV LINKS */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* SERVICES DROPDOWN */}
          <li
            className="dropdown"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-btn">
              Services <span className="arrow">▼</span>
            </span>

            {activeDropdown === "services" && (
              <div className="dropdown-menu two-columns">
                <div className="dropdown-block">
                  <h4>🦴 Spine</h4>
                  <ul>
                    {servicesData.spine.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dropdown-block">
                  <h4>🧠 Brain</h4>
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
          </li>

          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
