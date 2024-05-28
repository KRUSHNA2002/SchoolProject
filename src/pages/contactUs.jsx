import React from "react"

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
    </>
  )
}

export default ContactUs;