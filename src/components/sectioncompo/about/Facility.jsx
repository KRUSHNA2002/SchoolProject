import React from 'react';
import { useInView } from 'react-intersection-observer';
import image from '../../../assets/images/about/facility/24-7.webp';
import image1 from '../../../assets/images/about/facility/library.avif';
import image2 from '../../../assets/images/about/facility/multi-course.webp';
import image3 from '../../../assets/images/about/facility/teacher.jpg';

const Facility = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5 // Trigger when 50% of the component is visible
    });

    return (
        <div ref={ref}  >
            <div className={`card mb-3 ${inView ? 'animated-zoom-out' : ''}`} style={{ maxWidth: '100%', maxHeight: '500px' }}>
                <div className="row g-0" >
                    <div className="col-md-4 col-12 p-2">
                        <img src={image3} alt="" style={{ width: '100%', maxHeight: '200px' }} />
                    </div>
                    <div className="col-md-8 col-12 p-3 facility-us">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-3">Good Teachers</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur id iure placeat voluptate molestiae laborum sed commodi, eaque at!</p>


                        </div>
                    </div>
                </div>
            </div>

            <div className={`card mb-3 ${inView ? 'animated-zoom-out' : ''}`} style={{ maxWidth: '100%', maxHeight: '500px' }}>
                <div className="row g-0" >
                    <div className="col-md-8 col-12 p-3 facility-us">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-3">24 / 7 Support</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur id iure placeat voluptate molestiae laborum sed commodi, eaque at!</p>


                        </div>
                    </div>
                    <div className="col-md-4 col-12 p-2">
                        <img src={image} alt="" style={{ width: '100%', maxHeight: '200px' }} />
                    </div>
                </div>
            </div>

            <div className={`card mb-3 ${inView ? 'animated-zoom-out' : ''}`} style={{ maxWidth: '100%', maxHeight: '500px' }}>
                <div className="row g-0" >
                    <div className="col-md-4 col-12 p-2">
                        <img src={image2} alt="" style={{ width: '100%', maxHeight: '200px' }} />
                    </div>
                    <div className="col-md-8 col-12 p-3 facility-us">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-3">Multi Courses</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur id iure placeat voluptate molestiae laborum sed commodi, eaque at!</p>


                        </div>
                    </div>
                </div>
            </div>

            <div className={`card mb-3 ${inView ? 'animated-zoom-out' : ''}`} style={{ maxWidth: '100%', maxHeight: '500px' }}>
                <div className="row g-0" >
                    <div className="col-md-8 col-12 p-3 facility-us">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-3">Library</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur id iure placeat voluptate molestiae laborum sed commodi, eaque at!</p>


                        </div>
                    </div>
                    <div className="col-md-4 col-12 p-2">
                        <img src={image1} alt="" style={{ width: '100%', maxHeight: '200px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility;
