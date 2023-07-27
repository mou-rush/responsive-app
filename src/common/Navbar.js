import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faInfoCircle,
  faShare,
  faTrash,
  faChevronLeft,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = ({ navbarHeading }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="back-icon ">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>

        <div className="navbar-item navbar-center">{navbarHeading}</div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/edit">Edit</a>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ marginLeft: "5px" }}
                className="navbar-icon"
              />
            </li>
            <li>
              <a href="/courier-info">Courier info</a>
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="navbar-icon"
                style={{ marginLeft: "5px" }}
              />
            </li>
            <li>
              <a href="/share">Share</a>
              <FontAwesomeIcon
                icon={faShare}
                className="navbar-icon"
                style={{ marginLeft: "5px" }}
              />
            </li>
            <li>
              <a href="/remove" id="remove-link">
                Remove
              </a>
              <FontAwesomeIcon
                icon={faTrash}
                className="navbar-icon"
                id="remove-link"
                style={{ marginLeft: "5px" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
