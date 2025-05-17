import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Routes, Route, Outlet } from "react-router-dom";
import DacCourseContent from "../StudentComponents/DacCourseContent";
import DbdaCourseContent from "../StudentComponents/DbdaCourseContent";
import InnerFooter from "../InnerFooter";
import CourseSideMenu from "./CourseSideMenu";
import StudentNav from "../StudentNav";

function Course() {
  return (
    <div className="admin-layout">
      <StudentNav />
      <Container fluid>
        <Row>
          <Col md="3">
            <CourseSideMenu/>
          </Col>
          <Col md="9">
            {/* Nested Routes */}
            <Routes>
              <Route path="dac-course" element={<DacCourseContent/>} />
              <Route path="dbda-course" element={<DbdaCourseContent/>} />
            </Routes>

            {/* Fallback for unmatched routes */}
            <Outlet />
          </Col>
        </Row>
      </Container>
      <InnerFooter />
    </div>
  );
}

export default Course;
