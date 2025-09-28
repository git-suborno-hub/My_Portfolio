import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...formData,
      access_key: "be9957be-a306-4ef0-b71b-98b0e82b4a29",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message);

        setFormData({
          email: "",
          message: "",
        });
      } else {
        toast.error(res.message || "Something went wrong!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Network error! Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error(error);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I’m always eager to collaborate, learn, and grow. Excited to explore opportunities in Software Development and AI!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa-solid fa-envelope"></i>
              <p>suborno709@gmail.com</p>
            </div>

            <div className="contact-detail">
              <i className="fa-solid fa-location-dot"></i>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="social-gathering">
            <a href="https://github.com/git-suborno-hub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/maksuda-akter-622a50341">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Write your message here...</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
