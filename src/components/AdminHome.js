import React from "react";
import { Row, Col } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import AdminSideMenu from "./AdminComponents/AdminSideMenu";
import AllCoordinators from "./AdminComponents/AllCoordinators";
import Allcourses from "./AdminComponents/Allcourses";
import StudentNav from "./StudentNav";
import InnerFooter from "./InnerFooter";
import UploadSchedule from "./AdminComponents/UploadSchedule";
import Notice from "./AdminComponents/Notice";


// Welcome Component for Admin
const AdminWelcomeMessage = () => (
  <div
    className="d-flex flex-column align-items-center justify-content-center p-3"
    style={{ minHeight: "calc(100vh - 140px)" }} // Adjusting for nav & footer
  >
    <h1 className="text-success fw-bold mb-2">Welcome Admin!</h1>
    <img
      src="/Images/Image1.png"
      alt="Admin Dashboard"
      className="img-fluid rounded shadow mt-3"
      style={{
        width: "90%",           
        maxHeight: "90vh",     
        objectFit: "cover"    
      }}
    />
  </div>
);

function AdminHome() {
  return (
    <div className="admin-layout">
      <StudentNav />
      <div className="content-wrapper">
        <Row>
          <Col md="3">
            <AdminSideMenu />
          </Col>
          <Col md="9">
            <Routes>
              <Route path="/" element={<AdminWelcomeMessage />} />
              <Route path="upload-schedule" element={<UploadSchedule/>} />
              <Route path="view-courses" element={<Allcourses />} />
              <Route path="all-coordinator" element={<AllCoordinators />} />
              <Route path="cdac-schedule" element={<h2>CDAC Schedule Page</h2>} />
              <Route path="notice" element={<Notice/>} />
            </Routes>
          </Col>
        </Row>
      </div>
      <InnerFooter />
    </div>
  );
}

export default AdminHome;