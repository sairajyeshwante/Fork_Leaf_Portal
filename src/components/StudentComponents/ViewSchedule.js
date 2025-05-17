import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewSchedule = () => {
    const [pdfUrl, setPdfUrl] = useState("");

    useEffect(() => {
        axios.get("http://localhost:9090/api/schedule/download", { responseType: "blob" })
            .then((response) => {
                const fileURL = URL.createObjectURL(response.data);
                setPdfUrl(fileURL);
            })
            .catch(() => {
                console.error("Failed to fetch schedule.");
            });
    }, []);

    return (
        <div>
            <h2>CDAC Schedule</h2>
            {pdfUrl ? (
                <iframe src={pdfUrl} width="100%" height="600px"></iframe>
            ) : (
                <p>No schedule available</p>
            )}
        </div>
    );
};

export default ViewSchedule;
