import React from "react";
import "../css/Settings.css";

const Settings = () => {
  return (
    <div>
      <div className="settings-container">
        <div className="card-container">
          <a href="/user-management" className="card">
            <h2>User Management</h2>
            <p>Manage user accounts,and roles.</p>
          </a>

          <a href="/email-configuration" className="card">
            <h2>Email Configuration</h2>
            <p>
              Configure email settings for notifications and user communication.
            </p>
          </a>

          <a href="/security" className="card">
            <h2>Security</h2>
            <p>
              Set up security measures like two-factor authentication and password
              policies.
            </p>
          </a>

          <a href="/security" className="card">
            <h2>Security</h2>
            <p>
              Set up security measures like two-factor authentication and password
              policies.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
