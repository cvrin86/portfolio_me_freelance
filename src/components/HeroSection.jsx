import React from "react";
// import { Github, Linkedin } from "./icons";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">

      <div className="hero-container">

        <p className="intro-text">Bonjour, je suis Christine</p>

        <h1 className="hero-title">
          Conceptrice et Développeuse <br />
          <span className="gradient-text">JAVA</span>
        </h1>

        <p className="hero-description">
          Freelance passionnée par la conception et le développement
          d’applications <span className="java">Java</span> et{" "}
          <span className="js">JavaScript</span>.
        </p>

        <div className="hero-buttons">

          <button className="contact-btn">
            Me contacter 
          </button>

          {/* <div className="social-icons">
            <Github className="icon"/>
            <Linkedin className="icon"/>
          </div> */}

        </div>

      </div>

    </section>
  );
}

export default HeroSection;