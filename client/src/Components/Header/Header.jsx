import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>Petorius</Link>
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/pets" onClick={closeMenu}>Pets</Link></li>
          <li><Link to="/veterinarian" onClick={closeMenu}>Veterinarian</Link></li>
          <li><Link to="/feed" onClick={closeMenu}>Feed</Link></li>
          <li><Link to="/medicines" onClick={closeMenu}>Medicines</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="auth-buttons">
          <Link to="/auth" className="btn" onClick={closeMenu}>Login / Signup</Link>
        </div>
      </nav>

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
