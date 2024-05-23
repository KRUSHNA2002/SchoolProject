import React from 'react';
import { Link } from 'react-router-dom';

// components
import AboutCard from '../components/sectioncompo/about/AboutCard';
import Classes from '../components/sectioncompo/about/Classes';
import Teachers from '../components/sectioncompo/about/Teachers';

const About = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 bg-img bg-danger">
                            <div className="row">
                                <div className={`text-center fw-bold text-white about-heading animated-slide-down`}>
                                    About Page
                                </div>
                                <div className={`about-link animated-slide-down`}>
                                    <Link className='text-dark text-decoration-none disabled-link' style={{ fontSize: "20px" }} to='/about'>About</Link>&nbsp;&nbsp;
                                    <span className='text-dark mt-1'> / </span>&nbsp;&nbsp;
                                    <Link className='text-white text-decoration-none mt-1' to='/'>Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <AboutCard />
                        </div>

                    </div>
                </div>
            </section>

            {/* Courses section start */}
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

            {/* Teacher section start */}
            <section>
                <div className='teacher-heading animated-slide-down'>
                    <h1>Our Teachers</h1>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <Teachers />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
