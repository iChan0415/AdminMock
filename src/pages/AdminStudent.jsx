import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import AdminUsersTables from '../components/AdminUsersTables';
import SearchBar from '../components/SearchBar';

const AdminStudent = () => {

  return (
    <div>
      <SideBar />
      <div>
        <TopBar pageTitle="Student" />
        <SearchBar/>
        <AdminUsersTables/>
      </div>
    </div>
    
  )
}

export default AdminStudent;
