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
    <div className='cont1'>
      <div>
        <SideBar />
      </div>
      <div className='cont2'>
        <div>
          <TopBar name="Student"/>
        </div>
        <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
  );
};

export default AdminStudent;
