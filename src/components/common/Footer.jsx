import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Still Water Public School<span>- call us at 514-888-2424</span></h5>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 img">
                  <img src={require("../../assets/images/footer/school.png")} className='img-fluid w-100' alt="" />
                </div>
                <div className="col-md-3">
                  <h4>About </h4>
                  <ul>
                    <li>Addmission</li>
                    <li>Academics</li>
                    <li>Faculty & Staff</li>
                    <li>Campus</li>
                    <li>Media</li>

                  </ul>
                </div>
                <div className="col-md-3">
                  <h4>Facilities</h4>
                  <ul>
                    <li>Classroom</li>
                    <li>Laboratories</li>
                    <li>Library</li>
                    <li>Music Room and Dance Studio</li>
                    <li>Art Room</li>
                  </ul>
                </div>
                <div className="col-md-3 ">
                  <h4>Contact</h4>
                  <ul>
                    <li><a href="#" target="_blank"><i className="fa fa-phone"></i></a>&nbsp;+434-23-232</li>
                    <li><a href="#" target="_blank"><i className="fa fa-phone"></i></a>&nbsp;Studifon&nbsp;+91-8894587893</li>
                    <li><a href="#" target="_blank"><i class="fa-regular fa-envelope"></i></a>&nbsp;stillwater@gmail.com</li>
                    <li><a href="#" target="_blank"><i class="fa-solid fa-fax"></i></a>&nbsp;+41 7645 34-2342</li>
                    <li><a href="#" target="_blank"><i class="fa-solid fa-location-dot"></i></a>&nbsp;333 Ullrich Springs, Percyshire, DE 84325</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 follow text-center">
          <ul>
            <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
        <hr />
        <div className='copyright'>
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 KAP-CD. All rights reserved.</p>
            </div>
            <div className="col-md-6">
            </div>
          </div>

        </div>
      </footer>
    </>

  )
}

export default Footer
