import React, { useState } from 'react';
import '../css/Tables.css'; // Import CSS file for Tables styling

const AdminTables = () => {
  const [content, setContent] = useState(
  );
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

  return (
      <div>
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
                  <button className="edit-btn" onClick={handleAction}>Edit</button>
                  <button className="delete-btn" onClick={handleAction}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>
                  <button className="edit-btn" onClick={handleAction}>Edit</button>
                  <button className="delete-btn" onClick={handleAction}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default AdminTables;
