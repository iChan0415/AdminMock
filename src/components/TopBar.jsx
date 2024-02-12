import React from "react";
import "../css/TopBar.css";

const TopBar = () => {
  return (
    <div>
      <div className="page-title-container">
        <div className="header">
          <p className="page-title">Dashboard</p>
          <p className="page-date">12th Feb 2024</p>
        </div>
        <div className="admin-profile-container-top">
          <div className="profile_top">
            <a className="profile-settings_top" href="#">
              <img
                className="admin-profile"
                src="src/assets/SatoruGojo.jpg"
                alt="Profile"
              />
            </a>
          </div>
          <div className="admin_info_top">
            <p className="admin-name_top">Caloy Skie</p>
            <p className="admin-position_top">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
