import React from 'react'
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Dashboard from '../components/Dashboard';
import SearchBar from '../components/SearchBar';

const AdminDashboard = () => {
  return (
    <div>
      <SideBar />
      <div>
        <TopBar pageTitle="Dashboard" />
        <SearchBar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default AdminDashboard