import React, { useState } from "react";
import { Link } from "react-router-dom";
import MiniHeader from "../common/MiniHeader";
import Header from "../common/Header";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobile: "",
    adhar: "",
    address: "",
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
          <div className="col-md-6 shadow p-4 rounded border-0 bg-light">
            <h1 className="text-center mb-4">Register</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control mt-2 order-radius border-0" 
                    id="firstName"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    style={{ height: "43px" }}
                  />
                </div>

                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control mt-2 order-radius border-0" 
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={{ height: "43px" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2 order-radius border-0" 
                  id="username"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  style={{ height: "43px" }}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-2 order-radius border-0" 
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ height: "43px" }}
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  className="form-control mt-2 order-radius border-0" 
                  id="mobile"
                  placeholder="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  style={{ height: "43px" }}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2 order-radius border-0" 
                  id="adhar"
                  placeholder="Adhar Number"
                  name="adhar"
                  value={formData.adhar}
                  onChange={handleChange}
                  required
                  style={{ height: "43px" }}
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control mt-2 order-radius border-0" 
                  id="address"
                  rows="3"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{ height: "100px" }} 
                ></textarea>
              </div>

              <div className="d-flex justify-content-center mt-4">
                <button
                  type="submit"
                  className="btn btn-danger order-radius"
                  style={{ width: "50%", height: "45px" }}
                >
                  Submit
                </button>
              </div>

              <div className="text-center mt-3">
                <Link to="/login" className="btn btn-link">
                  I already have an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
