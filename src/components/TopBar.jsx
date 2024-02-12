import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "../css/TopBar.css";
import { FiBell, FiMessageSquare } from "react-icons/fi";

const TopBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="page-title-container">
        <div className="header">
          <p className="page-title">Dashboard</p>
          <p className="page-date">12th Feb 2024</p>
        </div>
        <div className="admin-profile-container-top">
          <div className="profile_top">
            <FiMessageSquare className="message-icon" size={20} />
            <FiBell className="notification-icon" size={20} />

            {/* Add dropdown for top admin profile */}
            <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <img
                  className="admin-profile"
                  src="src/assets/SatoruGojo.jpg"
                  alt="Profile"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
         {/*<div className="admin_info_top">
            <p className="admin-name_top">Caloy Skie</p>
            <p className="admin-position_top">Administrator</p>
  </div>*/} 
        </div>
      </div>
    </div>
  );
};

export default TopBar;
