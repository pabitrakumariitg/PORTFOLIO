import React, { useState } from "react";
import "./ContactForm.css"; // Assuming you have a separate CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can add your form submission logic
  };

  return (
    <div className="overall">
      <div className="overall-left">
        <h1>CONTACT ME</h1>
        <h3>Pabitra Kumar</h3>
        <h3>Jamshedpur, 831002</h3>
        <h3>Jharkhand, India</h3>
        <div className="dcd">
          <a href="mailto:pabitrakumar50abc@gmail.com">
            <img src="gmail.png" alt="Gmail" />
          </a>
          <a href="mailto:b.pabitra@iitg.ac.in">
            <img src="Outlook-Logo.png" alt="Outlook" />
          </a>
        </div>
      </div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="top">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="below">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
