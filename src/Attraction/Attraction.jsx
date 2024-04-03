import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import "./attraction.css";

function Attraction() {
  return (
    <>
      <div className="titleSection aos-init aos-animate" data-aos="fade-up">
        <Fade direction='right'>
          <h2 className="text-center">Nearest Attraction</h2>
        </Fade>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="moto">
                <img src="https://www.treksandtrails.org/system/images/000/683/391/12118f8cbcd50aee45ae67601e2a1edf/banner/kohoj_fort.jpg?1686291445" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 contenth2">
              <Fade direction='up'>
                <h3 className='attra'>Kohoj Fort</h3>
              </Fade>
              <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat vero soluta dolores. Repudiandae adipisci corrupti animi pariatur? Nam dolorum accusantium atque maxime quaerat perspiciatis ipsam debitis ab modi eius eligendi iure minima quas vitae obcaecati numquam adipisci, sint aperiam. Unde eaque quia ducimus, perferendis quasi laudantium nam odio dolores maiores? Repellat perspiciatis dolorem, consectetur vero necessitatibus aliquam obcaecati suscipit deleniti delectus expedita atque commodi quibusdam illo?
                dolores maiores? Repellat perspiciatis dolorem, consectetur vero necessitatibus aliquam obcaecati suscipit deleniti delectus expedita atque commodi quibusdam illo
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Attraction;
