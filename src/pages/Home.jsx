import React from "react";
import Header from "../components/common/Header";
import Facilities from "../components/sectioncompo/Home/Facilities";
import FacilitiesSection from "../components/sectioncompo/Home/FacilitiesSection";
import Slider from "../components/sectioncompo/Home/Slider";
import MiniHeader from "../components/common/MiniHeader";
import Contact from "../components/sectioncompo/Home/Contact";
import OurFacts from "../components/sectioncompo/Home/Our_Facts";

const Home = () => {
  return (
    <>
      <>
        {/* Mini Navbar */}
        <MiniHeader />
        {/* Navbar */}
        <Header />
        {/* Slider */}
        <section>
          <Slider />
        </section>

        {/* Our Facts */}
        <OurFacts />

        {/* Facilities */}
        <section>
          <div className="container-fluid facilities_bg">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 p-2">
                      <h1 className="text-center mt-3">
                        School <b className="text-danger">Facilities</b>
                      </h1>
                      <p className="text-center">
                        Eirmod sed ipsum dolor sit rebum labore magna erat.
                        Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.{" "}
                        <br /> Ipsum diam justo sed rebum vero dolor duo.
                      </p>
                    </div>
                    <Facilities />
                    <div className="container line"></div>
                    <FacilitiesSection />
                    <div className="container line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Us */}
        <section className="contact-us" id="contact">
          <Contact />
        </section>
      </>
    </>
  );
};

export default Home;
