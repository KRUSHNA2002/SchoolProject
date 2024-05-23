import React, { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Pankaj Kale',
      role: 'CEO, KAP-CD PVT.LTD',
      content: 'Working with this team was a pleasure. They delivered exceptional results on time and exceeded our expectations.'
    },
    {
      name: 'Krushna Waghumbare',
      role: 'Founder , KAP-CD PVT.LTD',
      content: 'I highly recommend their services. The team is professional, talented, and dedicated.'
    },
    {
      name: 'Prajwal Kale',
      role: 'HR Back-end Developer',
      content: 'I highly recommend their services. The team is professional, talented, and dedicated.'
    },
    {
      name: 'Amit Kolhe',
      role: 'HR Front-end Developer',
      content: 'I highly recommend their services. The team is professional, talented, and dedicated.'
    },
    {
      name: 'Chaitanya More',
      role: 'Head Manager , KAP-CD PVT.LTD',
      content: 'I highly recommend their services. The team is professional, talented, and dedicated.'
    },
    {
      name: 'Dnyandev Veer',
      role: 'Development Manager , KAP-CD PVT.LTD',
      content: 'I highly recommend their services. The team is professional, talented, and dedicated.'
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-zoom');
        }
      });
    });

    observer.observe(testimonialRef.current);

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 5 seconds

    return () => {
      clearInterval(interval);
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div ref={testimonialRef} className="container mb-5">
      <div className="row">
        <div className="col-md-12 testi-div">
          <div className="testimonial p-4 shadow-lg rounded" style={{ maxHeight: '400px', width: '80%' }}>
            <div className="testimonial-content text-center">
              <h3 className='mt-2'>{testimonials[currentTestimonialIndex].name}</h3>
              <p className='mt-3'>{testimonials[currentTestimonialIndex].role}</p>
              <blockquote className='mt-3'>{testimonials[currentTestimonialIndex].content}</blockquote>
            </div>
            <div className='mt-3 text-center'>
              <i className="text-warning fa-solid fa-star"></i>
              <i className="text-warning fa-solid fa-star"></i>
              <i className="text-warning fa-solid fa-star"></i>
              <i className="text-warning fa-solid fa-star"></i>
              <i className="text-warning fa-solid fa-star"></i>
            </div>
            <div className="arrows text-center mt-4">
              <button className="arrow left btn btn-outline-dark" onClick={goToPreviousTestimonial}>&#10094;</button>&nbsp;&nbsp;
              <button className="arrow right btn btn-outline-dark" onClick={goToNextTestimonial}>&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
