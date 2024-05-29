import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/music">Music</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/merch">Merch</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videos">Videos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tour">Tour</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/guestbook">Guestbook</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
