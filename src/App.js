import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage';
import StudentLogin from './components/StudentLogin';
import CoordinatorLogin from './components/CoordinatorLogin';
import AdminLogin from './components/AdminLogin';
import StudentHome from './components/StudentHome';
import AdminHome from './components/AdminHome';
import Course from './components/HomeCourse/Course';  // Correct Import

const App = () => {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/*" element={<Course/>} /> {/* Nested Route */}
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/coordinator" element={<CoordinatorLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/studentHome/*" element={<StudentHome />} />
        <Route path="/adminHome/*" element={<AdminHome />} />
      </Routes>
    </Router>
  );
};

export default App;
