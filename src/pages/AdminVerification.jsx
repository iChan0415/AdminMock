import React from 'react'
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';

const AdminVerification = () => {
  return (
    <div>
      <SideBar />
      <TopBar pageTitle="Verification" />
      <SearchBar />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>STUDENT</th>
              <th>DATE ISSUED</th>
              <th>DATE VERIFIED</th>
              <th>TIME ISSUED</th>
              <th>INSTRUCTOR</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          {/* Add your table body content here */}
          <td>001</td>
          <td>CARL</td>
          <td>JAN 12,2024</td>
          <td>FEB 16,2024</td>
          <td>8:47AM</td>
          <td>JOHN DOE</td>
          <td>
          <button className="delete-btn">Delete</button>
          </td>
          <thead>
           
          </thead>
          {/* Add your table body content here */}
          <td>002</td>
          <td>CARL</td>
          <td>JAN 12,2024</td>
          <td>FEB 16,2024</td>
          <td>8:47AM</td>
          <td>JOHN</td>
          <td>
          <button className="delete-btn">Delete</button>
          </td>
          <thead>
          </thead>
          {/* Add your table body content here */}
          <td>003</td>
          <td>CARL</td>
          <td>JAN 12,2024</td>
          <td>FEB 16,2024</td>
          <td>8:47AM</td>
          <td>JOHNNY</td>
          <td>
          <button className="delete-btn">Delete</button>
          </td>
        </table>
      </div>
    </div>
  )
}

export default AdminVerification