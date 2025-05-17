import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../API/ServiceAPI";
import AddCoordinator from "./AddCoordinator";
import UpdateCoordinator from "./UpdateCoordinator";
import "./Style/Allcourse.css";

const AllCoordinators = () => {
    const [coordinators, setCoordinators] = useState([]);
    const [selectedCoordinator, setSelectedCoordinator] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const toastRef = useRef(false); // To prevent duplicate toasts

    const getAllCoordinators = () => {
        axios.get(`${base_url}/coordinators`).then(
            (response) => {
                setCoordinators(response.data);
                if (!toastRef.current) {
                    toast.success("Coordinators have been loaded!");
                    toastRef.current = true;
                }
            },
            (error) => {
                console.error("Error fetching coordinators:", error);
                toast.error("Something went wrong");
            }
        );
    };

    useEffect(() => {
        document.title = "All Coordinators";
        getAllCoordinators();
    }, []);

    const deleteCoordinator = (id) => {
        axios
            .delete(`${base_url}/coordinators/${id}`)
            .then(() => {
                toast.success("Coordinator deleted successfully!");
                setCoordinators((prev) =>
                    prev.filter((coordinator) => coordinator.employeeId !== id)
                ); // Update UI immediately
            })
            .catch((error) => {
                console.error("Error deleting coordinator:", error);
                toast.error("Failed to delete the coordinator. Please try again.");
            });
    };

    const handleEdit = (coordinator) => {
        setSelectedCoordinator(coordinator);
        setShowAddForm(false);
    };

    const handleAddNewCoordinator = () => {
        setSelectedCoordinator(null);
        setShowAddForm(true);
    };

    const handleCoordinatorAdded = () => {
        setShowAddForm(false);
        getAllCoordinators();
    };

    const handleCoordinatorUpdated = () => {
        setSelectedCoordinator(null); // Hide Update Form
        getAllCoordinators(); // Refresh coordinator list
    };

    const handleCancelUpdate = () => {
        setSelectedCoordinator(null);
    };

    return (
        <div className="admin-dashboard">
            <h1>Coordinator Management</h1>

            <div className="table-controls">
                <button className="add-new" onClick={handleAddNewCoordinator}>
                    + Add New Coordinator
                </button>
            </div>

            {showAddForm ? (
                <AddCoordinator 
                    onCoordinatorAdded={handleCoordinatorAdded} 
                    onCancel={() => setShowAddForm(false)}
                />
            ) : selectedCoordinator ? (
                <UpdateCoordinator
                    coordinatorToUpdate={selectedCoordinator}
                    onUpdateComplete={handleCoordinatorUpdated}
                    onCancel={handleCancelUpdate}
                />
            ) : (
                <table className="item-table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Employee Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Course Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coordinators.length > 0 ? (
                            coordinators.map((item, index) => (
                                <tr key={item.employeeId}>
                                    <td>{index + 1}</td>
                                    <td>{item.employeeId}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.courseName}</td>
                                    <td>
                                        <button 
                                            className="edit-button"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>

                                        <button 
                                            className="delete-button"
                                            onClick={() => deleteCoordinator(item.employeeId)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No Coordinator Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AllCoordinators;
