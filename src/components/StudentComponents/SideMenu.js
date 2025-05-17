import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SideMenu = () => {
  const menuItems = [
    { label: "Personal Details", path: "/studentHome/personal-details" },
    { label: "CDAC Schedule", path: "/studentHome/view-schedule" },
    { label: "Aptitude Test", path: "/studentHome/aptitude-test" },
    { label: "Surprise Test", path: "/studentHome/surprise-test" },
    { label: "Module End Test", path: "/studentHome/module-end-test" },
    { label: "Course Content", path: "/studentHome/course-content" },
    { label: "Feedback", path: "/studentHome/feedback" },
    { label: "Complaint", path: "/studentHome/complaint" },
    { label: "Notice", path: "/studentHome/notice" },
  ];

  return (
    <div className="d-flex flex-column bg-light p-3 border-end" style={{ width: "200px", minHeight: "45vh" }}>
      <div className="list-group">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="list-group-item">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;