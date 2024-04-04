import React from 'react'
import Banner from '../BannerSection/Banner'
import Services from '../Services/Services';
import Event from '../Event/Event';
import Activity from '../Activity/Activity';
import Testimonial from '../Testimonial/Testimonial';
import Youtube from '../Youtube/Youtube';
import Footer from '../Footer/Footer';
import Attraction from '../Attraction/Attraction';
import  { useLayoutEffect } from 'react'

function Home() {
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
   })
  return (
    <>
    <Banner/>
   <Services/>
    <Event/>
    <Activity/>
    <Attraction/>
    <Testimonial/>
    {/* <Youtube/> */}
   <Footer/>
    </>
  )
}

export default Home
