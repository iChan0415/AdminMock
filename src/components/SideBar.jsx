import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HouseDoor,
  FileEarmarkText,
  ShieldCheck,
  People,
  Book
} from "react-bootstrap-icons";
import { FiLogOut, FiSettings } from "react-icons/fi";
import "../css/Sidebar.css";

const SideBar = () => {
  const [userManagementDropdownVisible, setUserManagementDropdownVisible] =
    useState(false);
  const [courseManagementDropdownVisible, setCourseManagementDropdownVisible] =
    useState(false);

  const userDropdownRef = useRef(null);
  const courseDropdownRef = useRef(null);

  const toggleUserDropdown = () => {
    setUserManagementDropdownVisible(!userManagementDropdownVisible);
  };

  const toggleCourseDropdown = () => {
    setCourseManagementDropdownVisible(!courseManagementDropdownVisible);
  };

  const closeDropdowns = () => {
    setUserManagementDropdownVisible(false);
    setCourseManagementDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target) &&
        courseDropdownRef.current &&
        !courseDropdownRef.current.contains(event.target)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-light sidebar">
        <div className="sidebar-sticky">
          <div className="logo-title-container">
            <a className="" href="/admin_dashboard">
              <img
                className="admin-logo"
                src="src/assets/TsukidenLogo.png"
                alt="Logo"
              />
            </a>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="/admin_dashboard"
                onClick={closeDropdowns}
              >
                <HouseDoor className="housedoor" size={20} /> Dashboard
              </a>
            </li>
            {/* User Management Dropdown */}
            <li
              className={`nav-item dropdown ${
                userManagementDropdownVisible ? "show" : ""
              }`}
              ref={userDropdownRef}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userManagementDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={userManagementDropdownVisible}
                onClick={toggleUserDropdown}
              >
                <People className="people" size={20} /> User Management
              </a>
              <div
                className={`dropdown-menu ${
                  userManagementDropdownVisible ? "show" : ""
                }`}
                aria-labelledby="userManagementDropdown"
              >
                <a className="dropdown-item" href="/admin_student">
                  Student
                </a>
                <a className="dropdown-item" href="/admin_instructor">
                  Instructor
                </a>
              </div>
            </li>
            {/* Course Management Dropdown */}
            <li
              className={`nav-item dropdown ${
                courseManagementDropdownVisible ? "show" : ""
              }`}
              ref={courseDropdownRef}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="courseManagementDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={courseManagementDropdownVisible}
                onClick={toggleCourseDropdown}
              >
                <Book className="book" size={20} /> Course Management
              </a>
              <div
                className={`dropdown-menu ${
                  courseManagementDropdownVisible ? "show" : ""
                }`}
                aria-labelledby="courseManagementDropdown"
              >
                <a className="dropdown-item" href="/admin_course">
                  Course Management
                </a>
                <a className="dropdown-item" href="/admin_courses">
                  Chapter
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/admin_certificate"
                onClick={closeDropdowns}
              >
                <FileEarmarkText className="fileearmark" size={20} />{" "}
                Certificate Management
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/admin_verification"
                onClick={closeDropdowns}
              >
                <ShieldCheck className="shieldcheck" size={20} /> Verification
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/admin_settings"
                onClick={closeDropdowns}
              >
                <FiSettings className="fi-settings" size={20} /> Settings
              </a>
            </li>

            <div className="admin-profile-container">
              <a className="profile-settings" href="/admin_profile">
                <img
                  className="admin-profile"
                  src="src/assets/SatoruGojo.jpg"
                  alt="Profile"
                />
                <p className="admin-name">Caloy Skie</p>
              </a>
              <p className="admin-position">Administrator</p>
            </div>

            <li className="nav-item-logout">
              <a className="nav-link active" href="/admin_landing">
                <FiLogOut className="fi-log-out" size={15} /> Log Out
              </a>
            </li>

            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
