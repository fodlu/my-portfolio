import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [userMessage, setUserMessage] = useState({
    name: '',
    message: '',
    email: '',
    subject: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserMessage(() => ({ ...userMessage, [name]: value }));
    console.log(userMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect this to EmailJS, Formspree, or your backend
    alert("Message sent! I'll get back to you within 24 hours.");
  };

  return (
    <div className="contact-page">
      <h1>Let's Work Together</h1>
      <p className="subtitle">I'm open to full-time roles, freelance projects, and collaborations.</p>

      <div className="contact-container">
        <section className="contact-form">
          <p>
            Have a project in mind or a role you think I'd be fit for?
            <br />
            Send me a message and I will respond within 24 hours
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                required
                value={userMessage.name}
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required
                value={userMessage.email}
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                required
                value={userMessage.subject}
                onChange={(e) => handleChange(e)}
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject of the message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                value={userMessage.message}
                onChange={(e) => handleChange(e)}
                name="message"
                id="message"
                rows={3}
                required
                placeholder="Message"
              ></textarea>
            </div>

            <button className="btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </section>

        <section className="contact-info">
          <h2>Contacts</h2>
          <div className="contacts">
            <div>
              <strong>Email: </strong>
              <a href="mailto:musediqfadilulahiopeyemi@gmail.com">musediqfadilulahiopeyemi@gmail.com</a>
            </div>
            <div>
              <strong>Phone: </strong>
              <a href="tel:+2349029606767">+234 902 960 6767</a>
            </div>
            <div>
              <strong>Location: </strong>
              <span>Lagos, Nigeria | Open to remote</span>
            </div>
          </div>

          <h2>Connect Online</h2>
          <div className="social-links">
            <a href="#" target="_blank">
              LinkedIn
            </a>
            <a href="#" target="_blank">
              GitHub
            </a>
            <a href="#" target="_blank">
              Twitter
            </a>
          </div>
        </section>
      </div>

      <section className="response-time">
        <p>I typically reply to all inquiries within 24 hours on weekdays.</p>
        <p>
          For urgent projects, please use email and include <span>URGENT</span> in the subject.
        </p>
      </section>
    </div>
  );
};

export default Contact;
