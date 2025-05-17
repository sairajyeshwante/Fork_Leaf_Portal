import "./Style/Addcourse.css";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../../API/ServiceAPI";
import { toast } from "react-toastify";

const Addcourse = ({ onCourseAdded }) => {

    useEffect(() => {
        document.title = "Add Courses";
    }, []);

    const [course, setCourse] = useState({ courseTitle: "", courseDesc: "", courseId: "" });

    // Form handler function
    const handleForm = (e) => {
        e.preventDefault();
        postDataToServer(course);
    };

    // Post Data to Server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                toast.success("Course added successfully");
                setCourse({ courseTitle: "", courseDesc: "", courseId: "" }); // Clear form fields
                onCourseAdded(); // Notify Allcourses.js to refresh course list
            },
            (error) => {
                console.error("Error adding course:", error);
                toast.error("Error! Something went wrong");
            }
        );
    };

    return (
        <Form onSubmit={handleForm} className="form-spacing">
            <h1 className="text-center my-1">Add Course</h1>
            <FormGroup>
                <label htmlFor="courseId">Course Id</label>
                <Input
                    type="number"
                    placeholder="Enter Course Id"
                    name="courseId"
                    required
                    id="courseId"
                    value={course.courseId}
                    onChange={(e) => setCourse({ ...course, courseId: e.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="courseTitle">Course Title</label>
                <Input
                    type="text"
                    placeholder="Enter title here"
                    name="courseTitle"
                    required
                    id="courseTitle"
                    value={course.courseTitle}
                    onChange={(e) => setCourse({ ...course, courseTitle: e.target.value })}
                />
            </FormGroup>

            <FormGroup>
                <label htmlFor="courseDesc">Course Description</label>
                <Input
                    type="textarea"
                    placeholder="Enter description here"
                    name="courseDesc"
                    required
                    id="courseDesc"
                    style={{ height: 100 }}
                    value={course.courseDesc}
                    onChange={(e) => setCourse({ ...course, courseDesc: e.target.value })}
                />
            </FormGroup>
            <div className="container-buttons">
    <Button type="submit" color="success">Add</Button>
    <Button type="button" className="cancel-btn" onClick={onCourseAdded}>Cancel</Button>

</div>

        </Form>
    );
};

export default Addcourse;
