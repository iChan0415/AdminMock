import React from 'react'
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';

const AdminVerification = () => {
  return (
    <div><SideBar/>
    <TopBar pageTitle = "Certificate Verification" />
    <SearchBar/>
    </div>
  )
}

export default AdminVerification