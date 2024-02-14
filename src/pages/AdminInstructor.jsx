import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

// Define your data
const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Doe', age: 25 },
  { id: 3, name: 'Jane', age: 35 },
];

const AdminInstructor = () => {
  // Define handleAction function if needed
  const handleAction = (event) => {
    // Implement your action handling logic here
    console.log('Action:', event.target.value);
  };

  return (
    <div>
    <SideBar />
    <TopBar name="Instructor"/>
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
  );
};

export default AdminInstructor;
