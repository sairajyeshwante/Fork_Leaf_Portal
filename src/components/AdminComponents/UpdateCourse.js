import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../API/ServiceAPI";

const UpdateCourse = ({ courseToUpdate, onUpdateComplete, onCancel }) => {
    const [course, setCourse] = useState({
        courseId: "",
        courseTitle: "",
        courseDesc: "",
    });

    useEffect(() => {
        if (courseToUpdate) {
            setCourse({
                courseId: courseToUpdate.courseId,
                courseTitle: courseToUpdate.courseTitle,
                courseDesc: courseToUpdate.courseDesc
            }); 
        }
    }, [courseToUpdate]);

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${base_url}/courses/${course.courseId}`, course)
            .then(() => {
                toast.success("Course updated successfully!");
                onUpdateComplete(); // Refresh course list
            })
            .catch((error) => {
                console.error("Error updating course:", error);
                toast.error("Failed to update course.");
            });
    };

    return (
        <Form onSubmit={handleSubmit} className="form-spacing">
            <h1 className="text-center my-1">Edit Course</h1>

            <FormGroup>
                <label htmlFor="courseId">Course ID</label>
                <Input type="number" value={course.courseId} disabled readOnly id="courseId" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="courseTitle">Course Title</label>
                <Input 
                    type="text"
                    name="courseTitle"
                    value={course.courseTitle}
                    onChange={handleChange}
                    required 
                    id="courseTitle"
                />
            </FormGroup>

            <FormGroup>
                <label htmlFor="courseDesc">Course Description</label>
                <Input
                    type="textarea"
                    name="courseDesc"
                    value={course.courseDesc}
                    onChange={handleChange}
                    required
                    id="courseDesc"
                    style={{ height: 100 }}
                />
            </FormGroup>

            <div className="container-buttons">
                <Button type="submit" color="success">Update</Button>
                <Button type="button" className="cancel-btn" onClick={onCancel}>Cancel</Button>
            </div>
        </Form>
    );
};

export default UpdateCourse;
