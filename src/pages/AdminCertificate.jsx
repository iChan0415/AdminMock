import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import "../css/Tables.css";
import SearchBar from "../components/SearchBar";

const AdminCertificate = () => {
  const [certificates, setCertificates] = useState([]);

  // Fetch certificates from the backend API
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/certifications"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch certificate data");
        }
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificate data:", error);
      }
    };

    fetchCertificates();
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  console.log(certificates);

  const handleDeleteCertificate = async (certificateID) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/certifications/${certificateID}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete certificate");
      }

      // Assuming the backend returns the updated list of certificates after deletion
      const updatedCertificates = await response.json();
      setCertificates(updatedCertificates);
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  return (
    <div>
    <SideBar />
    <TopBar pageTitle="Certificates" />
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
        {/* Add your table body content here */}
        <td>001</td>
        <td>HTML.PDF</td>
        <td>PASS</td>
        <td>FEB 16,2024</td>
        <td>8:47AM</td>
        <td>123123123</td>
        <td>
        <button className="delete-btn">Delete</button>
        </td>
        <thead>
         
        </thead>
        {/* Add your table body content here */}
        <td>002</td>
        <td>SQL.PDF</td>
        <td>PASS</td>
        <td>FEB 16,2024</td>
        <td>8:47AM</td>
        <td>12123123</td>
        <td>
        <button className="delete-btn">Delete</button>
        </td>
        <thead>
        </thead>
        {/* Add your table body content here */}
        <td>003</td>
        <td>SVN.PDF</td>
        <td>PASS</td>
        <td>FEB 16,2024</td>
        <td>8:47AM</td>
        <td>123123</td>
        <td>
        <button className="delete-btn">Delete</button>
        </td>
      </table>
    </div>
  </div>
  );
};

export default AdminCertificate;
