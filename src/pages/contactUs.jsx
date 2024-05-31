import React from "react";

const ContactUs = () => {



  return (
    <>
      <section>
        <div className="container-fluid contact">
          <div className="row">
            <div className="col-md-12 bg-img-contact">
              <div className="row">
                <div className={`text-center fw-bold text-white about-heading animated-slide-down`}>
                  Contact Us
                </div>
                <ul className={`text-center fw-bold text-white `}>
                  <li><a href="/">Home</a></li><span>|</span>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10301.664840436031!2d74.725580588267!3d19.10081579403119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0880b94485d%3A0x26c76370437e9d0d!2sNew%20Arts%2C%20Commerce%20and%20Science%20College!5e0!3m2!1sen!2sin!4v1716889505428!5m2!1sen!2sin" width="100%" height="450px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>
      </section>







    </>

  )

}

export default ContactUs;