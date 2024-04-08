
import React, { useLayoutEffect } from 'react'
import { Fade, Slide } from "react-awesome-reveal";
import WeareSection from '../WeareSection/WeareSection';
function AbourP() {
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
   })
  return (
    <>
    <div className="homeScroll1">
  <div className="homeSection" id="home">
    <div className="homeText">
      <h1 style={{ color: "#fff" }}>Who We Are</h1>
    </div>
  </div>
</div>

<WeareSection/>

  <section className="aboutus">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 p-0 m-0">
        <Fade direction='right'>
        <div className="ourstory" data-aos="fade-left">
          <h3>Our Story</h3>
          <p>
          Our story is one of embracing nature's bounty, cultivating a haven where serenity meets adventure. From lush landscapes to captivating experiences, we invite guests to embark on a journey of discovery, forging unforgettable memories amidst the beauty of the countryside.
          </p>
        </div>

        </Fade>
        
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6"></div>
      <div className="col-lg-6 p-0 m-0" data-aos="fade-right">
        <Fade direction='left'>
        <div
          className="ourstory"
          style={{
            background:
              "linear-gradient(to left, rgb(255, 255, 255, 0.8), rgb(255, 255, 255, 0.8))"
          }}
        >
          <h3 style={{ color: "#111" }}>Our Vision</h3>
          <p style={{ color: "#111" }}>
          At Omkar Nature Farm, our vision is to create a sanctuary where guests can escape the bustle of urban life and reconnect with nature. Through sustainable practices and immersive experiences, we aim to foster a deep appreciation for the environment. Our goal is to provide a tranquil oasis where individuals can rejuvenate their minds, bodies, and spirits. With heartfelt hospitality and a commitment to sustainability, we aspire to inspire harmony between humanity and the natural world.







          </p>
        </div>
        </Fade>
      
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 p-0 m-0" data-aos="fade-left">
        <Fade direction='right'>
        <div className="ourstory">
          <h3>Our Mision</h3>
          <p>
          Our mission at Omkar Nature Farm is to provide guests with an immersive experience that reconnects them with nature, fosters relaxation, and promotes environmental stewardship through sustainable practices.
          </p>
        </div>
        </Fade>
        
      </div>
    </div>
  </div>
</section>


{/* Our team Members */}


{/* <section id="ourTeam" style={{ backgroundColor: "#eee" }}>
  <div className="titleSection">
    <h2>Our Team</h2>
  </div>
  <div className="container p-0 m-0">
    <div className="row d-flex justify-content-center align-content-center mt-5">
      <div className="col-md-3 d-flex justify-content-center align-content-center">
        <div className="teamCard">
          <div className="teamImage">
            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" alt="Mithilesh Pagdhare" />
          </div>
          <div className="teamName">
            <h3>Our Team member</h3>
            <p>Executive Chef</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center align-content-center">
        <div className="teamCard">
          <div className="teamImage">
            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" alt="Swaraj Raut" />
          </div>
          <div className="teamName">
            <h3>Our Team member</h3>
            <p>Management Team</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center align-content-center">
        <div className="teamCard">
          <div className="teamImage">
            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" alt="Uplakshya Yadav" />
          </div>
          <div className="teamName">
            <h3>Our Team member</h3>
            <p>Management Team</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}




    </>
  )
}

export default AbourP
