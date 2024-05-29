import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import MiniHeader from "../common/MiniHeader";
import Header from "../common/Header";

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userArray = Object.values(formData);
    console.log(userArray);
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      mobile: "",
      adhar: "",
    });
    alert("Form submitted successfully!");
    navigate("/studentdash");
    // Handle form submission here
    // console.log(formData);
  };

  return (
    <>
      <MiniHeader />
      <Header />
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-md-6 shadow p-4 border-radius bg-light">
            <h1 className="text-center mb-4">Login</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-12">
                  <label className="p-2" htmlFor="mobile">
                    Enter mobile number...
                  </label>
                  <input
                    type="tel"
                    className="form-control border-0 border-radius mt-2"
                    id="mobile"
                    placeholder="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    style={{ height: "45px" }}
                  />
                  <label className="p-2" htmlFor="password">
                    Enter mobile number...
                  </label>
                  <input
                    type="password"
                    className="form-control border-0 border-radius mt-2"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{ height: "45px" }}
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
                  I dont't have an account
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
