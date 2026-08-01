function Footer() {
  return (
    <footer className="dev-footer">
      <div className="container">

        <div className="footer-section row gy-5">

          {/* Logo & Description */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <img src="/icon.png" alt="DevFlow" />
              <span >DevFlow</span>
            </div>

            <p className="footer-description">
              Build modern, fast and professional web experiences
              with powerful frontend technologies.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="GitHub">
                GH
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-title">Resources</h5>

            <ul className="footer-links">
              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="footer-title">Technologies</h5>

            <ul className="footer-links">
              <li>
                <a href="#">HTML & CSS</a>
              </li>

              <li>
                <a href="#">JavaScript</a>
              </li>

              <li>
                <a href="#">React</a>
              </li>

              <li>
                <a href="#">TypeScript</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Get In Touch</h5>

            <p className="footer-contact">
              Have a project in mind?
              <br />
              Let's build something great together.
            </p>

            <a href="#" className="footer-button">
              Contact Me
            </a>
          </div>

        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <p>
            © 2026 <span>DevFlow</span>. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;