

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {  Pagination } from 'swiper/modules';
import "./review.css"
import { CiStar } from "react-icons/ci";
import { Fade } from 'react-awesome-reveal';

export default function Testimonial() {
  return (
    <>

<section class="cutomerReview" id="cutomerReview">
<div className="container">
        <div class="titleSection">
          <Fade direction='right'>
          <h2 class="text-center">Clients Say</h2>
          </Fade>
            
        </div>


        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}

        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2 ,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
                  className="swiper-slide swiper-slide-prev"
                  
                  data-swiper-slide-index={2}
                >
                  {" "}
                  <div
                    className="mb-5 tns-item tns-slide-active"
                    id="tns1-item0"
                  >
                    <div className="card card-overlay-slide text-bg-dark border-0">
                      <p>
                      Very good and peaceful place to enjoy with ur family and friendsBest time to visit is during monsoon time.
                   <div className="stars">
                   <ul>
                   <li>
                    <span className="material-symbols-outlined"><CiStar /></span>
                     </li>
                    <li>
                    <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
                  <li>
                  <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
                  <li>
                  <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
              </ul> 
            <h2 className='review'>Karan patil</h2>
                   </div>
                      </p>
                      <div className="testimonialName">
          </div>
                    </div>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
                  className="swiper-slide swiper-slide-active"
                  
                  data-swiper-slide-index={3}
                >
                  {" "}
                  <div
                    className="mb-5 tns-item tns-slide-active"
                    id="tns1-item0"
                  >
                    <div className="card card-overlay-slide text-bg-dark border-0  ">
                     <p>
                     A serene spot perfect for quality time with loved ones, especially recommended during the monsoon season.
                     <div className="stars">
                   <ul>
                   <li>
                    <span className="material-symbols-outlined"><CiStar /></span>
                     </li>
                    <li>
                    <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
                  <li>
                  <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
                  <li>
                  <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
              </ul> 
            <h2 className='review'>Viraj Raut</h2>
                   </div>
                     </p>
                     <div className="testimonialName">
          </div>
                    </div>
                  
                  </div>
                </div>
        </SwiperSlide>
        {/* <SwiperSlide>
        <div
                  className="swiper-slide swiper-slide-next"
                  
                  data-swiper-slide-index={0}
                >
                  <div
                    className="mb-5 tns-item tns-slide-active"
                    id="tns1-item0"
                  >
                    <div className="card card-overlay-slide text-bg-dark border-0">
                      <p>
                      Enchanting ambience, cozy rooms, refreshing pool, exceptional hospitality, especially from Manager Bhavesh. Highly recommended for families and large groups.
                      <div className="stars">
                   <ul>
                   <li>
                    <span className="material-symbols-outlined"><CiStar /></span>
                     </li>
                    <li>
                    <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
                  <li>
                  <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
                  <li>
                  <span className="material-symbols-outlined"><CiStar /></span>
                  </li>
              </ul> 
            <h2 className='review'>hari raut</h2>
                   </div>
                      </p>
                      <div className="testimonialName">
          </div>
                    </div>
                  </div>
                </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div>
                 <div
                   className="mb-5 tns-item tns-slide-active"
                   id="tns1-item0"
                 >
                   <div className="card card-overlay-slide text-bg-dark border-0">
                   <p>
                   An idyllic setting for bonding with loved ones, particularly favored for visits during the rainy season.
                   <div className="stars">
                  <ul>
                  <li>
                   <span className="material-symbols-outlined"><CiStar /></span>
                    </li>
                   <li>
                   <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
                 <li>
                 <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
                 <li>
                 <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
             </ul> 
           <h2 className='review'>AMIT Patel</h2>
                  </div>
                   </p>
                   <div className="testimonialName">
         </div>
                   </div>
                 </div>
               </div>
        </SwiperSlide> */}
        <SwiperSlide>
        <div>
                 
                 <div
                   className="mb-5 tns-item tns-slide-active"
                   id="tns1-item0"
                 >
                   <div className="card card-overlay-slide text-bg-dark border-0">
                   <p>
                   A tranquil haven, ideal for family and friends, especially enchanting amid the monsoon season's splendor.
                 <div className="stars">
                  <ul>
                  <li>
                   <span className="material-symbols-outlined"><CiStar /></span>
                    </li>
                   <li>
                   <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
                 <li>
                 <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
                 <li>
                 <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
             </ul> 
           <h2 className='review'>Shivam rane</h2>
                  </div>
                   </p>
                   <div className="testimonialName">
         </div>
                   </div>
                 </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div> 
                 <div
                   className="mb-5 tns-item tns-slide-active"
                   id="tns1-item0"
                 >
                   <div className="card card-overlay-slide text-bg-dark border-0">
                   <p>
                   The spa experience was heavenly, providing ultimate relaxation and rejuvenation. Skilled therapists and tranquil ambiance ensured a truly indulgent
                 <div className="stars">
                  <ul>
                  <li>
                   <span className="material-symbols-outlined"><CiStar /></span>
                    </li>
                   <li>
                   <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
                 <li>
                 <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
                 <li>
                 <span className="material-symbols-outlined"><CiStar /></span>
                 </li>
             </ul> 
           <h2 className='review'>shiv sakpal</h2>
                  </div>
                   </p>
                   <div className="testimonialName">
         </div>
                   </div>
                 </div>
               </div>
        </SwiperSlide>
        
      </Swiper>


      </div>
    </section>




    



   


         
    </>
  );
}









