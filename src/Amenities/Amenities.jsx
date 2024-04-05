import React from 'react'
import { FaWifi } from "react-icons/fa";
import "./amenites.css"
import { IoFootballOutline } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";

import { FaPersonSwimming } from "react-icons/fa6";

import { TbAirConditioning } from "react-icons/tb";
import { CiWifiOn } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
function Amenities() {
  return (
    <>
      <div className="activityServices mt-5">
  <div className="row d-flex justify-content-center align-items-center">
    <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined"> <FaPersonSwimming /></span>
        </div>
        <div className="activityTittle">
          <h4>SWIMMING POOL</h4>
        </div>
        <div className="activityinfo">
          <p>
            The resort comprises an appointed guest room with modern amenities.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-3  col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined">  <CiWifiOn /></span>
        </div>
        <div className="activityTittle">
          <h4>AC &amp; WI-FI</h4>
        </div>
        <div className="activityinfo">
          <p>Enjoy complementary Wi-Fi and AC at all are properties.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3  col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined">  <FaCar /> </span>
        </div>
        <div className="activityTittle">
          <h4>PARKING AREA</h4>
        </div>
        <div className="activityinfo">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-3  col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined"> <MdOutlineRoomService /> </span>
        </div>
        <div className="activityTittle">
          <h4>ROOM SERVICE</h4>
        </div>
        <div className="activityinfo">
          <p>
            We care a lot about our guests &amp; the comfort that suits both of
            us.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Amenities
