import React, { useState } from 'react';
import omkarNature from "../Json/JsonDaata";
import  { useLayoutEffect } from 'react'
import { Image } from 'antd';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function GalleryP() {
  const [items, setItems] = useState(omkarNature);
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
   })

  const filterItems = (category) => {
    if (category === 'All') {
      setItems(omkarNature);
    } else {
      const updatedItems = omkarNature.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <>
     
    
       <div className="homeScroll4">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h1 style={{ color: "#fff" }}>Gallery</h1>
          </div>
        </div>
      </div>
    
     
  
    <div className="container">



      <section className="myGallery">
        <div className="titleSection">
          <h3>Browse our Gallery</h3>
        </div>
        <div className="filters filter-button-group">
          <ul>
            <li className="active">
              <a href="#all" onClick={() => filterItems('All')}>All</a>
            </li>
            <li>
              <a href="#room" onClick={() => filterItems('room')}>Room</a>
            </li>
            <li>
              <a href="#swimmingpool" onClick={() => filterItems('Swimmingpool')}>Swimming Pool</a>
            </li>
            <li>
              <a href="#events" onClick={() => filterItems('events')}>Events</a>
            </li>
            <li>
              <a href="#activities" onClick={() => filterItems('activity')}>Activities</a>
            </li>
          </ul>
        </div>

        {/* <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 hero" style={{ marginBottom: "20px" }}>
              <div id="containergallery" className="isotope" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="grid-item" data-filter={item.category} data-page={1} style={{ left: 0, top: 0 }}>
                
  <Image
    
    src={item.imageUr1} alt="" style={{ marginBottom: "10px", maxWidth: "100%", alignSelf: "center" }} />
    <div className="overlay">{item.title}</div>

                  
                </div>
              </div>
            </div>
          ))}
        </div> */}

<Box>
      <ImageList variant="masonry" cols={4} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              srcSet={`${item.imageUr1}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imageUr1}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
      </section>
    </div>
    </>
  );
}

export default GalleryP;
