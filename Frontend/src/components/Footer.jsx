import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        {/* Brand */}
        <h3 className="footer-logo">
          Charu Manchandani<span>.</span>
        </h3>

        <p className="footer-tagline">
          Building digital experiences
        </p>

        {/* Navigation */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© 2026 Charu Manchandani</span>

          <span>
            Built with{" "}
            <span className="footer-love">
              <span>❤️</span>
            </span>{" "}
            using React & Node.js
          </span>
        </div>


      </div>
    </footer>
  )
}

export default Footer
