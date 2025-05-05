import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      {/* === Logo === */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>Petorius</Link>
      </div>

      {/* === Navigation Links === */}
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        {/* Nav Items */}
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/pets" onClick={closeMenu}>Pets</Link></li>
          <li><Link to="/veterinarian" onClick={closeMenu}>Veterinarian</Link></li>
          <li><Link to="/feed" onClick={closeMenu}>Feed</Link></li>
          <li><Link to="/medicines" onClick={closeMenu}>Medicines</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/signup" className="btn" onClick={closeMenu}>Signup</Link>
          <Link to="/login" className="btn login" onClick={closeMenu}>Login</Link>
        </div>
      </nav>

      {/* === Hamburger Menu for Mobile === */}
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
