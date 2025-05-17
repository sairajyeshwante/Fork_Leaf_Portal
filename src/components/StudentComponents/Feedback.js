import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";

const base_url = "http://localhost:9090/feedback"; // Adjust based on backend URL

const Feedback = () => {
  const [feedback, setFeedback] = useState({ studentName: "", description: "" });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const submitFeedback = async () => {
    if (feedback.studentName && feedback.description) {
      try {
        await axios.post(`${base_url}/submit`, feedback);
        toast.success("Feedback submitted successfully!");
        setFeedback({ studentName: "", description: "" });
      } catch (error) {
        console.error("Error submitting feedback:", error);
        toast.error("Error submitting feedback");
      }
    } else {
      toast.warn("⚠️ Please fill out all fields");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "450px", borderRadius: "12px", backgroundColor: "#f8f9fa" }}>
        <h3 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>💬 Feedback Form</h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control p-3 shadow-sm rounded"
            placeholder="Your Name"
            name="studentName"
            value={feedback.studentName}
            onChange={handleChange}
            style={{ border: "1px solid #ccc" }}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control p-3 shadow-sm rounded"
            placeholder="Your Feedback"
            name="description"
            value={feedback.description}
            onChange={handleChange}
            rows="4"
            style={{ border: "1px solid #ccc" }}
          ></textarea>
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-success px-4 py-2"
            onClick={submitFeedback}
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
            onClick={() => setFeedback({ studentName: "", description: "" })}
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

export default Feedback;
