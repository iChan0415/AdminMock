import React, { useState } from 'react';
import '../css/Tables.css'; // Import CSS file for Tables styling

const AdminTables = () => {
  const data = [
    // ... your data
  ];

  const itemsPerPage = 5; // Set the number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const handleAction = (e) => {
    const selectedAction = e.target.value;
    if (selectedAction === 'Edit') {
      handleEdit();
    } else if (selectedAction === 'Delete') {
      handleDelete();
    }
  };

  const handleEdit = () => {
    console.log('Edit action');
  };

  const handleDelete = () => {
    console.log('Delete action');
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = data.slice(startIndex, endIndex);
  return (
      <div>
          <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Profile</th>
                <th>Actions</th>
              </tr>
            </thead>
              <tr>
                <td>123123123</td>
                <td>JohnD</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Picture</td>
                <td>
                  <button className="edit-btn" onClick={handleAction}>Edit</button>
                  <button className="delete-btn" onClick={handleAction}>Delete</button>
                </td>
              </tr>
              <tr>
              <td>123123123</td>
                <td>JohnD</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Picture</td>
                <td>
                  <button className="edit-btn" onClick={handleAction}>Edit</button>
                  <button className="delete-btn" onClick={handleAction}>Delete</button>
                </td>
              </tr>
              <tr>
              <td>123123123</td>
                <td>JohnD</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Picture</td>  
                <td>
                  <button className="edit-btn" onClick={handleAction}>Edit</button>
                  <button className="delete-btn" onClick={handleAction}>Delete</button>
                </td>
              </tr>
          </table>
        </div>
      </div>
  );
};

export default AdminTables;
