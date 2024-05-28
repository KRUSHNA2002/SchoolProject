import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import bcomeTeacher from "../../../assets/home/bcomeTeacher.jpg";
import img1 from "../../../assets/home/slider_img1.jpg";

const FacilitiesSection1 = () => {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjusted threshold to 1 for complete visibility
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const fadeIn = useSpring({
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? "translateY(0)" : "translateY(50px)",
  });

  const slideInRight = useSpring({
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? "translateX(0)" : "translateX(50px)",
  });

  const zoomIn = useSpring({
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? "scale(1)" : "scale(0.9)",
  });

  const slideInLeft = useSpring({
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? "translateX(0)" : "translateX(-50px)",
  });

  return (
    <div ref={sectionRef} className="container">
      <div className="row">
        <animated.div style={fadeIn} className="col-md-6 p-3">
          <h2 className="fw-bold">
            Learn More About Our Work And Our Cultural Activities
          </h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet Stet no et lorem
            dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum
            amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at,
            sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et
            dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.
          </p>
          <div className="d-flex">
            <button className="btn btn-danger btn-lg text-white rounded-lg">
              Read More
            </button>
          </div>
        </animated.div>
        <animated.div style={slideInRight} className="col-md-6 p-3">
          <div className="img-container section_img">
            <img src={img1} className="img-fluid" alt="" />
          </div>
        </animated.div>
        <animated.div style={zoomIn} className="col-md-6 pb-2">
          <div className="img-container section_img">
            <img src={bcomeTeacher} className="img-fluid" alt="" />
          </div>
        </animated.div>
        <animated.div style={slideInLeft} className="col-md-6 p-5">
          <h1>Become A Teacher</h1>
          <p className="mt-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet{" "}
          </p>
          <div className="btn btn-lg btn-danger mt-4 w-100 text-white">
            Get Started Now...
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default FacilitiesSection1;
