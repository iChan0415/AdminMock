import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import AdminUsersTables from '../components/AdminUsersTables';

const AdminStudent = () => {

  return (
    <div>
      <SideBar />
      <div>
        <TopBar pageTitle="Student" />
        <AdminUsersTables/>
      </div>
    </div>
    
  )
}

export default AdminStudent;
