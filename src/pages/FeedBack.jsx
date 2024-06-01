import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/feedback/image.jpg';
const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the feedback to the server or perform any other action
    console.log("Feedback submitted:", feedback);
    // Clear the feedback field after submission
    setFeedback("");
  };

  return (
    <>
      {/*  section first background image fiexed */}

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 bg-img-feedback  ">
              <div className="row">
                <div className="text-center fw-bold text-white feedback-heading animated-slide-down">
                  Feedback Page
                </div>
                <div className="feedback-link animated-slide-down">
                  <Link
                    className="text-dark text-decoration-none"
                    style={{ fontSize: "20px" }}
                    to="/feedback"
                  >
                    Feedback
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <span className="text-dark mt-1"> / </span>&nbsp;&nbsp;
                  <Link
                    className="text-white text-decoration-none mt-1"
                    to="/about"
                  >
                    About
                  </Link>
                  &nbsp;
                  <span className="text-dark mt-1"> / </span>&nbsp;&nbsp;
                  <Link className="text-white text-decoration-none mt-1" to="/">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback section 2 start *********************************/}
      <section>
        <div>
          <h2 className='section2-heading'>Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className=" container form-group form">
              <div className="col-md-7">
                <textarea
                  className="form-control"
                  id="feedbackTextarea"
                  rows="3"
                  value={feedback}
                  onChange={handleChange}
                  placeholder='Enter Your FeedBack Here .....'
                  required
                ></textarea>
                <div className='text-center mb-5 mt-4'>
                  <button type="submit" className=" btn btn-primary">Submit</button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </section>

    </>

  );
};

export default Feedback;
