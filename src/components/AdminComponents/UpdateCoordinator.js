import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../API/ServiceAPI";

const UpdateCoordinator = ({ coordinatorToUpdate, onUpdateComplete, onCancel }) => {
    const [coordinator, setCoordinator] = useState(coordinatorToUpdate || {});

    useEffect(() => {
        setCoordinator(coordinatorToUpdate || {});
    }, [coordinatorToUpdate]);

    const handleChange = (e) => {
        setCoordinator({ ...coordinator, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`${base_url}/coordinators/${coordinator.employeeId}`, coordinator)
            .then(() => {
                toast.success("Coordinator updated successfully!");
                onUpdateComplete();
            })
            .catch((error) => {
                console.error("Error updating coordinator:", error);
                toast.error("Failed to update coordinator. Please try again.");
            });
    };

    return (
        <Form onSubmit={handleUpdate} className="form-spacing">
            <h1 className="text-center my-1">Update Coordinator</h1>

            <FormGroup>
                <label>Employee ID</label>
                <Input type="text" name="employeeId" value={coordinator.employeeId} disabled />
            </FormGroup>

            <FormGroup>
                <label>Full Name</label>
                <Input type="text" name="fullName" value={coordinator.fullName} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
                <label>Email</label>
                <Input type="email" name="email" value={coordinator.email} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
                <label>Course Name</label>
                <Input type="text" name="courseName" value={coordinator.courseName} onChange={handleChange} required />
            </FormGroup>

            <div className="container-buttons">
                <Button type="submit" color="success">Update</Button>
                <Button type="button" className="cancel-btn" onClick={onCancel}>Cancel</Button>
            </div>
        </Form>
    );
};

export default UpdateCoordinator;
