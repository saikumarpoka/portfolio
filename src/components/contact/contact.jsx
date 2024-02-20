import React from "react";
import "./contact.css";

const Contact = () => {
  const opacity1 = () => {
    return (document.getElementById("para").style.opacity = "1");
  };
  const opacity0 = () => {
    return (document.getElementById("para").style.opacity = "0");
  };

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="social-links">
            <div className="icon">
              <a href="https://www.facebook.com/saikumar.poka.3/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/saikumar_choudary_?igsh=MXZoN2Fzbzg4ZTJ4MQ==">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="icon">
              <a href="www.linkedin.com/in/saikumar-poka-b724512b1">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/saikumarpoka">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="to-top" style={{ textAlign: "center" }}>
            <a
              href="#intro"
              className="arrow-up"
              onMouseOver={opacity1}
              onMouseOut={opacity0}
            >
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </a>
            <p id="para" style={{ opacity: "0" }}>
              To Top!
            </p>
            <p>
              Email: venkatasaikumar.poka@gmail.com || Mobile: +91 8519921096
            </p>
            <div>
              <p>
                <span>
                  <i className="fa-regular fa-copyright fa-xs"></i>
                </span>
                Sai Kumar {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
