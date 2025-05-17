import React from "react";
import { Row, Col } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import SideMenu from "./StudentComponents/SideMenu";
import StudentNav from "./StudentNav";
import InnerFooter from "./InnerFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DacCourseContent from "./StudentComponents/DacCourseContent";
import Feedback from "./StudentComponents/Feedback";
import ViewSchedule from "./StudentComponents/ViewSchedule";
import Complaint from "./StudentComponents/Complaint";

const WelcomeMessage = () => (
  <div
    className="d-flex flex-column align-items-center justify-content-center p-4"
    style={{ minHeight: "calc(100vh - 150px)" }} 
  >
    <h1 className="text-primary fw-bold mb-3">Welcome, Student!</h1>
    <img src="/Images/StudentInterface.png"
      alt="Student Portal"
      className="img-fluid rounded shadow mt-3"
      style={{ 
        maxWidth: "90%",        
        height: "auto",         
        maxHeight: "60vh",      
        objectFit: "contain"    
      }}
    />
  </div>
);
const StudentHome = () => {
  return (
    <div className="student-layout">
      <ToastContainer position="top-right" autoClose={3000} />
      <StudentNav />
      <div className="content-wrapper">
        <Row>
          <Col md="3">
            <SideMenu />
          </Col>
          <Col md="9">
            <Routes>
            <Route path="/" element={<WelcomeMessage />} />
            <Route path="view-schedule" element={<ViewSchedule/>} />
            <Route path="course-content" element={<DacCourseContent />} />
            <Route path="feedback" element={<Feedback/>} />
            <Route path="complaint" element={<Complaint/>} />
            </Routes>
          </Col>
        </Row>
      </div>
      <InnerFooter />
    </div>
  );
};

export default StudentHome;
