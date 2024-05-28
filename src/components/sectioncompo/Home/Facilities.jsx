import React from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const Facilities = () => {
  return (
    <div>
      <Zoom>
        <div className="conatiner">
          <div className="row">
            <div class="col-md-3 col-sm-6 pb-4">
              <div class="card card-hover">
                <div class="school_icons mt-3">
                  <i class="fa-solid fa-bus text-center"></i>
                </div>
                <div class="card-body text-center">
                  <h3 class="card-title">School Bus</h3>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link
                      href="#"
                      class="btn btn-outline-danger  mt-2"
                    >
                      More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 pb-4">
              <div class="card card-hover">
                <div class="school_icons mt-3">
                  <i class="fa-regular fa-futbol"></i>
                </div>
                <div class="card-body text-center">
                  <h3 class="card-title">Playground</h3>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link
                      href="#"
                      class="btn btn-outline-danger  mt-2"
                    >
                      More..
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 pb-4">
              <div class="card card-hover">
                <div class="school_icons mt-3">
                  <i class="fa-solid fa-house"></i>
                </div>
                <div class="card-body text-center">
                  <h3 class="card-title">Healthy Canteen</h3>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link
                      href="#"
                      class="btn btn-outline-danger  mt-2"
                    >
                      More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 pb-4">
              <div class="card card-hover">
                <div class="school_icons mt-3">
                  <i class="fa-solid fa-chalkboard-user"></i>
                </div>
                <div class="card-body text-center">
                  <h3 class="card-title">Positive Learning</h3>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="card-footer  border-0">
                    <Link
                      href="#"
                      class="btn btn-outline-danger  mt-2"
                    >
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
