import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
      {/* About section start */}

      {/*  section first background image fiexed */}

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 bg-img-home "  >
              <div className="row">
                <div className='text-center fw-bold text-white home-heading animated-slide-down ' >
                  Home Page
                </div>
                <div className='home-link animated-slide-down ' >
                  <Link className='text-dark text-decoration-none' style={{ fontSize: '20px' }} to='/' >Home</Link>&nbsp;&nbsp;&nbsp;
                  <span className='text-dark mt-1' > / </span>&nbsp;&nbsp;
                  <Link className='text-white text-decoration-none mt-1' to='/about' >About</Link>&nbsp;
                  <span className='text-dark mt-1' > / </span>&nbsp;&nbsp;
                  <Link className='text-white text-decoration-none mt-1' to='/feedback' >FeedBack</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p>part 2 added</p>
      </section>
    </>
  )
}

export default Home;
