import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bidart</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0667888971">
                <span
                  className="clickInput"
                  onclick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  06 67 88 89 71
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="camp.munio@gmail.com">
                <span
                  className="clickInput"
                  onclick={() => {
                    alert("mail copié!");
                  }}
                >
                  camp.munio@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="http://www.google.com"
              target="_blanck"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="http://www.google.com"
              target="_blanck"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="http://www.google.com"
              target="_blanck"
              rel="noopener noreferrer"
            >
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
            <a
              href="http://www.google.com"
              target="_blanck"
              rel="noopener noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
