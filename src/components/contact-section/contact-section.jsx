import React from "react";
import "./contact-section.scss";

const ContactSection = () => {

    const handleSubmit = () => {

    }
  return (
    <div className="contactsection">
      <p className="contactsection-title">{"<contact>"}</p>
      <div className="contactsection-content">
        <p className="contactsection-main">
          You can get in touch by sending an email on{" "}
          <a href="mailto:max.mustermann@example.com">
            moladeijarotimi@gmail.com
          </a>
          .
        </p>
        <br />
        <p>Alternatively, you can send a message via this form below:</p>
        <br />
        <form onSubmit={handleSubmit} className="contactsection-form">
          <input
            type="text"
            className="contactsection-input"
            placeholder="NAME"
          ></input>
          <input
            type="email"
            className="contactsection-input"
            placeholder="EMAIL"
            required
          ></input>
          <input
            type="text"
            className="contactsection-input"
            placeholder="MESSAGE"
            required
          ></input>
          <button className="contactsection-submit">SUBMIT MESSAGE</button>
        </form>
      </div>

      <p className="contactsection-title">{"</contact>"}</p>
    </div>
  );
};

export default ContactSection;
