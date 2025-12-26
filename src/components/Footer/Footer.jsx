import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import logo from "../../assets/imgs/template/image17.png";
import saalLogo from '../../assets/imgs/template/saalaiLogo.png';
import bgLine from '../../assets/imgs/blog-details/bg-line.png';
// import saasAiLogo from '../../assets/imgs/SaasAiLogo.png';
import './Footer.css';
// import bgImg from '../../assets/imgs/features-1/bg-ellipse.png';
import ellipseleft from '../../assets/imgs/footer-1/ellipse-left.png';
import ellipseright from '../../assets/imgs/footer-1/ellipse-right.png';
import linebg from '../../assets/imgs/footer-1/line-bg.png';

function Footer() {
  return (
    <footer className="footer" style={{
      backgroundImage: `url(${ellipseright}),url(${linebg})`, width: "100%"
    }}>
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="CODM" />
            <a href="https://saasailabs.codmsoftware.co.uk/" target="_blank" rel="noopener noreferrer">
              <img src={saalLogo} alt="CODM"/>
            </a>
          </div>
          <p className="footer-text">
            Boost your business with our customised CRM solutions.
            Optimised processes, improved customer relationships and scalable
            growth we deliver innovations for your success.
          </p>
          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/codm-software-limited/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>

          </div>

          {/* <a href="http://localhost:5174/" target="_blank"> 
          <img src={saasAiLogo} alt=""  width={'30%'}/>
          </a> */}

        </div>

        {/* Right Section - Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>COMPANY</h4>
            <a href="#">Mission Vision</a>
            <a href="#">Our Team</a>
            <a href="#">Careers</a>
            <a href="#">Testimonials</a>
          </div>

          <div className="footer-column">
            <h4>ABOUT US</h4>
            <a href="#">Our Journeys</a>
            <a href="#">Solutions</a>
            <a href="#">Project management</a>
            <a href="#">Help Center</a>
          </div>

          <div className="footer-column">
            <h4>SERVICES</h4>
            <a href="#">Salesforce CRM</a>
            <a href="#">.NET Application</a>
            <a href="#">React Application</a>
            <a href="#">API Integration</a>
            <a href="#">Data Integration</a>
            <a href="#">Data Migration</a>
            <a href="#">Technical Support</a>
          </div>

          <div className="footer-column">
            <h4>CONTACT</h4>
            <a href="#">Knowledge Base</a>
            <a href="#">Documents</a>
            <a href="#">System Status</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright © 2025 CodM. All Rights Reserved</p>
      </div>
    </footer>
  );
}
export default Footer;