import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import AdminUsersTables from '../components/AdminUsersTables';

const AdminInstructor = () => {
  
  return (
    <div>
      <SideBar />
      <div>
        <TopBar pageTitle="Instructor" />
        <AdminUsersTables/>
      </div>
    </div>
  );
};

export default AdminInstructor;
