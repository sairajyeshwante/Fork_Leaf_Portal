import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import base_url from "../API/ServiceAPI";
import "./css/style.css";

const AdminLogin = () => {
  const [prn, setPrn] = useState("");
  const [password, setPassword] = useState("");
  const [prnError, setPrnError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  

  const validateForm = () => {
    let isValid = true;
    setPrnError("");
    setPasswordError("");

    if (!prn) {
      setPrnError("Admin Id is required.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    }

    return isValid;
  };

  const onLogin = () => {
    if (!validateForm()) return;
    const admin={prn,password};
    console.log(admin);
    axios.post(`${base_url}/adminlogin`, {id: prn,password} )
      .then((response) => {
        console.log("Login Successful:", response.data);
        navigate("/adminHome"); // Redirect on success
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setLoginError("Invalid login credentials");
      });
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <div className="d-flex justify-content-center mb-4">
          <img className="logo" src="/logo.png" alt="Logo" style={{ height: "85px", width: "129px" }} />
        </div>
        <h5 className="text-center mb-4">ForkLeaf Portal</h5>

        <form>
          <div className="form-group mb-3">
            <label htmlFor="prn">Admin Id</label>
            <input
              type="text"
              id="prn"
              className="form-control"
              placeholder="Enter Admin Id"
              value={prn}
              onChange={(e) => setPrn(e.target.value)}
            />
            {prnError && <div className="text-danger" style={{ fontSize: "0.85rem" }}>{prnError}</div>}
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
            {passwordError && <div className="text-danger" style={{ fontSize: "0.85rem" }}>{passwordError}</div>}
          </div>

          {loginError && <div className="text-danger text-center mb-3">{loginError}</div>}

          <button type="button" className="btn btn-success w-100" onClick={onLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;