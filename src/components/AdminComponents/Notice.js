import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Notice.css";

const base_url = "http://localhost:9090/notices";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [notice, setNotice] = useState({ title: "", description: "" });

  // Fetch notices from backend
  const fetchNotices = async () => {
    try {
      const response = await axios.get(`${base_url}/all`);
      setNotices(response.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
      toast.error("Failed to load notices.");
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };

  // Submit new notice
  const submitNotice = async () => {
    if (!notice.title || !notice.description) {
      toast.warn("Please fill in all fields.");
      return;
    }

    try {
      await axios.post(`${base_url}/add`, notice, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Notice added successfully!");
      setNotice({ title: "", description: "" });
      fetchNotices(); // Refresh notice list
    } catch (error) {
      console.error("Error adding notice:", error);
      toast.error("Failed to add notice.");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center">📢 Notice Board</h3>

      <div className="notice-card">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Notice Title"
          name="title"
          value={notice.title}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Notice Description"
          name="description"
          value={notice.description}
          onChange={handleChange}
          rows="3"
        ></textarea>

        <button className="btn btn-primary w-100" onClick={submitNotice}>
          Add Notice
        </button>
      </div>

      <h4 className="mt-4 text-center">📜 Recent Notices</h4>
      <div className="notice-list">
        {notices.length > 0 ? (
          notices.map((item, index) => (
            <div key={index} className="notice-item">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <small className="text-muted">{new Date(item.timestamp).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p className="text-center">No notices available.</p>
        )}
      </div>
    </div>
  );
};

export default Notice;
