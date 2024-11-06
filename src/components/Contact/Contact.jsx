import React from "react";
import "./Contact.css";
import { BiEnvelope, BiShareAlt } from "react-icons/bi";
import { FaLinkedin, FaGithub, FaSkype, } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import aos from "aos";
import "aos/dist/aos.css";
import { PiPhone } from "react-icons/pi";
import { BsGeo } from "react-icons/bs";

const Contact = () => {
  aos.init();
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending....");
    setIsSubmitting(true); // Hide the submit button
    const formData = new FormData(event.target);

    formData.append("access_key", "e2c9cdd6-9f89-4f0c-bb77-c8cf3112964e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success == true) {
      setResult(data.message);
      event.target.reset(); // Reset the form
      setTimeout(() => {
        setResult(""); // Clear the message after a short delay
        setIsSubmitting(false); // Re-show the submit button
      }, 3000); // Delay to allow users to see the success message
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsSubmitting(false); // Re-show the submit button if there's an error
    }
  };
  return (
    <div className="container top-content" data-aos="fade-in" data-aos-duration="1000">
      <h1>Contact</h1>
      <p>
      I'm always excited to connect! Whether you have a question about a project, want to discuss potential collaborations, or simply wish to reach out, feel free to contact me. 
      I look forward to hearing from you and exploring how we can work together to create impactful solutions.
      </p>
      <div className="contact-section container" data-aos="fade-up" data-aos-duration="1000">
        <div className="contact-item">
          <div className="contact-logo">
            <BsGeo />
          </div>
          <div className="contact-info">
            <h4>Address</h4>
            <span>Rayanoor Karur TamilNadu 639005</span>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-logo">
            <PiPhone />
          </div>
          <div className="contact-info">
            <h4>Call Me</h4>
            <span>8248277370</span>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-logo">
            <BiEnvelope />
          </div>
          <div className="contact-info">
            <h4>Email Me</h4>
            <span>deva.arcee@gmail.com</span>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-logo">
            <BiShareAlt />
          </div>
          <div className="contact-info">
            <h4>Social Profiles</h4>
            <div className="social">
              <a className='skype' target='blank' href="https://join.skype.com/invite/qlUM32TuforC"><FaSkype /></a>
              <a className='email' target='blank' href="mailto:deva.arcee@gmail.com"><MdEmail /></a>
              <a className='git' target='blank' href="https://github.com/iam-dev-deva"><FaGithub /></a>
              <a className='linkedin' target='blank' href="https://www.linkedin.com/in/devaraj-selvam/"><FaLinkedin /></a>
            </div>
          </div>
        </div>

      </div>
      <div className="contact-form" data-aos="fade-up" data-aos-duration="1000">
        <form onSubmit={onSubmit}>
          <div className="form-group" data-aos="fade-up" data-aos-duration="1000">
            <input type="text" name="name" id="name" placeholder="Your Name" required />
            <input type="email" name="email" id="email" placeholder="Your Email" required />
            <input type="text" name="subject" id="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" id="submit" className='btn' disabled={isSubmitting} style={{ display: isSubmitting ? 'none' : 'inline-block' }}>
              Send Message
            </button>
          </div>
        </form>
        <span className="result">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
