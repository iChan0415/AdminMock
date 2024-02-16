import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import AdminUsersTables from '../components/AdminUsersTables';
import SearchBar from '../components/SearchBar';

const AdminInstructor = () => {
  
  return (
    <div>
      <SideBar />
      <div>
        <TopBar pageTitle="Instructor" />
        <SearchBar/>
        <AdminUsersTables/>
      </div>
    </div>
  );
};

export default AdminInstructor;
