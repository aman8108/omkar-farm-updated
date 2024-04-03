import React from 'react'
import weare from "../Assets/omkae-image-6.jpg"
import { Fade, Slide } from "react-awesome-reveal";
import WeareSection from '../WeareSection/WeareSection';
function AbourP() {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod rerum facere. Recusandae doloremque animi tempora magnam iste repellendus non fugit aliquam, delectus minus molestias sapiente at praesentium voluptate vel perspiciatis eius exercitationem expedita consequuntur saepe eum rerum? Enim harum dignissimos nulla sint, minima voluptate!lorem14
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam praesentium aliquid voluptas labore, non nam?
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
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nostrum. Sunt cumque veritatis fugit doloribus inventore dolores officia voluptatem. Provident aliquid totam saepe explicabo molestias, cupiditate corporis ex, placeat deserunt impedit maxime cum sit fuga, atque et commodi nostrum porro id necessitatibus? Praesentium est eveniet dolor aliquid sequi inventore dolorum exercitationem laborum unde, laboriosam corporis sed, suscipit fuga, quas iste blanditiis necessitatibus! Laboriosam, expedita ullam?
            associates &amp; communities.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci laboriosam odit minima. Illum voluptas vero, beatae corporis odit non asperiores excepturi? Tenetur quidem quod laudantium? Consequuntur corrupti quas, dolore eaque ut nihil voluptatem odit minus quae dolor reiciendis! Odio?
          </p>
        </div>
        </Fade>
        
      </div>
    </div>
  </div>
</section>

<section id="ourTeam" style={{ backgroundColor: "#eee" }}>
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
</section>




    </>
  )
}

export default AbourP
