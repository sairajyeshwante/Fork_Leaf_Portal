import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminSideMenu = () => {
  const menuItems = [
    { label: "CDAC Schedule", path: "/adminHome/upload-schedule" },
    { label: "Courses", path: "/adminHome/view-courses" },
    { label: "Coordinators", path: "/adminHome/all-coordinator" },
    { label: "Notice", path: "/adminHome/notice" },
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

export default AdminSideMenu;
