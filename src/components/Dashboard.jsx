import React from "react";
import "../css/Dashboard.css";

const Settings = () => {
  return (
    <div>
        <div className="settings-container">
        <div class="card-container1">
        <div class="card1">
          <h2>User Management</h2>
          <p>Manage user accounts, permissions, and roles.</p>
        </div>

        <div class="card1">
          <h2>Site Settings</h2>
          <p>
            Adjust general settings for the site such as logo, title, and theme.
          </p>
        </div>

        <div class="card1">
          <h2>Email Configuration</h2>
          <p>
            Configure email settings for notifications and user communication.
          </p>
        </div>

        <div class="card1">
          <h2>Security</h2>
          <p>
            Set up security measures like two-factor authentication and password
            policies.
          </p>
        </div>
        <div class="card1">
          <h2>Security</h2>
          <p>
            Set up security measures like two-factor authentication and password
            policies.
          </p>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default Settings;
