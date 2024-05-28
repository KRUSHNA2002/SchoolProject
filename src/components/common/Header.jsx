import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  const location = useLocation();

  // Function to determine if a NavLink should be active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark logo fw-bold" to="/">
            S C H O O L
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav fs-5">
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link text-dark ${isActive("/")}`}
                  aria-current="page"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link text-dark ${isActive("/about")}`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link text-dark ${isActive("/classes")}`}
                  to="/classes"
                >
                  Classes
                </Link>
              </li>
              <li className="nav-item dropdown mx-2">
                <Link
                  className="nav-link text-dark dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="#"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/action">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/another-action">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/something-else">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link text-dark ${isActive("/contact")}`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-auto d-none d-sm-block">
            <button className="btn btn-danger fs-5 join_btn">
              <b>Join Us</b> <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
