import React, { useState } from "react";
import { Link } from "react-router-dom";
import MiniHeader from "../common/MiniHeader";
import Header from "../common/Header";

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <MiniHeader />
      <Header />
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-md-6 shadow p-4 rounded-1 bg-light">
            <h1 className="text-center mb-4">Login</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-12">
                  <input
                    type="tel"
                    className="form-control border-0 border-radius mt-2"
                    id="mobile"
                    placeholder="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    className="form-control border-0 border-radius mt-2"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-danger">
                  Login Now
                </button>
              </div>

              <div className="text-center mt-3">
                <Link to="/register" className="btn btn-link">
                  I Haven't an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
