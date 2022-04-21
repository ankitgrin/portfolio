import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context";
import Modal from "react-modal";
import validator from "validator";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("Sending...");

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    toggleModal();

    if (e.target[0].value == "") {
      setModalText("Kindly enter your name");
    } else if (!validator.isEmail(e.target[1].value)) {
      setModalText("Enter valid Email");
    } else if (e.target[2].value == "") {
      setModalText("Kindly enter a message");
    } else {
      setModalText("Sending...");
      emailjs
        .sendForm(
          "service_7txk96v",
          "template_u452iq8",
          form.current,
          "WB9vaAYf5g6h_Tc_4"
        )
        .then(
          (result) => {
            console.log(result.text);
            setModalText("Thanks for contacting me!");
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
          },
          (error) => {
            console.log(error.text);
            setModalText(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome contact-div">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button contact-button" />

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
      >
        <div>{modalText}</div>
      </Modal>
    </div>
  );
};

export default Contact;
