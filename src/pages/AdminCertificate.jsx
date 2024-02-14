import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import "../css/CertTable.css";

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
    <>
      <div>
        <SideBar />
        <TopBar pageTitle="Certificate Management" />
      </div>
      <div className="admincert-container">
        <div className="admincert-table-wrapper">
          <Table striped bordered hover className="admincert-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>File Name</th>
                <th>Criteria</th>
                <th>Date Issued</th>
                <th>Time Issued</th>
                <th>Serial No.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through certificates and render rows */}
              {certificates.map((certificate) => (
                <tr key={certificate.certificateID}>
                  <td>{certificate.certificateID}</td>
                  <td>{certificate.certificate_file}</td>
                  <td>{certificate.criteria}</td>
                  <td>{certificate.date_issued}</td>
                  <td>{certificate.time_issued}</td>
                  <td>{certificate.serial_no}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => handleEditCertificate(certificate)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleDeleteCertificate(certificate.certificateID)
                      }
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default AdminCertificate;
