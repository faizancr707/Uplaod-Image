import React from "react";
import './routeCss.css'

const About = () => {
  return (
    <div className="about">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About TravelMate 🌍</h1>
        <p>
          Your trusted travel partner for unforgettable journeys across the
          globe.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            TravelMate is a passionate travel agency dedicated to creating
            stress-free and memorable travel experiences. From budget-friendly
            trips to luxury vacations, we plan journeys that match your dreams.
          </p>

          <p>
            With years of experience in the travel industry, our expert team
            ensures comfort, safety, and exceptional service at every step of
            your journey.
          </p>
        </div>

        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔️ Affordable & transparent pricing</li>
            <li>✔️ Personalized travel packages</li>
            <li>✔️ 24/7 customer support</li>
            <li>✔️ Trusted by 5,000+ travelers</li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To inspire people to explore the world by delivering safe,
          affordable, and unforgettable travel experiences.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TravelMate. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default About;
