import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Settings from '../components/Settings'; // Import AdminSettingsButtons

const AdminSettings = () => {
  return (
    <div>
      <SideBar />
      <TopBar pageTitle="Settings" />
        <Settings /> {/* Render AdminSettingsButtons component */}
    </div>
  );
}

export default AdminSettings;
