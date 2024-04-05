import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import collagee from "../Assets/Beige Minimalist.png"
import { Fade } from 'react-awesome-reveal'
function ActivityP() {
  useLayoutEffect(()=>{
   window.scrollTo(0,0)
  })
  return (
    <>

<div className="homeScroll3">
  <div className="homeSection" id="home">
  <div className="homeSection" id="home">
    <div className="homeText">
      <h1 style={{ color: "#fff" }}>Activity</h1>
    </div>
  </div>
  </div>
</div>

    
    <section id="activity">
  <div className="titleSection">
    <h1>Our Activity</h1>
  </div>
  <div className="container">
    <div className="row">
      
      <div className="col-lg-3 aos-init aos-animate" data-aos="fade-right">
      <Fade direction='left'>
        <div className="row">
          <div className="col-lg-12">
            <div className="activityText">
              <h3>Wifi&amp; Lawn</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla rerum fuga magnam iste deserunt.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
          <div className="activityText">
         
              <h3>Swimming pool</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              
            </div>
        
         
          </div>
          <div className="col-lg-12">
            
            <div className="activityText">
              <h3>Badminton</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            
        
          </div>
        </div>
      </Fade>
      </div>
      
      <div className="col-lg-6">
        <Fade direction='zoom-in-up' duration={1000}>
        <div className="activeImage aos-init aos-animate" data-aos="zoom-in-up">
          <img
            src={collagee}
            alt="Candle Light Dinner Setup"
          />
        </div>
        </Fade>
        
      </div>
      <div className="col-lg-3 aos-init aos-animate" data-aos="fade-left">
        <Fade direction='right'>
        <div className="row">
          <div className="col-lg-12">
            <div className="activityText">
              <h3>Cricket</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores esse explicabo dolores blanditiis cupiditate.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="activityText">
              <h3>football</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur voluptates facilis mollitia velit repellat quisqu
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="activityText">
              <h3>chess and carrom</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto consequuntur laborum vero!
              </p>
            </div>
          </div>
        </div>
        </Fade>
       
      </div>
      <div className="d-flex justify-content-center align-item-center mt-5">
        <div className="buttonnav p-2">

          <Link to="/contect-us"  className="programServiceButton"
            data-bs-toggle="modal"
            data-bs-target="#">

Enquiry Now
          
          </Link>
         
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default ActivityP
