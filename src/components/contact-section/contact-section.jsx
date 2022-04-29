import React from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact-section.scss";

const ContactSection = () => {
  const SERVICE_ID = "service_hafopfd";
  const TEMPLATE_ID = "template_ryb26uh";
  const PUBLIC_KEY = "hr8fD49jZkSeyFnc-";
  const mailAddress = "mailto:moladeijarotimi@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="contactsection" id="contact">
      <p className="contactsection-title">{"<contact>"}</p>
      <div className="contactsection-content">
        <p className="contactsection-main">
          You can get in touch by sending an email on{" "}
          <a href="mailto:moladeijarotimi@gmail.com">
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
            name="from_name"
          ></input>
          <input
            type="email"
            className="contactsection-input"
            placeholder="EMAIL"
            name="from_email"
            required
          ></input>
          <input
            type="text"
            className="contactsection-input"
            placeholder="MESSAGE"
            name="message"
            required
          ></input>
          <button type="submit" value="send" className="contactsection-submit">
            SUBMIT MESSAGE
          </button>
        </form>
      </div>

      <p className="contactsection-title">{"</contact>"}</p>
    </div>
  );
};

export default ContactSection;
