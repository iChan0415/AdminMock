import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const AdminStudent = () => {
  // Define handleAction function if needed
  const handleAction = (event) => {
    // Implement your action handling logic here
    console.log('Action:', event.target.value);
  };

  return (
    <div><SideBar/>
    <TopBar pageTitle = "Student" /></div>
  )
}

export default AdminStudent;
