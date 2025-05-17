import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../API/ServiceAPI";

const AddCoordinator = ({ onCoordinatorAdded, onCancel }) => {
    useEffect(() => {
        document.title = "Add Coordinator";
    }, []);

    const [coordinator, setCoordinator] = useState({
        employeeId: "",
        fullName: "",
        email: "",
        course: { courseName: "" }, // Statically input course name
        password: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [employeeIdError, setEmployeeIdError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "courseName") {
            setCoordinator({ ...coordinator, course: { courseName: value } });
        } else {
            setCoordinator({ ...coordinator, [name]: value });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const validateForm = () => {
        let isValid = true;
        setEmployeeIdError("");
        setPasswordError("");

        if (!coordinator.employeeId) {
            setEmployeeIdError("Employee ID is required.");
            isValid = false;
        } else if (!/^\d{10}$/.test(coordinator.employeeId)) {
            setEmployeeIdError("Employee ID must be exactly 10 digits.");
            isValid = false;
        }

        if (!coordinator.password) {
            setPasswordError("Password is required.");
            isValid = false;
        } else if (coordinator.password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
            isValid = false;
        } else if (coordinator.password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            isValid = false;
        }

        return isValid;
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (loading) return;
        if (!validateForm()) return;

        setLoading(true);
        postDataToServer(coordinator);
    };

    const postDataToServer = (data) => {
        axios.post(`${base_url}/coordinators`, data)
            .then((response) => {
                toast.success("Coordinator added successfully!");
                setCoordinator({
                    employeeId: "", fullName: "", email: "", course: { courseName: "" }, password: ""
                });
                setConfirmPassword("");
                setEmployeeIdError("");
                setPasswordError("");
                onCoordinatorAdded();
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error adding coordinator:", error);
                if (error.response && error.response.data) {
                    toast.error(error.response.data.message || "Error! Something went wrong");
                } else {
                    toast.error("Error! Something went wrong");
                }
            });
    };

    const handleCancel = () => {
        setCoordinator({
            employeeId: "", fullName: "", email: "", course: { courseName: "" }, password: ""
        });
        setConfirmPassword("");
        setEmployeeIdError("");
        setPasswordError("");
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <Form onSubmit={handleForm} className="form-spacing">
            <h1 className="text-center my-1">Add Coordinator</h1>

            <FormGroup>
                <label htmlFor="employeeId">Employee ID</label>
                <Input
                    type="text"
                    placeholder="Enter Employee ID"
                    name="employeeId"
                    id="employeeId"
                    value={coordinator.employeeId}
                    onChange={handleChange}
                    required
                />
                {employeeIdError && <div className="text-danger">{employeeIdError}</div>}
            </FormGroup>

            <FormGroup>
                <label htmlFor="fullName">Name</label>
                <Input
                    type="text"
                    placeholder="Enter Name"
                    name="fullName"
                    id="fullName"
                    value={coordinator.fullName}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup>
                <label htmlFor="email">Email</label>
                <Input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    value={coordinator.email}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            {/* Static Text Input for Course Name */}
            <FormGroup>
                <label htmlFor="courseName">Course Name</label>
                <Input
                    type="text"
                    placeholder="Enter Course Name"
                    name="courseName"
                    id="courseName"
                    value={coordinator.course.courseName}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup>
                <label htmlFor="password">Password</label>
                <Input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="password"
                    value={coordinator.password}
                    onChange={handleChange}
                    required
                />
                {passwordError && <div className="text-danger">{passwordError}</div>}
            </FormGroup>

            <FormGroup>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
            </FormGroup>

            <div className="container-buttons">
                <Button type="submit" color="success">Add</Button>
                <Button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</Button>
            </div>
        </Form>
    );
};

export default AddCoordinator;
