import React from 'react';
import { Link } from 'react-router-dom';

// components
import AboutCard from '../components/sectioncompo/about/AboutCard';
import Classes from '../components/sectioncompo/about/Classes';
import Teachers from '../components/sectioncompo/about/Teachers';
import Testimonial from '../components/sectioncompo/about/Testimonial';
import Facility from '../components/sectioncompo/about/Facility';
import Header from '../components/common/Header';
import MiniHeader from '../components/common/MiniHeader';

const About = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <MiniHeader />
            <Header />
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 bg-img">
                            <div className="row">
                                <div className={`text-center fw-bold text-white about-heading animated-slide-down`}>
                                    About Page
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="middele-div">

            </div>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <AboutCard />
                        </div>

                    </div>
                </div>
            </section>

            {/* Courses section start******************************************************** */}
            <section>
                <div className='courses-heading animated-slide-down'>
                    <h1>Our Courses</h1>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <Classes />
                        </div>

                    </div>
                </div>
            </section>

            {/* Teacher section start **************************************************************/}
            <section>
                <div className='teacher-heading '>
                    <h1>Our Team</h1>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <Teachers />
                        </div>
                    </div>
                </div>
            </section>

            {/* Facility section start ************************************************************ */}

            <section>
                <div className="container">
                    <div className='facility-heading mt-5 mb-5' >
                        <h1>Our Facilities</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <Facility />
                        </div>

                    </div>
                </div>
            </section>

            {/* testimonial section start ***********************************************************/}

            <section>
                <div className="container">
                    <div className="row">
                        <div className='testi-heading mt-5 mb-5' >
                            <h1>Testimonial</h1>
                        </div>
                        <Testimonial />
                    </div>
                </div>
            </section>

            {/* uparrow for go top section */}

            <section>
                <div className="container">
                    <div className="row">
                        <div >
                            <p className='uparrow' onClick={scrollToTop}> <i className="fa-solid fa-arrow-up"></i></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
