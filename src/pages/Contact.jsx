import React from "react";
import "./style/Contact.css";
const Contact = () => {
  return (
    <main className="main">
      <section className="contact-section">
        <div className="content">
          <div className="content-text-contact">
            <h2>ABOUT ME</h2>
            <h3>Front-end and Back-end developer.</h3>
            <p>
              I'm Iván Del Campo, i have 18 year old Spanish freelance front-end
              and back-end developer. I am a boy who he likes to learn more and
              more about technologies of any kind. I like to solve design
              problems,creating a user interface, developing rich web
              experiences and web applications. When I'm not working or playing
              with the code, I do what I like ... I do calisthenics, I relax By
              doing some activity, I try to learn to play instruments and keep
              learning about life.
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
            <form className="form" action="gmail.php" method="POST">
              <label className="label">Last Name</label>
              <input
                type="text"
                name="last-name"
                className="last-name"
                id="last-name"
                placeholder="Last Name"
                required
              />
              <label className="label">Subject</label>
              <input
                type="text"
                name="subject"
                className="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <label className="label">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="¿What service you wanna?"
                required
              ></textarea>
              <button className="btn-form" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
