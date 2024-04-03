import React from 'react'
import chair from "../Assets/eventfood.jpg"
import chair2 from "../Assets/food.jpg"
import "./weAre.css"
function WeareSection() {
  return (
    <>
    <section id="about" className="pt-14 pb-14">
  <div className="container">
    <div
      className="row align-items-start align-items-md-stretch"
      data-cues="fadeIn"
      data-disabled="true"
    >
      <div
        className="col-12 col-lg-6 order-1 order-lg-0"
        data-cue="fadeIn"
        data-show="true"
        style={{
          animationName: "fadeIn",
          animationDuration: "1000ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both"
        }}
      >
        <div
          className="react-reveal row g-0"
          style={{
            animationFillMode: "both",
            animationDuration: "1000ms",
            animationDelay: "0ms",
            animationIterationCount: 1,
            opacity: 1,
            animationName: "react-reveal-696799997875020-1"
          }}
        >
          <div className="col-6 order-md-1 order-2">
            <figure className="mb-0 pe-3 pe-md-4 pe-lg-5">
            
            {/* <Fade left>  */}
            <img
                src={chair}
               
                className="img-fluid w-100 rounded shadow-sm"
                alt=""
              />
              {/* </Fade> */}
            </figure>
          </div>
          <div className="col-6 order-md-1 order-2">
            <figure className="mb-0 pt-9">
            {/* <Fade left>  */}
              <img
                src={chair2}
               
                className="img-fluid w-100 rounded shadow-sm "
                alt=""
              />
              {/* </Fade> */}
            </figure>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-6 order-0 order-lg-1 order-md-2 order-1"
        data-cue="fadeIn"
        data-show="true"
        style={{
          animationName: "fadeIn",
          animationDuration: "1000ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both"
        }}
      >
        <div
          className="react-reveal bg-white h-100 d-flex align-items-center"
          style={{
            animationFillMode: "both",
            animationDuration: "1000ms",
            animationDelay: "0ms",
            animationIterationCount: 1,
            opacity: 1,
            animationName: "react-reveal-696799997875020-2"
          }}
        >
          <div className="p-lg-5 mb-8">
            {/* <Fade left > */}
            <span className="mb-2 fw-medium text-secondary ff-sub text-uppercase ls-1 d-block">
              Welcome to
            </span>
            <h2 className=" ff-heading">Omkar Farm</h2>
            <p className="mb-6">

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laborum alias saepe deserunt perferendis et exercitationem nisi omnis vero numquam? Vero repellat reiciendis sapiente fugit neque omnis laborum iste expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam earum error? Neque impedit atque perspiciatis ratione asperiores architecto dolorum reprehenderit illum consectetur odio ex culpa iure, dicta rem nam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cum, excepturi saepe unde consectetur laborum voluptates sapiente eligendi totam voluptatibus corporis, et laudantium quaerat deleniti. Architecto repellat aspernatur delectus accusamus.
            </p>
            <a role="button" tabIndex={0} href="#!" className="custom-btn "> 
            <a href="/wedding-event-planner-mumbai" style={{ color: "white" }}>
              Read More
            </a>
            </a>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default WeareSection
