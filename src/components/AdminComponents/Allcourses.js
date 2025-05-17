import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../API/ServiceAPI";
import UpdateCourse from "./UpdateCourse";
import Addcourse from "./Addcourse";
import "./Style/Allcourse.css";

const Allcourses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const toastRef = useRef(false);

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                setCourses(response.data);
                if (!toastRef.current) {
                    toast.success("Courses have been loaded!");
                    toastRef.current = true;
                }
            },
            (error) => {
                console.error("Error fetching courses:", error);
                toast.error("Something went wrong");
            }
        );
    };

    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, []);

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            () => {
                toast.success("Course deleted successfully!");
                setCourses(courses.filter(course => course.courseId !== id)); // Optimized update
            },
            (error) => {
                console.error("Error deleting course:", error);
                toast.error("Failed to delete the course.");
            }
        );
    };

    return (
        <div className="admin-dashboard">
            <h1>Course Management</h1>
            <button className="add-new" onClick={() => setShowAddForm(true)}>+ Add New Course</button>

            {showAddForm ? (
                <Addcourse onCourseAdded={() => {
                    setShowAddForm(false);
                    getAllCoursesFromServer();
                }} />
            ) : selectedCourse ? (
                <UpdateCourse 
                    courseToUpdate={selectedCourse} 
                    onUpdateComplete={() => {
                        setSelectedCourse(null);
                        getAllCoursesFromServer();
                    }} 
                    onCancel={() => setSelectedCourse(null)} 
                />
            ) : (
                <table className="item-table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Course Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length > 0 ? courses.map((item, index) => (
                            <tr key={item.courseId}>
                                <td>{index + 1}</td>
                                <td>{item.courseId}</td>
                                <td>{item.courseTitle}</td>
                                <td>{item.courseDesc}</td>
                                <td>
                                    <button className="edit-button" onClick={() => setSelectedCourse(item)}>Edit</button>
                                    <button className="delete-button" onClick={() => deleteCourse(item.courseId)}>Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5">No Courses Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Allcourses;