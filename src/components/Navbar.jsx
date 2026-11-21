import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          Jack<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <Link to="/" className="nav-link">
            Projects
          </Link>
         {/*
          
          <Link to="/" className="nav-link">
            Skills
          </Link>
         */}
          <Link to="/contact" className="nav-link">
            Contact
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      
      {/* Mobile Menu */}
{isOpen && (
  <div className="mobile-menu">
    <Link
      to="/"
      className="mobile-nav-link"
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>

    <Link
      to="/about"
      className="mobile-nav-link"
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>

    <Link
      to="/"
      className="mobile-nav-link"
      onClick={() => setIsOpen(false)}
    >
      Projects
    </Link>

    <Link
      to="/contact"
      className="mobile-nav-link"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-resume-btn"
      onClick={() => setIsOpen(false)}
    >
      Resume
    </a>
  </div>
)}
    </header>
  );
}