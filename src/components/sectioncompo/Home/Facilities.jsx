import React from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const Facilities = () => {
  return (
    <div>
      <Zoom>
        <div className="conatiner">
          <div className="row">
            <div className="col-md-3 col-sm-6 pb-4">
              <div className="card card-hover">
                <div className="school_icons mt-3">
                  <i className="fa-solid fa-bus text-center"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">School Bus</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link href="#" className="btn btn-outline-danger  mt-2">
                      More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 pb-4">
              <div className="card card-hover">
                <div className="school_icons mt-3">
                  <i className="fa-regular fa-futbol"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">Playground</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link href="#" className="btn btn-outline-danger  mt-2">
                      More..
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 pb-4">
              <div className="card card-hover">
                <div className="school_icons mt-3">
                  <i className="fa-solid fa-house"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">Healthy Canteen</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link href="#" className="btn btn-outline-danger  mt-2">
                      More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 pb-4">
              <div className="card card-hover">
                <div className="school_icons mt-3">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">Positive Learning</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link href="#" className="btn btn-outline-danger  mt-2">
                      More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Facilities;
