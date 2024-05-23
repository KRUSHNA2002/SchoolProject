import React from 'react';
import image from '../../../assets/images/about/courses/exel.jpg';
import image1 from '../../../assets/images/about/courses/neet.webp';
import image2 from '../../../assets/images/about/courses/jee.jpg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Classes = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2 // Trigger when 20% of the component is visible
    });

    return (
        <div ref={ref}>
            <div className="container">
                <div className="row">
                    <div className={`col-md-4 mb-5 ${inView ? 'animated-slide-in-left' : ''}`}>
                        <div className="card">
                            <img style={{ height: '200px' }} src={image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ms-Excel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 mb-5 ${inView ? 'animated-slide-in-left' : ''}`}>
                        <div className="card">
                            <img style={{ height: '200px' }} src={image1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ms-Excel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 mb-5 ${inView ? 'animated-slide-in-left' : ''}`}>
                        <div className="card">
                            <img style={{ height: '200px' }} src={image2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ms-Excel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classes;
