import React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const About = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 bg-img-home "  >
                            <div className="row">
                                <div className='text-center fw-bold text-white home-heading animated-slide-down ' >
                                    Home Page
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
