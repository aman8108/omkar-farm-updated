import React, { useLayoutEffect } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Fade } from 'react-awesome-reveal';
import ContectBanner from '../ContectBanner/ContectBanner';




function ContectP() {
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
   })
  return (
    <>
     
  <ContectBanner/>

  {/* ======================================= contact Us ================================== */}
  <section id="contact" className="contact">
    
    <div className="titleSection aos-init aos-animate" data-aos="fade-right">
      <Fade direction='right'>
      <h1>CONTACT US</h1>
      </Fade>
     
    </div>
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-4 p-0 m-0">
          <div className="contactCard">
            <div className="contactIcon">
              <span className="material-symbols-outlined"><CiLocationOn /></span>
            </div>
            <div className="contactText">
              <p>
              At:Ambhai, post:kanchad, Tal:Wada, Wada, Maharashtra 421303

              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0 m-0">
          <div className="contactCard">
            <div className="contactIcon">
              <span className="material-symbols-outlined"><IoMdCall /></span>
            </div>
            <div className="contactText">
              <a href="tel:+91 7028725777">
                <p>+91 8976256998</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0 m-0">
          <div className="contactCard">
            <div className="contactIcon">
              <span className="material-symbols-outlined"><CiMail /></span>
            </div>
            <div className="contactText">
              <p>formomkarnature@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="titleSection mt-5">
      <h4 style={{ fontSize: "2rem" }}>HELLO THERE!</h4>
    </div>
    <div className="contactImgIcon">
      <img
        src="https://s.w.org/images/core/emoji/13.1.0/svg/1f44b.svg"
        alt=""
      />
    </div>
    <div className="container">
      <div className="row  d-flex justify-content-center align-items-center">
        <div className="col-md-12 col-lg-6 p-0 m-0">
          <form
            action=""
            method="POST"
            role="form"
            className="php-email-form"
            id="form"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control custName custNameValidation"
                  id="name"
                  required=""
                />
                <span className="CustNameError" style={{ color: "red" }} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Phone</label>
                <input
                  type="number"
                  className="form-control custPhone custPhoneValidation"
                  name="subject"
                  id="subject"
                  required=""
                />{" "}
                <span className="MobileNoError" style={{ color: "red" }} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Your Email</label>
              <input
                type="email"
                className="form-control custEmail custEmailValidation"
                name="email"
                id="email"
                required=""
              />{" "}
              <span className="EmailError" style={{ color: "red" }} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Message</label>
              <textarea
                className="form-control custMessage"
                name="message"
                rows={6}
                required=""
                defaultValue={" "}
              />
            </div>
            <span className="MessageError" style={{ color: "red" }} />
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center cutomSubmit">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-content-center">
        <div className="col-lg-12 col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15025.20955219022!2d72.99306371534423!3d19.699746085695093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be711ae47145489%3A0x1406918813b8acab!2sOmkar%20Nature%20Farm!5e0!3m2!1sen!2sin!4v1711437599023!5m2!1sen!2sin"

            
            width="100%"
            height={400}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  {/* ===================================== footer ======================= */}
  
  {/* ==================================== Script Tag ======================== */}
  {/* Google tag (gtag.js) */}
</>

  
  )
}

export default ContectP
