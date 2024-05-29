import React, { useState } from "react";
import { Fade, Roll } from "react-awesome-reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getContactus = (e) => {
    e.preventDefault();
    const userArray = Object.values(formData);
    console.log(userArray);
    setFormData({
      name: " ",
      email: " ",
      subject: " ",
      message: " ",
    });
    alert("Message send Successfully");
    // console.log(formData);
  };

  return (
    <div>
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 align-self-center">
              <Fade direction="left">
                <div className="row">
                  <div className="col-lg-12">
                    <form id="contact" onSubmit={getContactus}>
                      <div className="row">
                        <div className="col-lg-12">
                          <h2>Let's get in touch</h2>
                        </div>
                        <div className="col-lg-4">
                          <fieldset>
                            <input
                              name="name"
                              type="text"
                              id="name"
                              placeholder="YOUR NAME...*"
                              onChange={handleChange}
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-4">
                          <fieldset>
                            <input
                              name="email"
                              type="email"
                              id="email"
                              placeholder="YOUR EMAIL..."
                              onChange={handleChange}
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-4">
                          <fieldset>
                            <input
                              name="subject"
                              type="text"
                              id="subject"
                              placeholder="SUBJECT...*"
                              onChange={handleChange}
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              placeholder="YOUR MESSAGE..."
                              onChange={handleChange}
                              required
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="button"
                            >
                              SEND MESSAGE NOW
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 p-3">
              <Roll>
                <div className="right-info text-white">
                  <ul>
                    <li>
                      <h6>Phone Number</h6>
                      <span>010-020-0340</span>
                    </li>
                    <li>
                      <h6>Email Address</h6>
                      <span>info@meeting.edu</span>
                    </li>
                    <li>
                      <h6>Street Address</h6>
                      <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
                    </li>
                    <li>
                      <h6>Website URL</h6>
                      <span>www.meeting.edu</span>
                    </li>
                  </ul>
                </div>
              </Roll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
