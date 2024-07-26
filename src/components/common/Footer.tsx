import React from "react";
import "../../styles/Footer.css";
import { appData } from "../../data/appData";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-links">
            <h4>Company</h4>
            {appData.footer.companyLinks.map((link, index) => (
              <a key={index} href={link.href} aria-label={link.name}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="footer-section social-links">
            <h4>Social</h4>
            {appData.footer.socialLinks.map((link, index) => (
              <a key={index} href={link.href} aria-label={link.name}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="footer-section integrations-links">
            <h4>Integrations</h4>
            {appData.footer.integrationsLinks.map((link, index) => (
              <a key={index} href={link.href} aria-label={link.name}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="footer-section legal-links">
            <h4>Legal</h4>
            {appData.footer.legalLinks.map((link, index) => (
              <a key={index} href={link.href} aria-label={link.name}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="company-info">{appData.footer.companyInfo}</div>
      </div>
    </footer>
  );
};

export default Footer;
