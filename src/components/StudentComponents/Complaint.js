import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";

const base_url = "http://localhost:9090/complaints"; 

const Complaint = () => {
  const [complaint, setComplaint] = useState({ studentName: "", description: "" });

  const handleChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };

  const submitComplaint = async () => {
    if (!complaint.studentName || !complaint.description) {
      toast.warn("Please fill out all fields");
      return;
    }

    console.log("Submitting complaint:", complaint);
    try {
      await axios.post(`${base_url}/submit`, complaint, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Complaint submitted successfully!");
      setComplaint({ studentName: "", description: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting complaint:", error);
      toast.error("Error submitting complaint. Check backend.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "450px", borderRadius: "12px", backgroundColor: "#f8f9fa" }}>
        <h3 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>📢 Complaint Form</h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control p-3 shadow-sm rounded"
            placeholder="Your Name"
            name="studentName"
            value={complaint.studentName}
            onChange={handleChange}
            style={{ border: "1px solid #ccc" }}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control p-3 shadow-sm rounded"
            placeholder="Your Complaint"
            name="description"
            value={complaint.description}
            onChange={handleChange}
            rows="4"
            style={{ border: "1px solid #ccc" }}
          ></textarea>
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-danger px-4 py-2"
            onClick={submitComplaint}
            style={{
              fontWeight: "bold",
              borderRadius: "8px",
              transition: "0.3s",
            }}
          >
            Submit 
          </button>

          <button
            className="btn btn-secondary px-4 py-2"
            onClick={() => setComplaint({ studentName: "", description: "" })}
            style={{
              fontWeight: "bold",
              borderRadius: "8px",
              transition: "0.3s",
            }}
          >
            Reset 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
