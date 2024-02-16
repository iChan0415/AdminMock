import React from 'react'
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';

const AdminCourseManagement = () => {
  return (
    <div><SideBar/>
    <TopBar pageTitle = "Course Management" />
    <SearchBar/></div>
    
  )
}

export default AdminCourseManagement