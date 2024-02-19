import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import '../css/Tables.css'; // Import CSS file for Tables styling

const Certificates = () => {
  const [certificates, setCertificates] = useState([
    // Sample certificates data, replace with your actual data
    {
      certificateID: 1,
      certificate_file: 'certificate1.pdf',
      criteria: 'Criteria 1',
      date_issued: '2024-02-18',
      time_issued: '10:00 AM',
      serial_no: '123456789',
    },
    {
      certificateID: 2,
      certificate_file: 'certificate2.pdf',
      criteria: 'Criteria 2',
      date_issued: '2024-02-18',
      time_issued: '11:00 AM',
      serial_no: '987654321',
    },
    // Add more certificates as needed
  ]);

  const itemsPerPage = 5; // Set the number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const handleAction = (certificateID, action) => {
    if (action === 'Edit') {
      handleEdit(certificateID);
    } else if (action === 'Delete') {
      handleDelete(certificateID);
    }
  };

  const handleEdit = (certificateID) => {
    console.log('Edit action for certificate ID:', certificateID);
  };

  const handleDelete = (certificateID) => {
    console.log('Delete action for certificate ID:', certificateID);
  };

  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = certificates.slice(startIndex, endIndex);

  return (
    <div>
      <SideBar />
      <TopBar pageTitle="Certificate Management" />
      <SearchBar />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FILE NAME</th>
              <th>CRITERIA</th>
              <th>DATE ISSUED</th>
              <th>TIME ISSUED</th>
              <th>SERIAL NO.</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through certificates and render rows */}
            {visibleData.map((certificate) => (
              <tr key={certificate.certificateID}>
                <td>{certificate.certificateID}</td>
                <td>{certificate.certificate_file}</td>
                <td>{certificate.criteria}</td>
                <td>{certificate.date_issued}</td>
                <td>{certificate.time_issued}</td>
                <td>{certificate.serial_no}</td>
                <td>
                  <button onClick={() => handleAction(certificate.certificateID, 'Edit')}>Edit</button>
                  <button onClick={() => handleAction(certificate.certificateID, 'Delete')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage}/{totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
