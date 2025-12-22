import React from "react";
import './routeCss.css'
const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Explore the World with Us 🌍</h1>
        <p>
          Discover amazing destinations, affordable packages, and unforgettable
          travel experiences.
        </p>
        <button>Book Your Trip</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-cards">
          <div className="card">
            <h3>✈️ Flight Booking</h3>
            <p>Best deals on domestic and international flights.</p>
          </div>

          <div className="card">
            <h3>🏨 Hotel Reservation</h3>
            <p>Comfortable hotels at affordable prices.</p>
          </div>

          <div className="card">
            <h3>🗺️ Tour Packages</h3>
            <p>Customized tour packages for families & couples.</p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations">
        <h2>Popular Destinations</h2>

        <ul>
          <li>🇮🇳 Goa</li>
          <li>🇫🇷 Paris</li>
          <li>🇹🇭 Thailand</li>
          <li>🇦🇪 Dubai</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TravelMate. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;
