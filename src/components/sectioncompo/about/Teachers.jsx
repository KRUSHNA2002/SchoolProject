import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import teacher from '../../../assets/images/about/teachers/teacher.jpg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Teachers = () => {
    const ref = useRef(null);
    const { inView, ref: intersectionRef } = useInView({
        threshold: 0.5, // Adjusted threshold for better visibility in mobile view
        triggerOnce: true // Trigger animation only once
    });

    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)', // Slide up animation with reduced distance for mobile view
        config: { duration: 500 }
    });

    return (
        <div ref={intersectionRef}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-5" ref={ref}>
                        <animated.div style={props} className="card">
                            <img style={{ height: '200px' }} src={teacher} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ms-Excel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </animated.div>
                    </div>
                    <div className="col-md-3 mb-5" ref={ref}>
                        <animated.div style={props} className="card">
                            <img style={{ height: '200px' }} src={teacher} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ms-Excel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </animated.div>
                    </div>
                    <div className="col-md-3 mb-5" ref={ref}>
                        <animated.div style={props} className="card">
                            <img style={{ height: '200px' }} src={teacher} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ms-Excel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </animated.div>
                    </div>
                    <div className="col-md-3 mb-5" ref={ref}>
                        <animated.div style={props} className="card">
                            <img style={{ height: '200px' }} src={teacher} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ms-Excel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
