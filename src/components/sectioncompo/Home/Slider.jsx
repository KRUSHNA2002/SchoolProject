import React from "react";
import img1 from "../../../assets/home/slider_img1.jpg";
import img2 from "../../../assets/home/slider_img2.jpg";
import img3 from "../../../assets/home/slider_img3.jpg";

const Slider = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={img1}
                  className="d-block w-100 slider-image"
                  alt="Slide 1"
                />
                <div className="carousel-caption d-flex align-items-center justify-content-center h-100 animated-slide-down">
                  <div>
                    <h1 className="fw-bold text-light fs-1 mb-4">
                      Make A Brighter Future For Your Child
                    </h1>
                    <p className="text-white fs-6 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos, ullam blanditiis veniam cumque neque expedita,
                      necessitatibus tempora possimus nihil maxime est.
                      Reiciendis fuga qui enim voluptates eum modi quisquam
                      corrupti.
                    </p>
                    <div className="d-flex gap-2 col-6 mx-auto">
                      <button className="btn btn-lg rounded-lg text-white fw-bold btn-danger w-50">
                        Learn More
                      </button>
                      <button className="btn btn-lg rounded-lg text-white fw-bold btn-secondary w-50">
                        Our Classes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={img2}
                  className="d-block w-100 slider-image"
                  alt="Slide 1"
                />
                <div className="carousel-caption d-flex align-items-center justify-content-center h-100 animated-slide-down">
                  <div>
                    <h1 className="fw-bold text-light fs-1 mb-4">
                      Make A Brighter Future For Your Child
                    </h1>
                    <p className="text-white fs-6 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos, ullam blanditiis veniam cumque neque expedita,
                      necessitatibus tempora possimus nihil maxime est.
                      Reiciendis fuga qui enim voluptates eum modi quisquam
                      corrupti.
                    </p>
                    <div className="d-flex gap-2 col-6 mx-auto">
                      <button className="btn btn-lg rounded-lg text-white fw-bold btn-danger w-50">
                        Learn More
                      </button>
                      <button className="btn btn-lg rounded-lg text-white fw-bold btn-secondary w-50">
                        Our Classes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={img3}
                  className="d-block w-100 slider-image"
                  alt="Slide 1"
                />
                <div className="carousel-caption d-flex align-items-center justify-content-center h-100 animated-slide-down">
                  <div>
                    <h1 className="fw-bold text-light fs-1 mb-4">
                      Make A Brighter Future For Your Child
                    </h1>
                    <p className="text-white fs-6 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos, ullam blanditiis veniam cumque neque expedita,
                      necessitatibus tempora possimus nihil maxime est.
                      Reiciendis fuga qui enim voluptates eum modi quisquam
                      corrupti.
                    </p>
                    <div className="d-flex gap-2 col-6 mx-auto">
                      <button className="btn btn-lg rounded-lg text-white fw-bold btn-danger w-50">
                        Learn More
                      </button>
                      <button className="btn btn-lg rounded-lg text-white fw-bold btn-secondary w-50">
                        Our Classes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
