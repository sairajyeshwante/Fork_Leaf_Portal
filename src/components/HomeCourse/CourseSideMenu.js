import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseSideMenu = () => {
  const menuItems = [
    { label: "DAC Course", path: "dac-course" }, // Relative Path
    { label: "DBDA Course", path: "dbda-course" }, // Relative Path
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

export default CourseSideMenu;
