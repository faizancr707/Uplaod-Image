import React from "react";
import './routeCss.css'
const Call = () => {
  return (
    <div className="call">

      {/* Header */}
      <section className="call-hero">
        <h1>Contact Us 📞</h1>
        <p>
          Have questions about destinations, packages, or bookings?
          We’re here to help!
        </p>
      </section>

      {/* Contact Details */}
      <section className="call-details">
        <div className="contact-card">
          <h3>📍 Office Address</h3>
          <p>123 Travel Street, New Delhi, India</p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>support@travelmate.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="call-form">
        <h2>Request a Callback</h2>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

    </div>
  );
};

export default Call;
