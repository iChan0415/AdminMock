import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './../pages/AdminDashboard';
import AdminCertificate from '../pages/AdminCertificate';
import AdminVerification from '../pages/AdminVerification';
import AdminCourseManagement from '../pages/AdminCourseManagement';
import AdminStudent from './../pages/AdminStudent';
import AdminInstructor from './../pages/AdminInstructor';
import AdminSettings from './../pages/AdminSettings';
import AdminProfile from '../pages/AdminProfile';
import AdminLanding from '../pages/AdminLanding';

const Router = () => {
  return (
    <div>
         <BrowserRouter>
        <Routes>
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin_certificate" element={<AdminCertificate />} />
          <Route path="/admin_verification" element={<AdminVerification/>} />
          <Route path="/admin_course" element={<AdminCourseManagement />} />
          <Route path="/admin_student" element={<AdminStudent />} />
          <Route path="/admin_instructor" element={<AdminInstructor />} />
          <Route path="/admin_settings" element={<AdminSettings/>} />
          <Route path="/admin_profile" element={<AdminProfile/>} />
          <Route path="/admin_landing" element={<AdminLanding/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router