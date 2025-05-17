import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import base_url from '../API/ServiceAPI';
import axios from 'axios';
import './css/style.css';

const CoordinatorLogin = () => {
  const [prn, setPrn] = useState('');
  const [password, setPassword] = useState('');
  const [course, setCourse] = useState('');
  const [prnError, setPrnError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    setPrnError('');
    setPasswordError('');

    if (!prn) {
      setPrnError('PRN number is required.');
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(prn)) {
      setPrnError('PRN number must be 10 digits.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 3) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    }

    return isValid;

  };
  const onLogin = () => {
    if (!validateForm()) return;
    
    const payload = { id: prn, password, courseName: course};

    axios
      .post(`${base_url}/coordinatorLogin`, payload)
      .then((response) => {
        console.log("Login Successful:", response.data);
        navigate("/coordinatorHome"); 
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setLoginError("Invalid login credentials");
      });
  };


  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
  <div className="card p-4">
    {/* Center the logo */}
    <div className="d-flex justify-content-center mb-4">
      <img
        className="logo"
        src="/logo.png"
        alt="Logo"
        style={{ height: '85px', width: '129px' }}
      />
    </div>
    <h5 className="text-center mb-4">ForkLeaf Portal</h5>

    <form>
      <div className="form-group mb-3">
        <label htmlFor="prn">EMP Id</label>
        <input
          type="text"
          id="prn"
          className="form-control"
          placeholder="Enter Employee Id"
          value={prn}
          onChange={(e) => setPrn(e.target.value)}
        />
        {prnError && (
          <div className="text-danger" style={{ fontSize: '0.85rem' }}>
            {prnError}
          </div>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <div className="text-danger" style={{ fontSize: '0.85rem' }}>
            {passwordError}
          </div>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="course">Course</label>
        <select
          id="course"
          className="form-control"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select a course</option>
          <option value="Java">Java</option>
          <option value="Engineering">CDAC</option>
          <option value="Medicine">DBDA</option>
          <option value="Law">Law</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <button
        type="button"
        className="btn btn-success w-100"
        onClick={onLogin}
      >
        Login
      </button>
      <p className="text-center mt-3">
        <a href="/forget" style={{ textDecoration: 'none' }}>
          Forgot Password?
        </a>
      </p>
    </form>
  </div>
</div>

  );
};
export default CoordinatorLogin;