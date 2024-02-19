import React from "react";
import "../css/Dashboard.css";

const Settings = () => {
  return (
    <div>
        <div className="settings-container">
        <div class="card-container1">
        <div class="card1">
          <h2>User Management</h2>
          <p>Number of Users.</p>
        </div>

        <div class="card1">
          <h2>Certification</h2>
          <p>
            Certificates published.
          </p>
        </div>

        <div class="card1">
          <h2>Email Configuration</h2>
          <p>
            Configure email settings for notifications and user communication.
          </p>
        </div>
        <div class="card1">
          <h2>Instructors</h2>
          <p>
            List of Instructors
          </p>
        </div>

        <div class="card1">
          <h2>Security</h2>
          <p>
            Passwords created by users.
          </p>
        </div>
        <div class="card1">
         <h2>Ads</h2>
          <p>
           Ads
          </p>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default Settings;
