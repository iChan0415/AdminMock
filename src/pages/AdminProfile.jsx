import React from 'react'
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Profile from '../components/Profile';

const AdminProfile = () => {
  return (
    <div><SideBar/>
    <TopBar pageTitle = "Admin Profile" />
    <Profile/></div>
  )
}

export default AdminProfile