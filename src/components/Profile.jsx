import React from 'react';
import '../css/Profile.css';
function Profile() {
    return (
        <div className="profile-container">
            <img className="profile-picture" src="src/assets/SatoruGojo.jpg" alt="Profile Picture" />
            <div className="profile-name">John Doe</div>
            <div className="profile-role">Administrator</div>
            <div className="profile-email">john.doe@example.com</div>
        </div>
    );
}

export default Profile;
