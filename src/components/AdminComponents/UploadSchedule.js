import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Ensure styles are included
import "./Style/UploadSchedule.css";

const UploadSchedule = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            toast.error("Please select a file to upload.");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.post("http://localhost:9090/api/schedule/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("File uploaded successfully!");
            setFile(null);
        } catch (error) {
            toast.error("Upload failed. Please try again.");
            console.error("Error uploading file:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-container">
            <div className="upload-card">
                <h2 className="upload-title">📂 Upload CDAC Schedule</h2>

                <label className="file-input">
                    <input type="file" accept="application/pdf" onChange={handleFileChange} hidden />
                    <span className="file-label">{file ? file.name : "📄 Choose a PDF file"}</span>
                </label>

                <button
                    className={`upload-button ${loading ? "disabled" : ""}`}
                    onClick={handleUpload}
                    disabled={loading}
                >
                    {loading ? "⏳ Uploading..." : "⬆️ Upload"}
                </button>
            </div>
        </div>
    );
};

export default UploadSchedule;
