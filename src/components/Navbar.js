import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToFooter = () => {
    navigate('/'); // Ensure we're on the home page
    setTimeout(() => {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const goToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={goToHome}>
          <img 
            src="/logo.png" 
            alt="ForkLeaf Logo" 
            style={{ height: '53px', marginRight: '-20px', width: '100px' }} 
          />
          <span className="brand-name">ForkLeaf</span>
          <br />
          <span className="tagline">
            <span style={{ color: 'blue' }}>Fork your path</span>
            <span style={{ color: 'grey' }}> leaf a mark</span>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={goToHome}>HOME</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LOGIN
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/admin">Admin Login</Link></li>
                <li><Link className="dropdown-item" to="/coordinator">Co-ordinator Login</Link></li>
                <li><Link className="dropdown-item" to="/student">Student Login</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={scrollToFooter}>ABOUT US</Link> {/* Changed from button to Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={scrollToFooter}>CONTACT US</Link> {/* Changed from button to Link */}
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;