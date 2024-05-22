import React from 'react';
import image from '../../../assets/images/about-card.jpg';
import { useInView } from 'react-intersection-observer';

const AboutCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5 // Trigger when 50% of the component is visible
  });

  return (
    <div ref={ref}>
      <div className={`card mb-3 ${inView ? 'animated-zoom-out' : ''}`} style={{ maxWidth: '100%' }}>
        <div className="row g-0">
          <div className="col-md-6 p-2">
            <img src={image} alt="" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="col-md-6 p-3 about-us">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">About Us </h2>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem neque repudiandae veniam delectus reiciendis tempore nemo distinctio recusandae, eos rerum, voluptatem ad provident porro quam aliquid nisi. Adipisci dolores nesciunt culpa doloribus molestias! Voluptates aspernatur suscipit quia dolorem rem quaerat, alias, aut neque odit optio, molestias voluptatum? Soluta, sequi?</p>

              <div className='text-center'>
                <button className='btn btn-dark mt-3'>Go to Form</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard;
