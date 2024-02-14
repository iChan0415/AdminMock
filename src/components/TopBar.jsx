import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "../css/TopBar.css";
import { FiBell, FiMessageSquare } from "react-icons/fi";

const TopBar = ({name}) => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  function getDate() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    const ordinalIndicator = getOrdinalIndicator(date);
    const monthAbbreviation = monthNames[monthIndex];
    return `${date}${ordinalIndicator} ${monthAbbreviation} ${year}`;
  }
  
  function getOrdinalIndicator(date) {
    if (date >= 11 && date <= 13) {
      return "th";
    }
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <div>
      <div className="page-title-container">
        <div className="header">
          <p className="page-title">{name}</p>
          <p className="page-date">{currentDate}</p>
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
                <Dropdown.Item href="/admin_profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/admin_settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/admin_landing">Logout</Dropdown.Item>
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
