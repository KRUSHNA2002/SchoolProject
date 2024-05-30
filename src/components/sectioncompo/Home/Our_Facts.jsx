import React from "react";
import { Link } from "react-router-dom";
import playicon from "../../../assets/home/play-icon.png";
import { Roll, Zoom } from "react-awesome-reveal";

const Our_Facts = () => {
  return (
    <>
      <section className="our-facts mt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <h1>
                    A Few Facts About Our{" "}
                    <span className="text-danger">School</span>
                  </h1>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <Zoom>
                      <div className="col-12">
                        <div className="count-area-content percentage">
                          <div className="count-digit">94</div>
                          <div className="count-title">Succesed Students</div>
                        </div>
                      </div>
                    </Zoom>
                    <Zoom>
                      <div className="col-12">
                        <div className="count-area-content">
                          <div className="count-digit">126</div>
                          <div className="count-title">Current Teachers</div>
                        </div>
                      </div>
                    </Zoom>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <Zoom>
                      <div className="col-12">
                        <div className="count-area-content new-students">
                          <div className="count-digit">2345</div>
                          <div className="count-title">New Students</div>
                        </div>
                      </div>
                    </Zoom>
                    <Zoom>
                      <div className="col-12">
                        <div className="count-area-content">
                          <div className="count-digit">32</div>
                          <div className="count-title">Awards</div>
                        </div>
                      </div>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <Roll>
                <div className="video">
                  <Link to="https://www.youtube.com" target="_blank">
                    <img src={playicon} className="img-fluid mt-5" alt="" />
                  </Link>
                </div>
              </Roll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Our_Facts;
