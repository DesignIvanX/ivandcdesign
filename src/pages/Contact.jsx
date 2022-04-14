import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import "./style/Contact.css";
const Contact = () => {
  const [data, setData] = useState({});
  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    const modal = document.querySelector(".modal");
    e.preventDefault();
    axios.post("https://email-ivandcdesign.herokuapp.com/api/form", data);
    modal.classList.add("block");
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };
  return (
    <main className="main">
      <section className="contact-section">
        <div className="content">
          <div className="content-text-contact">
            <h2>ABOUT ME</h2>
            <h3>Front-end and Back-end developer.</h3>
            <p>
              I'm Iván Del Campo, 2 years being a self-taught front-end and
              back-end developer and freelancer. I am a guy who likes to learn
              more and more about technologies of any kind. I like to solve
              design problems, create a user interface, develop rich web
              experiences and web applications.
            </p>
            <div>
              <h4>Steve Jobs</h4>
              <p>
                "The only way to feel satisfied is to do a great job and that is
                only possible by loving what you do"
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-text-contact content-text-form">
            <h2>
              CONTACT ME<span className="poin">.</span>
              <span className="poin">.</span>
              <span className="poin">.</span>
            </h2>
            <form className="form" onSubmit={handleOnSubmit}>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="name"
                id="last-name"
                placeholder="Name"
                required
                onChange={handleOnChange}
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleOnChange}
              />
              <label className="label">Subject</label>
              <input
                type="text"
                name="subject"
                className="subject"
                id="subject"
                placeholder="Subject"
                required
                onChange={handleOnChange}
              />
              <label className="label">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="¿What service you wanna?"
                required
                onChange={handleOnChange}
              ></textarea>
              <button className="btn-form" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="modal">
        Success<span className="poin">.</span>
        <span className="poin">.</span>
        <span className="poin">.</span>
      </div>
    </main>
  );
};

export default Contact;
